-- ============================================================
-- Sindh Indigenous Rights Alliance - Row Level Security
-- schema.sql ke BAAD run karein
-- ============================================================

alter table public.profiles enable row level security;
alter table public.members enable row level security;
alter table public.cases enable row level security;
alter table public.events enable row level security;
alter table public.news enable row level security;
alter table public.contact_messages enable row level security;

-- ---------- profiles ----------
drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin" on public.profiles
  for select to authenticated
  using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_update_admin" on public.profiles;
create policy "profiles_update_admin" on public.profiles
  for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ---------- members (sirf admin/editor) ----------
drop policy if exists "members_select_staff" on public.members;
create policy "members_select_staff" on public.members
  for select to authenticated using (public.is_staff());

drop policy if exists "members_insert_staff" on public.members;
create policy "members_insert_staff" on public.members
  for insert to authenticated with check (public.is_staff());

drop policy if exists "members_update_staff" on public.members;
create policy "members_update_staff" on public.members
  for update to authenticated using (public.is_staff()) with check (public.is_staff());

drop policy if exists "members_delete_admin" on public.members;
create policy "members_delete_admin" on public.members
  for delete to authenticated using (public.is_admin());

-- ---------- cases (sirf admin/editor) ----------
drop policy if exists "cases_select_staff" on public.cases;
create policy "cases_select_staff" on public.cases
  for select to authenticated using (public.is_staff());

drop policy if exists "cases_insert_staff" on public.cases;
create policy "cases_insert_staff" on public.cases
  for insert to authenticated with check (public.is_staff());

drop policy if exists "cases_update_staff" on public.cases;
create policy "cases_update_staff" on public.cases
  for update to authenticated using (public.is_staff()) with check (public.is_staff());

drop policy if exists "cases_delete_admin" on public.cases;
create policy "cases_delete_admin" on public.cases
  for delete to authenticated using (public.is_admin());

-- ---------- events (sab dekh sakte hain, staff manage karein) ----------
drop policy if exists "events_select_public" on public.events;
create policy "events_select_public" on public.events
  for select to anon, authenticated using (true);

drop policy if exists "events_write_staff" on public.events;
create policy "events_write_staff" on public.events
  for all to authenticated
  using (public.is_staff()) with check (public.is_staff());

-- ---------- news (published sab ko, baqi staff ko) ----------
drop policy if exists "news_select_published" on public.news;
create policy "news_select_published" on public.news
  for select to anon, authenticated
  using (published = true or public.is_staff());

drop policy if exists "news_write_staff" on public.news;
create policy "news_write_staff" on public.news
  for all to authenticated
  using (public.is_staff()) with check (public.is_staff());

-- ---------- contact_messages (koi bhi bhej sakta hai, sirf staff parhe) ----------
drop policy if exists "contact_insert_public" on public.contact_messages;
create policy "contact_insert_public" on public.contact_messages
  for insert to anon, authenticated
  with check (char_length(message) > 0);

drop policy if exists "contact_select_staff" on public.contact_messages;
create policy "contact_select_staff" on public.contact_messages
  for select to authenticated using (public.is_staff());

drop policy if exists "contact_update_staff" on public.contact_messages;
create policy "contact_update_staff" on public.contact_messages
  for update to authenticated using (public.is_staff()) with check (public.is_staff());

drop policy if exists "contact_delete_admin" on public.contact_messages;
create policy "contact_delete_admin" on public.contact_messages
  for delete to authenticated using (public.is_admin());

-- ============================================================
-- PEHLA ADMIN BANANE KE LIYE:
-- 1) Supabase > Authentication > Users mein user banayein / login karein
-- 2) Phir yeh chalayein (email apni dalein):
--
-- update public.profiles
-- set role = 'admin'
-- where id = (select id from auth.users where email = 'aap-ki-email@example.com');
-- ============================================================