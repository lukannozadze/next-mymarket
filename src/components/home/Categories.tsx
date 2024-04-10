'use client'
import data from '../../../public/data/data.json'
import Image from 'next/image'
import Link from 'next/link'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
console.log(data[0].items[2].status==='super vip');
const superVip = data.map((arr=>arr.items.filter(el=>el.status==='super vip')))
console.log(superVip);

export default function Categories() {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex justify-between px-6 my-4 mx-auto max-w-[1440px] w-screen'>
     <span className='text-sm'>ძებნა კატეგორიის მიხედვით</span>
     <span className='text-sm'>ყველა კატეგორია</span>
      </div>
     <Carousel className='w-full flex justify-center pl-6'>
     <CarouselItem className='max-w-[180px] p-5 bg-black text-white rounded-xl'>  
      <Image src='/icons/menu-bar.png' alt='burger' width={30} height={30}/>
       <span className='text-[15px] opacity-90'>ყველა კატეგორია</span>
      </CarouselItem>
  <CarouselContent className='w-[1260px] pl-5'>
  {data.map((category)=>{
    return <CarouselItem key={category.id} className='basis-1/6 md:basis-1/7 lg:basis-1/8'>
         <Link href={category.id} key={category.id} className='relative'>
          <span className='absolute top-3 left-3 z-20 text-sm w-min'>{category.name}</span>
         <Image className='hover:scale-105 transition-all' src={category.image} alt='category' width={170} height={120}></Image>
        </Link>
    </CarouselItem>
       })}
  </CarouselContent>
</Carousel>
    </div>


  )
}
