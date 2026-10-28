-- ============================================================
-- Sindh Indigenous Rights Alliance - Sample Data
-- schema.sql aur policies.sql ke BAAD run karein
-- Yeh sirf test ke liye nominal data hai, asli data se badal dein
-- ============================================================

insert into public.members (full_name, email, phone, district, community, status, joined_on) values
  ('Ali Raza',      'ali.raza@example.com',      '0300-0000001', 'Tharparkar', 'Kohli',  'active',   '2025-01-15'),
  ('Sana Bheel',    'sana.bheel@example.com',    '0300-0000002', 'Umerkot',    'Bheel',  'active',   '2025-03-02'),
  ('Dilip Meghwar', 'dilip.meghwar@example.com', '0300-0000003', 'Mirpurkhas', 'Meghwar','active',   '2025-05-20'),
  ('Rukhsana Jat',  'rukhsana.jat@example.com',  '0300-0000004', 'Badin',      'Jat',    'pending',  '2025-08-11'),
  ('Karim Mallah',  'karim.mallah@example.com',  '0300-0000005', 'Thatta',     'Mallah', 'inactive', '2024-11-30');

insert into public.cases (title, description, district, category, status, priority, reported_on) values
  ('Zameen par qabze ka masla',     'Gaon ki zameen par ghair qanooni qabze ki shikayat.', 'Tharparkar', 'land',      'open',        'high',   '2025-09-01'),
  ('Peenay ke pani ki qillat',      'Kai mahino se saaf pani ki supply band hai.',          'Umerkot',    'water',     'in_progress', 'high',   '2025-09-14'),
  ('School band hone ka masla',     'Gaon ka primary school teachers na hone se band hai.', 'Mirpurkhas', 'education', 'open',        'medium', '2025-10-03'),
  ('Dispensary mein dawaon ki kami','Basic dawaon ki supply nahi mil rahi.',                'Badin',      'health',    'resolved',    'medium', '2025-07-22'),
  ('Qadeemi qabristan ki hifazat',  'Qadeemi qabristan ko nuqsan pohanchne ka khatra.',      'Thatta',     'cultural',  'in_progress', 'low',    '2025-08-30');

insert into public.events (title, description, location, event_date, status) values
  ('Community Awareness Workshop', 'Haqooq aur qanooni madad par agahi workshop.', 'Mithi, Tharparkar', now() + interval '14 days', 'upcoming'),
  ('Legal Aid Camp',               'Muft qanooni mashwara camp.',                  'Umerkot',           now() + interval '30 days', 'upcoming'),
  ('Annual Members Meeting',       'Salana ijlas aur karkardagi report.',          'Hyderabad',         now() - interval '60 days', 'completed');

insert into public.news (title, content, published) values
  ('Alliance ka naya dashboard shuru',  'Hum ne members aur cases ke liye naya dashboard shuru kiya hai.', true),
  ('Pani ke masle par mulaqat',         'Wafd ne mutasira ilaqon ke afsaran se mulaqat ki.',               true),
  ('Draft: Agle mahine ka mansooba',    'Yeh abhi shaya nahi hua.',                                         false);

insert into public.contact_messages (name, email, message, is_read) values
  ('Ahmed Khan', 'ahmed@example.com', 'Main volunteer ke taur par shamil hona chahta hoon.', false),
  ('Meena Kumari', 'meena@example.com', 'Hamare gaon mein pani ka masla hai, madad chahiye.', false);