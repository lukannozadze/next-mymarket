import Link from "next/link";
import Image from "next/image";
import Wrapper from "../ui/wrapper";
const navigationArr = [
  "List an item",
  "Buy Online",
  "Used Products",
  "Protect from phishing",
  "Shops",
  "Open Shop",
  "Trade In",
];
const helpArr = [
  "Frequently Asked Questions",
  "Send Message",
  "(032) 280 00 35",
  "info@mymarket.ge",
];
const categoriesArrFirst = [
  "Services",
  "Rent",
  "Home and garden",
  "Home Technics",
  "Technic",
  "Weapons, Hunting, Fishing",
];
const categoriesArrSecond = [
  "Music",
  "Children's products",
  "Beauty and Fashion",
  "Repair and building materials",
  "Agricultural",
  "Animals",
];
const categoriesArrThird = [
  "Sport, Tourism, Recreation",
  "Business and Industrial",
  "Books, Stationery, Art",
];
export default function Navigation() {
  return (
    <div className="flex w-full py-[3.5rem]">
      <div className="flex flex-col w-3/12">
        <h3 className="mb-6 text-base font-bold">Navigation</h3>
        {navigationArr.map((item) => {
          return (
            <Link
              className="mb-5 text-xs text-gray-400 hover:text-black"
              key={item}
              href="/"
            >
              {item}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col w-3/12">
        <h3 className="mb-6 text-base font-bold">Help</h3>
        {helpArr.map((item) => {
          return (
            <Link
              className="mb-5 text-xs text-gray-400 hover:text-black"
              key={item}
              href="/"
            >
              {item}
            </Link>
          );
        })}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-gray-300 cursor-pointer ">
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={10}
              height={10}
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-gray-300 cursor-pointer">
            <Image
              src="/icons/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center hover:bg-gray-300 cursor-pointer ">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className="flex w-6/12 justify-between">
        <div className="flex flex-col">
          <h3 className="mb-6 text-base font-bold">Categories</h3>
          {categoriesArrFirst.map((item) => {
            return (
              <Link
                className="mb-5 text-xs text-gray-400 hover:text-black"
                key={item}
                href="/"
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col pt-[49px]">
          {categoriesArrSecond.map((item) => {
            return (
              <Link
                className="mb-5 text-xs text-gray-400 hover:text-black"
                key={item}
                href="/"
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col pt-[49px]">
          {categoriesArrThird.map((item) => {
            return (
              <Link
                className="mb-5 text-xs text-gray-400 hover:text-black"
                key={item}
                href="/"
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
