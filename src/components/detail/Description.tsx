'use client'
import Wrapper from "../ui/wrapper";
import Image from 'next/image'
import Installment from "./Installment";
import data from '../../../public/data/data.json'
export default function Description({category,productId}:{category:string,productId:string}) {
   const [filterByCategory] = data.filter((item=>item.id===category));
    const [product] = filterByCategory.items.filter(item=>item.id === parseInt(productId));

  
  return (
    <div className="flex gap-[15px] justify-between">
     <div className="surati">
        <Image src={product.image} alt="product" width={250} height={330}/>
     </div>
     <div className="flex flex-col ">
       <div className="flex gap-5 text-sm">
        <span>ID 30576103</span>
        <span>111 ნახვა</span>
        <span>17/04/2024 10:09</span>
       </div>
       <h1 className="mt-[14px] text-3xl font-bold pb-4">{product.title}</h1>
       <Wrapper/>
       <div className="pt-4">
       <div className="flex items-center gap-2 mt-2 bg-gray-300 w-max rounded-xl px-2">
                    <div className="w-[18px] h-[18px] bg-gray-200 rounded-full flex items-center justify-center">
                      <Image
                        src="/icons/user-icon.svg"
                        alt="private user"
                        width={10}
                        height={10}
                      />
                    </div>
                    <span className="text-sm text-gray-400">
                      ფიზიკური პირი
                    </span>
                  </div>
              <div className="flex flex-col py-4 text-sm">
          <span className="capitalize text-gray-500">{category}</span>
          <span className="text-gray-400">6 განცხადება</span>
          <span className="text-gray-500">თბილისი</span>
              </div>
       </div>
       <div className="pt-4">
        <p></p>
       </div>
     </div>
      <Installment/>
     </div>
  )
}
