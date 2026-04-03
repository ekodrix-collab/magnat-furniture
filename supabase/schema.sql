-- ============================================
-- MAGNAT FURNITURE — DATABASE SCHEMA
-- ============================================

-- Enable pgcrypto for UUID generation
create extension if not exists pgcrypto;

-- 1. CATEGORIES
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  image_url text,
  sort_order int default 0,
  is_featured boolean default false,
  created_at timestamptz default now()
);

-- 2. PRODUCTS
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  short_description text,
  category_id uuid references categories(id) on delete set null,
  images text[] default '{}',              -- Array of image URLs
  features text[] default '{}',            -- Array of feature strings
  specifications jsonb default '[]',       -- JSON array of {label, value}
  is_featured boolean default false,
  is_active boolean default true,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- 3. TESTIMONIALS
create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  client_image text,
  client_role text,
  quote text not null,
  rating int default 5 check (rating >= 1 and rating <= 5),
  is_active boolean default true,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- 4. HOMEPAGE SECTIONS (CMS)
create table if not exists homepage_sections (
  id uuid primary key default gen_random_uuid(),
  section_key text unique not null,   -- e.g. 'hero', 'banner', 'experience'
  title text,
  subtitle text,
  description text,
  image_url text,
  cta_text text,
  cta_url text,
  is_active boolean default true,
  updated_at timestamptz default now()
);

-- 5. CLIENT LOGOS
create table if not exists client_logos (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text not null,
  sort_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- 6. INSTAGRAM CONTENT
create table if not exists instagram_posts (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  caption text,
  post_url text,
  sort_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- 7. INQUIRIES (LEAD GENERATION)
create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  message text,
  interest_category text,
  product_id uuid references products(id) on delete set null,
  status text default 'pending' check (status in ('pending', 'contacted', 'resolved', 'archived')),
  created_at timestamptz default now()
);

-- ============================================
-- STORAGE BUCKETS (Manual Setup via UI)
-- ============================================
-- Create 'products' bucket
-- Create 'categories' bucket
-- Create 'media' bucket

-- ============================================
-- RLS POLICIES (Row Level Security)
-- ============================================

-- Categories: Public Read, Auth Write
alter table categories enable row level security;
create policy "Allow public read-only access to categories" on categories for select using (true);
create policy "Allow auth admin full access to categories" on categories for all using (auth.role() = 'authenticated');

-- Products: Public Read, Auth Write
alter table products enable row level security;
create policy "Allow public read-only access to products" on products for select using (is_active = true);
create policy "Allow auth admin full access to products" on products for all using (auth.role() = 'authenticated');

-- Testimonials: Public Read, Auth Write
alter table testimonials enable row level security;
create policy "Allow public read-only access to testimonials" on testimonials for select using (is_active = true);
create policy "Allow auth admin full access to testimonials" on testimonials for all using (auth.role() = 'authenticated');

-- Inquiries: Auth Insert (from form), Auth Read/Write (from dashboard)
alter table inquiries enable row level security;
create policy "Allow anyone to insert inquiries" on inquiries for insert with check (true);
create policy "Allow auth admin full access to inquiries" on inquiries for all using (auth.role() = 'authenticated');
