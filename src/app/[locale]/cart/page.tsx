"use client";

import Sidebar from "@/components/cart/Sidebar";
import Wrapper from "@/components/ui/wrapper";
import { useCartProvider } from "@/context/CartProvider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  const { cartItems, setCartItems } = useCartProvider();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="py-8 w-full flex items-center justify-center bg-[#f1f3f6] mx-auto">
      <div className="w-[1440px] px-6">
        <div className="flex justify-between mb-10">
          <h2>ჩემი კალათა</h2>
          <div className="flex gap-3">
            <span>total</span>
            <Link href="#">ყიდვა</Link>
          </div>
        </div>
        <section className="flex  gap-8">
          {cartItems.map((product) => {
            return (
              <div key={product.id} className="flex gap-8 w-full">
                <Sidebar />
                <div className="flex  bg-white h-min w-full items-center justify-between">
                  <div className="flex items-center ml-5">
                    <div>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={100}
                        height={100}
                      />
                      <span>მფლობელი</span>
                    </div>

                    <div>
                      <h3>{product.title}</h3>
                      <span>{product.price}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 pr-10">
                    <div className="flex">
                      <button
                        onClick={() => {
                          setQuantity((prev) => prev - 1);
                        }}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() => {
                          setQuantity((prev) => prev + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <span>{product.price}</span>
                    <div>washla</div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
