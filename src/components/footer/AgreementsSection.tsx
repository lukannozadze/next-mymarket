import Link from "next/link";
export default function AgreementsSection() {
  return (
    <section className="flex justify-between items-center w-full pb-5 ">
      <div className="flex flex-col md:flex-row gap-5">
        <span className="text-xs text-gray-400 underline hover:text-black cursor-pointer">
          წესები და პირობები
        </span>
        <span className="text-xs text-gray-400 underline hover:text-black cursor-pointer">
          კონფიდენციალურობის პოლიტიკა
        </span>
        <span className="text-xs text-gray-400 underline hover:text-black cursor-pointer">
          დაბრუნების პოლიტიკა
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
