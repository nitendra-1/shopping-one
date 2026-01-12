"use client";

import useCart from "@/app/hooks/useCart";
import { Product, updateCart } from "@/app/lib/api/mockApi";
import Image from "next/image";
import { useSWRConfig } from "swr";

export default function ProductCard({ product }: { product: Product }) {
  const { data: cart } = useCart();
  const { mutate } = useSWRConfig();

  const qty = cart?.items[product.id] ?? 0;

  const handleAdd = () => {
    const optimistic = {
      items: { ...cart!.items, [product.id]: qty + 1 },
    };

    mutate("cart", () => updateCart(product.id, +1), {
      optimisticData: optimistic,
      rollbackOnError: true,
      populateCache: true,
      revalidate: false,
    });
  };

  return (
    <div className="bg-gray-400 p-4 rounded">
      <Image
        src={product.images[0]}
        width={200}
        height={200}
        alt={product.title}
        className=""
      />
      <div className="font-semibold">{product.title}</div>
      <div className="text-sm">₹{product.price}</div>
      <p className="text-sm line-clamp-3">{product.description}</p>

      <button
        onClick={handleAdd}
        className="mt-3 bg-blue-600 px-3 py-1 rounded"
      >
        Add (+)
      </button>
      <div className="mt-2">In Cart: {qty}</div>
    </div>
  );
}
