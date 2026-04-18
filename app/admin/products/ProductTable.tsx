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
    <div className="overflow-x-auto ">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#eeeeee] text-left">
            <th className="pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#666] pl-4">Product</th>
            <th className="pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#666]">Category</th>
            <th className="pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#666]">Price</th>
            <th className="pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#666]">Source</th>
            <th className="pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#666] text-right pr-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#eeeeee]">
          {products.map((product, i) => {
            const isLocal = !product.id || product.id === product.slug;
            
            return (
              <tr key={product.id || i} className={`group hover:bg-[#F9F9F9] transition-colors ${isDeleting === product.id ? "opacity-30" : ""}`}>
                <td className="py-6 pl-4">
                  <div className="flex items-center gap-5">
                    <div className="h-14 w-14 bg-[#F7F4F0] overflow-hidden border border-[#eeeeee] flex-shrink-0">
                      {product.images?.[0] ? (
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#C0001A] font-bold text-[9px] uppercase tracking-widest">No Img</div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#111] group-hover:text-[#C0001A] transition-colors">{product.name}</h4>
                      <p className="text-[11px] text-[#666] font-medium truncate max-w-[200px] Tracking-wide mt-1">{product.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="py-6">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#111] bg-white border border-[#eeeeee] px-3 py-1.5 rounded-none whitespace-nowrap">
                    {typeof product.category_id === 'string' ? product.category_id : "Uncategorized"}
                  </span>
                </td>
                <td className="py-6 text-sm font-bold text-[#111] whitespace-nowrap">
                  {product.price || "N/A"}
                </td>
                <td className="py-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 border ${isLocal ? 'bg-[#F7F4F0] border-[#eeeeee] text-[#111]' : 'border-[#111] bg-[#111] text-white'}`}>
                    {isLocal ? <Terminal size={12} strokeWidth={1.5} /> : <Database size={12} strokeWidth={1.5} />}
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                      {isLocal ? 'Local Code' : 'Database'}
                    </span>
                  </div>
                </td>
                <td className="py-6 pr-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link 
                      href={`/products/${product.slug}`}
                      target="_blank"
                      className="p-2 text-[#b0b0b0] hover:text-[#111] transition-colors"
                      title="View on Site"
                    >
                      <ExternalLink size={16} strokeWidth={1.5} />
                    </Link>
                    {!isLocal && (
                      <Link 
                        href={`/admin/products/${product.id}`}
                        className="p-2 text-[#b0b0b0] hover:text-[#111] transition-colors"
                        title="Edit Product"
                      >
                        <Edit2 size={16} strokeWidth={1.5} />
                      </Link>
                    )}
                    {!isLocal && (
                      <button 
                        onClick={() => handleDelete(product.id, product.name)}
                        disabled={isDeleting === product.id}
                        className="p-2 text-[#b0b0b0] hover:text-[#C0001A] transition-colors disabled:opacity-50"
                        title="Delete Product"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
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
