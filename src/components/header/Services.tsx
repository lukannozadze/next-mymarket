import Link from "next/link";
import Wrapper from "../ui/wrapper";

export default function Services() {
  return (
    <>
      <div className="hidden lg:flex h-full  justify-center items-center py-[15px]  text-base">
        <div className="w-[1440px] flex justify-between items-center px-6">
        <div className="flex gap-[2.25rem] ">
          <Link className="hover:text-yellow-400"  href="/">Installments</Link>
          <Link className="hover:text-yellow-400" href="/">Trade In</Link>
          <Link className="hover:text-yellow-400" href="/">Shops</Link>
          <Link className="hover:text-yellow-400" href="/">Pick Up</Link>
        </div>
        <div className="flex gap-[2.25rem]">
          <Link className="hover:text-yellow-400" href="/">Open Shop</Link>
          <Link className="hover:text-yellow-400" href="/">Help</Link>
          <Link className="hover:text-yellow-400" href="/">Contact</Link>
        </div>
        </div>
      </div>
      <Wrapper />
    </>
  );
}
