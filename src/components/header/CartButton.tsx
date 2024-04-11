"use client";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";

import { useCartProvider } from "@/context/CartProvider";
export default function FavoriteButton() {
  const { cartItems } = useCartProvider();
  const cartItemsQuantity = cartItems.length;
  const localeActive = useLocale();

  return (
    <Link className="relative flex items-center" href={`/${localeActive}/cart`}>
      {cartItemsQuantity > 0 && (
        <div className="absolute top-[4px] right-[-5px] w-4 h-4 rounded-full bg-[#ff4d01] text-white text-[11px] flex items-center justify-center">
          {cartItemsQuantity}
        </div>
      )}
      <Image
        className="hidden md:block"
        src="/icons/cart-icon.svg"
        alt="favorites"
        width={24}
        height={24}
      />
    </Link>
  );
}
