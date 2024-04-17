import Image from 'next/image'
export default function Installment() {
  return (
    <div className="ganvadeba flex flex-col justify-between w-[295px] h-[190px] shadow-lg px-3 py-5">
        <span className='text-[24px] font-bold'>{`600₾`}</span>
        <div className="tbc w-full bg-[#00aeef] text-[15px] text-white flex justify-center items-center p-2 rounded-xl">
          <Image src='/icons/tbc.jpeg' alt='tbc' width={35} height={35}/>
          <span>აიღე სესხი 2 წუთში</span>
        </div>
        <div className="shetavaze w-full text-[15px] bg-blue-100 text-[#4a6cfa] flex items-center p-3 justify-center rounded-xl">
          <span>შეთავაზე ფასი</span>
        </div>
     </div>
  )
}
