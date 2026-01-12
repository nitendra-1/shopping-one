"use client";

import useCart from "@/app/hooks/useCart";
import { ShoppingCart } from "lucide-react";
import SkeletonCartLoader from "../skeletonCartLoader";

export default function NavBar() {
  const { data: cart, isLoading } = useCart();

  const count = cart ? Object.values(cart.items).reduce((a, b) => a + b, 0) : 0;

  return (
    <div className="py-4 px-6 bg-gray-600 flex justify-between">
      <div className="font-bold">Shooping One</div>
      <div className="flex items-center gap-2">
        <ShoppingCart className="relative" />
        {!isLoading ? (
          <span className="absolute right-[12px] top-[5px] h-4 w-4 rounded bg-gray-500 text-white text-[10px] flex items-center justify-center">
            {count}
          </span>
        ) : (
          <SkeletonCartLoader />
        )}
      </div>
    </div>
  );
}
