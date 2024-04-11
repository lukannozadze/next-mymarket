'use client'

import Wrapper from "@/components/ui/wrapper";
import { useFavoritesProvider } from "@/context/FavoritesProvider"
import { Laptop,Mobile,Bicycle } from "@/service/types";
import Image from 'next/image'
export default function Page() {
    const {favorites,setFavorites} = useFavoritesProvider();
    
 const favoriteClickHandler = (product: Laptop | Mobile | Bicycle) => {
        const updatedFavorites = favorites.filter((item) => item.id !== product.id);
        setFavorites([...updatedFavorites]);
  }
  return (
    <div className="py-8 w-full flex items-center justify-center bg-[#f1f3f6] mx-auto">
    <div className="w-[1440px] px-6">
     <section className="flex  gap-8 flex-wrap">
        {favorites.map((product) => {
              return (
                <div
                  key={product.id}
                  className=" px-4 pt-3 rounded-xl pb-2 cursor-pointer bg-white"
                >
                  <div className="w-[210px] h-[180px]">
                    <Image
                      className="object-cover rounded-lg"
                      src={product.image}
                      alt="#"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-[18px] h-[18px] bg-gray-200 rounded-full flex items-center justify-center">
                      <Image
                        src="/icons/user-icon.svg"
                        alt="private user"
                        width={10}
                        height={10}
                      />
                    </div>
                    <span className="text-sm text-gray-400">
                      Private Person
                    </span>
                  </div>
                  <p className="mt-[18px] mb-5">{product.title}</p>
                  <Wrapper />
                  <div className="flex items-center justify-between my-3">
                    <span className="font-bold ">{`${product.price} GEL`}</span>
                    <div onClick={()=>favoriteClickHandler(product)} className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Image
                        src="/icons/favorites-icon.svg"
                        alt="add favorite"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
     </section>
     </div>
     </div>
  )
}
