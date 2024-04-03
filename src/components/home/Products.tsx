"use client";
import data from "../../../public/data/data.json";
import Image from "next/image";
import Wrapper from "../ui/wrapper";
export default function Products() {
  //console.log(data[0].items[0]['Processor type']);
  const [superVip] = data.map((arr) =>
    arr.items.filter((el) => el.status === "super vip")
  );
  const [vipPlus] = data.map((arr) =>
    arr.items.filter((el) => el.status === "vip+")
  );
  const [vip] = data.map((arr) =>
    arr.items.filter((el) => el.status === "vip")
  );

  return (
    <div className="py-8 w-full flex items-center justify-center">
      <div className="w-[1440px] px-6">

      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/icons/supervip.svg"
          alt="#"
          width={30}
          height={36}
        />
        <h2 className="font-bold">SUPER VIP</h2>
      </div>
      
      <section className="flex gap-8">
        {superVip.map((product) => {
          
          return (
          <div key={product.id} className=" px-[6px] pt-3 rounded-xl pb-2 cursor-pointer">
            <div className="w-[210px] h-[180px]">
              <Image
              className="object-cover rounded-lg"
                src={product.image}
                alt="#"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

          <p className="mt-[18px]">{product.title}</p>
          <span className="font-bold my-5">{`${product.price} GEL`}</span>
        </div>
          );
        })}
      </section>



      <div className="flex items-center gap-4 mb-4 mt-20">
        <Image
          src="/icons/vip-plus.svg"
          alt="#"
          width={30}
          height={36}
        />
        <h2 className="font-bold">SUPER VIP</h2>
      </div>
      
      <section className="flex gap-8">
        {vipPlus.map((product) => {
          
          return (
          <div key={product.id} className=" px-[6px] pt-3 rounded-xl pb-2 cursor-pointer">
            <div className="w-[210px] h-[180px]">
              <Image
              className="object-cover rounded-lg"
                src={product.image}
                alt="#"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

          <p className="mt-[18px]">{product.title}</p>
          <span className="font-bold my-5">{`${product.price} GEL`}</span>
        </div>
          );
        })}
      </section>

      <div className="flex items-center gap-4 mb-4  mt-20">
        <Image
          src="/icons/vip.svg"
          alt="#"
          width={30}
          height={36}
        />
        <h2 className="font-bold">SUPER VIP</h2>
      </div>
      
      <section className="flex gap-8">
        {vip.map((product) => {
          
          return (
          <div key={product.id} className=" px-[6px] pt-3 rounded-xl pb-2 cursor-pointer">
            <div className="w-[210px] h-[180px]">
              <Image
              className="object-cover rounded-lg"
                src={product.image}
                alt="#"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

          <p className="mt-[18px]">{product.title}</p>
          <span className="font-bold my-5">{`${product.price} GEL`}</span>
        </div>
          );
        })}
      </section>
    </div>
      </div>


  );
}
