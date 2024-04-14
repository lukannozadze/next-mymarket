'use client'
import { useCartProvider } from "@/context/CartProvider";
import { Bicycle, Laptop, Mobile } from "@/service/types"
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
type Product = Laptop | Mobile | Bicycle
export default function CartItem({product}:{product:Product}) {
    const { cartItems, setCartItems,setTotal } = useCartProvider();
    const [quantity, setQuantity] = useState(1);
    const [productTotal,setProductTotal] = useState(parseInt(product.price));

    const handleQuantityChange = (operation:string) => {
        if (operation === "add") {
          setQuantity((prevQuantity) => prevQuantity + 1);
          setProductTotal((prevTotal) => prevTotal + parseInt(product.price));
          setTotal(prev=>prev + parseInt(product.price))
        } else if (operation === "subtract" && quantity > 1) {
          setQuantity((prevQuantity) => prevQuantity - 1);
          setProductTotal((prevTotal) => prevTotal - parseInt(product.price));
          setTotal(prev=>prev - parseInt(product.price))
        }
      };
    const handleDeleteClick = (product:Mobile | Laptop | Bicycle) =>{
        const updatedCart = cartItems.filter((item)=>item.id !== product.id)
        setTotal(prev=>prev-parseInt(product.price))
        setCartItems([...updatedCart])
    }
  return (
            <div className="flex  bg-white h-[200px]  w-full items-center justify-between rounded-lg">
                <div className="flex flex-col items-center self-start gap-5">   
                <div className="flex gap-6">
                    <div className="w-[100px] h-[100px] flex self-start ml-5 mt-5">
                      <Image
                        className="rounded-lg"
                        src={product.image}
                        alt={product.title}
                        width={100}
                        height={100}
                        />
                    </div>
                        <div className="flex flex-col self-end">
                             <h3>{product.title}</h3>
                             <span>{`${product.price}₾`}</span>
                           </div>
                    </div> 
                    <div className="flex gap-3 self-start ml-5">
                      <Image
                        src='/icons/seller.png'
                        alt={product.title}
                        width={18}
                        height={18}
                        />
                     <span className="text-[12px] text-gray-400">მაღაზია</span>
                     </div>
                </div>
                  <div className="flex gap-5 pr-10 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-4 shadow-lg bg-gray-300 rounded-3xl flex items-center justify-center cursor-pointer" onClick={()=>{handleQuantityChange('subtract')}}>
                        -
                      </div>
                      <span className="text-gray-500">{quantity}</span>
                      <div className="w-8 h-4 shadow-lg bg-gray-300 rounded-3xl flex items-center justify-center cursor-pointer" onClick={()=>{handleQuantityChange('add')}} >
                        +
                      </div>
                    </div>
                    {quantity===1 &&<span>{`${product.price}₾`}</span>}
                    {quantity>1 && <span>{`${productTotal}₾`}</span>}
                    <div className="cursor-pointer" onClick={()=>{handleDeleteClick(product)}}>
                        <Image src='/icons/bin.png' alt="bin" width={24} height={24}/>
                    </div>
                  </div>
                </div>
  )
}
