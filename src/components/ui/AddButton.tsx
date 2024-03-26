import Image from "next/image"

export default function AddButton() {
  return (
    <button className="flex   bg-[#FFF4CC] px-6 py-[11px] rounded-xl gap-3">
      <Image src='/icons/add-statement.svg' alt="add" width={21} height={20}/>
      <span className="font-medium text-xs ">დამატება</span>
    </button>
  )
}
