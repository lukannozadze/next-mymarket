import Link from "next/link";
import Wrapper from "../ui/wrapper";

export default function Services() {
  return (
    <>
      <div className="hidden lg:flex h-full  justify-center items-center py-[15px]   text-sm text-gray-800">
        <div className="w-[1440px] flex justify-between items-center px-6">
        <div className="flex gap-[2.25rem] ">
          <Link className="hover:text-yellow-400"  href="/">მეორადი განვადებით</Link>
          <Link className="hover:text-yellow-400" href="/">Trade In</Link>
          <Link className="hover:text-yellow-400" href="/">მაღაზიები</Link>
          <Link className="hover:text-yellow-400" href="/">ჩემით წავიღებ</Link>
        </div>
        <div className="flex gap-[2.25rem]">
          <Link className="hover:text-yellow-400" href="/">გახსენი მაღაზია</Link>
          <Link className="hover:text-yellow-400" href="/">დახმარება</Link>
          <Link className="hover:text-yellow-400" href="/">კონტაქტი</Link>
        </div>
        </div>
      </div>
      <Wrapper />
    </>
  );
}
