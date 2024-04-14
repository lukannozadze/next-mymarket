import Image from 'next/image'
export default function Sidebar() {
  const sidebarItems = ['განცხადების დამატება','ჩემი განცხადებები','შეთავაზებები','ონლაინ გაყიდვები','ჩემი ფინანსები','ჩემი წერილები','ჩემი რჩეულები','ჩემი კალათა','ჩემი შეკვეთები','მისამართები','გასვლა']
  return (
   <div className='bg-white rounded-xl flex flex-col items-center gap-5 px-8 py-5'>
    <div className='flex w-full items-center justify-between gap-2'>
      <Image src='/icons/person.svg' alt='user' width={40} height={40}/>
      <div className='flex flex-col'>
        <span>სახელი</span>
        <span>#1235928</span>
      </div>
    </div>
    <ul className='flex flex-col gap-5 '>
      {sidebarItems.map((item)=>{
        return <li className='hover:text-yellow-400 cursor-pointer text-gray-500' key={item}>{item}</li>
      })}
    </ul>
   </div>
  )
}
