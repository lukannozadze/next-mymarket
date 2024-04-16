"use client";

import CartItem from "@/components/cart/CartItem";
import Sidebar from "@/components/cart/Sidebar";
import Wrapper from "@/components/ui/wrapper";
import { useCartProvider } from "@/context/CartProvider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Page() {
  const { cartItems, setCartItems,total,setTotal } = useCartProvider();
  
  useEffect(()=>{
    let sum = 0;
   cartItems.forEach((item)=>{
     sum+=parseInt(item.price)
     setTotal(sum)
   })
  },[])

  return (
    <div className="py-8 w-full flex items-center justify-center bg-[#f1f3f6] mx-auto">
      <div className="w-[1440px] px-6">
        <div className="flex justify-between mb-10">
          <h2>ჩემი კალათა</h2>
          <div className="flex gap-3">
            <span>{`${total}₾`}</span>
            <Link href="#">ყიდვა</Link>
          </div>
        </div>
        <section className="flex  gap-8">
          <Sidebar />
          <div className="flex w-full flex-col gap-3">
          {cartItems.map((product) => {
            return (
              <div key={product.id}>
                <CartItem  product={product}/>
              </div>
            );
          })}
          </div>
        </section>
      </div>
    </div>
  );
}