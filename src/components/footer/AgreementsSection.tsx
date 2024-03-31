import Link from "next/link";
export default function AgreementsSection() {
  return (
    <section className="flex justify-between items-center w-full pb-5 ">
      <div className="flex gap-5">
        <span className="text-xs text-gray-400 underline hover:text-black cursor-pointer">
          Terms and Conditions
        </span>
        <span className="text-xs text-gray-400 underline hover:text-black cursor-pointer">
          Confidentiality Policy
        </span>
        <span className="text-xs text-gray-400 underline hover:text-black cursor-pointer">
          Return Policy
        </span>
      </div>
      <Link href="https://www.top.ge/index.php?h=11654#11654">
        <div className="w-[88px] h-[31px] bg-[#C8C8C8] flex items-center justify-center ">
          TOP.GE
        </div>
      </Link>
    </section>
  );
}
