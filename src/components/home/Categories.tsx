'use client'
import data from '../../../public/data/data.json'
import Image from 'next/image'
console.log(data[0].items[2].status==='super vip');
const superVip = data.map((arr=>arr.items.filter(el=>el.status==='super vip')))
console.log(superVip);

export default function Categories() {
  return (
    <section className='w-full flex justify-center items-center cursor-pointer '>
      <div className='w-[1440px] flex justify-between px-6'>
        <div className='w-[170px] h-[120px] bg-black rounded-xl relative flex justify-center items-center'>
          <span className='text-white absolute '>All Categories</span>
        </div>
      {data.map((category)=>{
        return <div key={category.id} className='relative w-max'>
          <span className='absolute top-3 left-3 z-20 font-medium'>{category.name}</span>
          <Image className='hover:scale-105 transition-all' src={category.image} alt='category' width={170} height={120}></Image>
        </div>
      })}
      </div>
    </section>
  )
}
