-- ============================================================
-- Sindh Indigenous Rights Alliance - Database Schema
-- Supabase > SQL Editor mein sab se pehle yeh file run karein
-- ============================================================

create extension if not exists "pgcrypto";

-- ---------- Profiles (har login user ka role) ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'viewer' check (role in ('admin', 'editor', 'viewer')),
  created_at timestamptz not null default now()
);

-- Naya user bante hi uska profile khud ban jaye
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.email));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Check karne ke liye: kya current user admin hai?
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- Admin ya editor?
create or replace function public.is_staff()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin', 'editor')
  );
$$;

-- ---------- Members ----------
create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text,
  phone text,
  district text,
  community text,
  status text not null default 'active' check (status in ('active', 'inactive', 'pending')),
  joined_on date not null default current_date,
  created_at timestamptz not null default now()
);

-- ---------- Cases (haqooq ki khilaf-warzi ke cases) ----------
create table if not exists public.cases (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  district text,
  category text check (category in ('land', 'water', 'education', 'health', 'cultural', 'other')),
  status text not null default 'open' check (status in ('open', 'in_progress', 'resolved', 'closed')),
  priority text not null default 'medium' check (priority in ('low', 'medium', 'high')),
  reported_on date not null default current_date,
  assigned_to uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ---------- Events ----------
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  location text,
  event_date timestamptz not null,
  status text not null default 'upcoming' check (status in ('upcoming', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

-- ---------- News / Updates ----------
create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text,
  published boolean not null default false,
  author_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ---------- Contact messages (website ka contact form) ----------
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

-- ---------- Indexes ----------
create index if not exists idx_members_district on public.members(district);
create index if not exists idx_cases_status on public.cases(status);
create index if not exists idx_cases_district on public.cases(district);
create index if not exists idx_events_date on public.events(event_date);
create index if not exists idx_news_published on public.news(published);