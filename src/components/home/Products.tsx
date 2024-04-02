"use client";
import data from "../../../public/data/data.json";
import Image from "next/image";
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
    <div className="py-8">
      <div className="flex items-center gap-4">
        <Image
          src="/icons/supervip.svg"
          alt="#"
          width={30}
          height={36}
        />
        <h2>SUPER VIP</h2>
      </div>
      <section className="flex gap-8">
        {superVip.map((product) => {
          return (
            <div>
              <Image
                src="/images/categories/category-dog.jpg"
                alt="#"
                width={190}
                height={36}
              />
              <p>{product.title}</p>
              <span>{product.price}</span>
            </div>
          );
        })}
      </section>



      <div className="flex items-center gap-4">
        <Image
          src="/icons/vip-plus.svg"
          alt="#"
          width={30}
          height={36}
        />
        <h2>VIP+</h2>
      </div>
      <section className="flex gap-8">
        {vipPlus.map((product) => {
          return (
            <div>
              <Image
                src="/images/categories/category-dog.jpg"
                alt="#"
                width={190}
                height={36}
              />
              <p>{product.title}</p>
              <span>{product.price}</span>
            </div>
          );
        })}
      </section>

<div className="flex items-center gap-4">
        <Image
          src="/icons/vip.svg"
          alt="#"
          width={30}
          height={36}
        />
        <h2>VIP</h2>
      </div>
      <section className="flex gap-8">
        {vip.map((product) => {
          return (
            <div>
              <Image
                src="/images/categories/category-dog.jpg"
                alt="#"
                width={190}
                height={36}
              />
              <p>{product.title}</p>
              <span>{product.price}</span>
            </div>
          );
        })}
      </section>
    </div>


  );
}
