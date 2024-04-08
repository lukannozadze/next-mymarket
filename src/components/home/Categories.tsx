'use client'
import data from '../../../public/data/data.json'
import Image from 'next/image'
import Link from 'next/link'
import * as React from "react"


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
  
    <Carousel className='w-full flex justify-center mx-4'>
  <CarouselContent className='w-[1440px]'>
  {data.map((category)=>{
    return <CarouselItem key={category.id} className='basis-1/5 sm:basis-1/6 md:basis-1/7 lg:basis-1/8'>
         <Link href={category.id} key={category.id} className='relative'>
          <span className='absolute top-3 left-3 z-20 font-medium'>{category.name}</span>
         <Image className='hover:scale-105 transition-all' src={category.image} alt='category' width={170} height={120}></Image>
        </Link>
    </CarouselItem>
       })}
  </CarouselContent>
</Carousel>

  )
}
