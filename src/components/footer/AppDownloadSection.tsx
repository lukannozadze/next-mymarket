import Image from "next/image";
import SocialMedia from "./ui/SocialMedia";
export default function AppDownloadSection() {
  return (
    <section className="w-full flex flex-col  md:flex-row  md:items-center gap-4 mt-5  ">
      <div className="flex gap-4">
        <Image src="/playstore.svg" alt="playstore" width={107} height={33} />
        <Image src="/appstore.svg" alt="appstore" width={107} height={33} />
      </div>
      <span className="text-xs text-gray-400">
        Download app and get latest features
      </span>
      <div className="md:hidden mt-4">
      <SocialMedia/>
      </div>
    </section>
  );
}
