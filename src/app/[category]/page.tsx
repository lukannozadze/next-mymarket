export const dynamicParams = false

import data from '../../../public/data/data.json'
import Image from 'next/image'
import Wrapper from '@/components/ui/wrapper';

export async function generateStaticParams() {

  return data.map((category) => ({
    category: category.id,
  }))
}
 

export default function Page({ params }: {params:{category:string}}) {
  const { category } = params
  const [filterByCategory] = data.filter((item)=>item.id === category);
  console.log(filterByCategory.items)


  return <>
    <div className="py-8 w-full flex items-center justify-center bg-[#f1f3f6] mx-auto">
      <div className="w-[1440px] px-6">
      <section className="flex gap-8 flex-wrap">
        {filterByCategory.items.map((product) => {
          
          return (
          <div key={product.id} className=" px-4 pt-3 rounded-xl pb-2 cursor-pointer bg-white">
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
          <div className='flex items-center gap-2 mt-2'>
            <div className='w-[18px] h-[18px] bg-gray-200 rounded-full flex items-center justify-center'>
            <Image src='/icons/user-icon.svg' alt='private user' width={10} height={10}/>
            </div>
          <span className='text-sm text-gray-400'>Private Person</span>
          </div>
          <p className="mt-[18px] mb-5 font-serif">{product.title}</p>
          <Wrapper/>
          <div className='flex items-center justify-between my-3'>
            
          <span className="font-bold ">{`${product.price} GEL`}</span>
          <div className='w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center'>
            <Image src='/icons/favorites-icon.svg' alt='add favorite' width={16} height={16}/>
          </div>
          </div>
        </div>
          );
        })}
      </section>
    </div>
      </div>


  </>
 
}