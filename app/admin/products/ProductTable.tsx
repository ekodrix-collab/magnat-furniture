"use client";

import { useState } from "react";
import Link from "next/link";
import { Edit2, Trash2, ExternalLink, Database, Terminal } from "lucide-react";
import { deleteProduct } from "@/app/actions/cms";
import { Product } from "@/lib/types";

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string, name: string) => {
    if (!id || id.length < 10) { // Safety check to prevent deleting fallback items which use slugs as IDs
      alert("Local fallback items cannot be deleted from the dashboard. These must be managed in the source code.");
      return;
    }

    if (!confirm(`Are you sure you want to delete "${name}"? This action cannot be undone.`)) return;

    setIsDeleting(id);
    const result = await deleteProduct(id);
    if (result.error) {
      alert("Error deleting product: " + result.error);
    }
    setIsDeleting(null);
  };

  return (
    <div className="overflow-x-auto font-inter">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#E5DED6] text-left">
            <th className="pb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50 pl-2">Product</th>
            <th className="pb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">Category</th>
            <th className="pb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">Price</th>
            <th className="pb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">Source</th>
            <th className="pb-4 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50 text-right pr-2">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F0F2F5]">
          {products.map((product, i) => {
            const isLocal = !product.id || product.id === product.slug;
            
            return (
              <tr key={product.id || i} className={`group hover:bg-[#F9F9F9] transition-colors ${isDeleting === product.id ? "opacity-30" : ""}`}>
                <td className="py-6 pl-2">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-xl bg-[#EFE7DF] overflow-hidden border border-[#DCD3C9] flex-shrink-0">
                      {product.images?.[0] ? (
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#8B1E1E] font-bold text-[10px] uppercase">No Img</div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#8B1E1E] transition-colors">{product.name}</h4>
                      <p className="text-[0.65rem] text-[#1A1A1A]/60 font-medium truncate max-w-[200px] font-number opacity-80">{product.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="py-6">
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#1A1A1A] bg-white border border-[#E5DED6] px-3 py-1 rounded-full whitespace-nowrap">
                    {typeof product.category_id === 'string' ? product.category_id : "Uncategorized"}
                  </span>
                </td>
                <td className="py-6 text-sm font-bold text-[#1A1A1A] whitespace-nowrap font-number">
                  {product.price || "N/A"}
                </td>
                <td className="py-6">
                  <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-md ${isLocal ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700'}`}>
                    {isLocal ? <Terminal size={10} /> : <Database size={10} />}
                    <span className="text-[0.55rem] font-bold uppercase tracking-[0.1em]">
                      {isLocal ? 'Local Code' : 'Database'}
                    </span>
                  </div>
                </td>
                <td className="py-6 pr-2 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link 
                      href={`/products/${product.slug}`}
                      target="_blank"
                      className="p-2 text-body/40 hover:text-[#1A1A1A] transition-colors"
                      title="View on Site"
                    >
                      <ExternalLink size={16} />
                    </Link>
                    {!isLocal && (
                      <Link 
                        href={`/admin/products/${product.id}`}
                        className="p-2 text-body/40 hover:text-[#C6A969] transition-colors"
                        title="Edit Product"
                      >
                        <Edit2 size={16} />
                      </Link>
                    )}
                    {!isLocal && (
                      <button 
                        onClick={() => handleDelete(product.id, product.name)}
                        disabled={isDeleting === product.id}
                        className="p-2 text-body/40 hover:text-[#8B1E1E] transition-colors disabled:opacity-50"
                        title="Delete Product"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
