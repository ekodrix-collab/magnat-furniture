import { createClient } from "@/lib/supabase-server";
import ProductForm from "../ProductForm";

export default async function NewProductPage() {
  const supabase = await createClient();
  
  // Fetch categories for the dropdown
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <ProductForm categories={categories || []} />
    </div>
  );
}
