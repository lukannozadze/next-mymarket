'use client'
import { Input } from "@/components/ui/input";
import { useGeneralStateProvider } from "@/context/GeneralStateProvider";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChangeEvent } from "react";

type Props = {
  inputClass?:string
}
export default function SearchForm({inputClass}:Props) {
  const {search} = useGeneralStateProvider();
  const pathname = usePathname();
  const category = pathname.slice(4,pathname.length);
  
  const InputChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
     search(e.target.value,category);
     console.log(e.target.value,category);
  }
  return (
    <form className={`items-center flex  ${inputClass}`}>  
    {/* flex */}
      <Input
      onChange={InputChangeHandler}
        className="w-80 h-9 border-0 border-t border-b border-l border-gray-300 border-r-hidden"
        placeholder="ძებნა"
      />
      <div className="w-[1px] h-6 bg-gray-300"></div>
      <div className="flex justify-center items-center h-9 border-0 border-t border-r border-b border-gray-300 rounded-tr-md rounded-br-md px-3  ">
        <Image
          src="/icons/search-icon.svg"
          alt="search"
          width={20}
          height={20}
        />
      </div>
    </form>
  );
}
