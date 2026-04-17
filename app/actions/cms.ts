"use server";

import { createClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

/**
 * Update the status of a customer inquiry
 */
export async function updateInquiryStatus(id: string, status: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("inquiries")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("Error updating inquiry status:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/inquiries");
  return { success: true };
}

/**
 * Save or update a product
 */
export async function saveProduct(formData: FormData) {
  const supabase = await createClient();
  
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const short_description = formData.get("short_description") as string;
  const price = formData.get("price") as string;
  const delivery_time = formData.get("delivery_time") as string;
  const material = formData.get("material") as string;
  const badge = formData.get("badge") as string;
  const category_id = formData.get("category_id") as string;
  const type = formData.get("type") as string;
  
  const is_new = formData.get("is_new") === "true";
  const is_bestseller = formData.get("is_bestseller") === "true";
  const is_featured = formData.get("is_featured") === "true";
  const is_active = formData.get("is_active") === "true";
  
  const images = formData.getAll("images") as string[];
  const features = JSON.parse(formData.get("features") as string || "[]");
  const specifications = JSON.parse(formData.get("specifications") as string || "[]");

  const productData = {
    name,
    slug,
    description,
    short_description,
    price,
    delivery_time,
    material,
    badge,
    category_id: category_id || null,
    type,
    is_new,
    is_bestseller,
    is_featured,
    is_active,
    images: images.filter(img => img), // Remove empty strings
    features,
    specifications,
    updated_at: new Date().toISOString(),
  };

  let query;
  if (id && id !== "new") {
    query = supabase.from("products").update(productData).eq("id", id);
  } else {
    query = supabase.from("products").insert([productData]);
  }

  const { error } = await query;

  if (error) {
    console.error("Error saving product:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/products");
  revalidatePath("/products");
  revalidatePath(`/products/${slug}`);
  
  return { success: true };
}

/**
 * Delete a product
 */
export async function deleteProduct(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting product:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/products");
  return { success: true };
}

/**
 * Save or update a hero slide
 */
export async function saveHeroSlide(formData: FormData) {
  const supabase = await createClient();
  
  const id = formData.get("id") as string;
  const heading = formData.get("heading") as string;
  const description = formData.get("description") as string;
  const image_url = formData.get("image_url") as string;
  const alt_text = formData.get("alt_text") as string;
  const sort_order = parseInt(formData.get("sort_order") as string || "0");
  const is_active = formData.get("is_active") === "true";

  const slideData = {
    heading,
    description,
    image_url,
    alt_text,
    sort_order,
    is_active,
  };

  let query;
  if (id && id !== "new") {
    query = supabase.from("hero_slides").update(slideData).eq("id", id);
  } else {
    query = supabase.from("hero_slides").insert([slideData]);
  }

  const { error } = await query;

  if (error) {
    console.error("Error saving hero slide:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/hero-slides");
  revalidatePath("/");
  return { success: true };
}

/**
 * Delete a hero slide
 */
export async function deleteHeroSlide(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("hero_slides")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting hero slide:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/hero-slides");
  revalidatePath("/");
  return { success: true };
}

/**
 * Save or update a category
 */
export async function saveCategory(formData: FormData) {
  const supabase = await createClient();
  
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const image_url = formData.get("image_url") as string;
  const description = formData.get("description") as string;
  const sort_order = parseInt(formData.get("sort_order") as string || "0");
  const is_featured = formData.get("is_featured") === "true";

  const categoryData = {
    name,
    slug,
    image_url,
    description,
    sort_order,
    is_featured,
  };

  let query;
  if (id && id !== "new") {
    query = supabase.from("categories").update(categoryData).eq("id", id);
  } else {
    query = supabase.from("categories").insert([categoryData]);
  }

  const { error } = await query;

  if (error) {
    console.error("Error saving category:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/categories");
  revalidatePath("/");
  return { success: true };
}

/**
 * Delete a category
 */
export async function deleteCategory(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("categories")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting category:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/categories");
  return { success: true };
}

/**
 * Save or update a testimonial
 */
export async function saveTestimonial(formData: FormData) {
  const supabase = await createClient();
  
  const id = formData.get("id") as string;
  const client_name = formData.get("client_name") as string;
  const client_role = formData.get("client_role") as string;
  const quote = formData.get("quote") as string;
  const rating = parseInt(formData.get("rating") as string || "5");
  const client_image = formData.get("client_image") as string;
  const is_active = formData.get("is_active") === "true";

  const testimonialData = {
    client_name,
    client_role,
    quote,
    rating,
    client_image,
    is_active,
  };

  let query;
  if (id && id !== "new") {
    query = supabase.from("testimonials").update(testimonialData).eq("id", id);
  } else {
    query = supabase.from("testimonials").insert([testimonialData]);
  }

  const { error } = await query;

  if (error) {
    console.error("Error saving testimonial:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  return { success: true };
}

/**
 * Delete a testimonial
 */
export async function deleteTestimonial(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("testimonials")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting testimonial:", error);
    return { error: error.message };
  }

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  return { success: true };
}
