// ============================================
// MAGNAT FURNITURE — TypeScript Types
// ============================================

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  category_id: string | null;
  images: string[];
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  category?: Category;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  sort_order: number;
  is_featured: boolean;
  created_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  client_image: string | null;
  quote: string;
  rating: number;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export interface HomepageSection {
  id: string;
  section_key: string;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  image_url: string | null;
  cta_text: string | null;
  cta_url: string | null;
  is_active: boolean;
  updated_at: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo_url: string;
  sort_order: number;
  is_active: boolean;
}

export interface InstagramPost {
  id: string;
  image_url: string;
  caption: string | null;
  post_url: string | null;
  sort_order: number;
  is_active: boolean;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  message: string | null;
  product_id: string | null;
  created_at: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
