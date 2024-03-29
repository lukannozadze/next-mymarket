import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function SearchForm() {
  return (
    <form className="flex items-center">
      <Input
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
