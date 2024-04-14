import Link from "next/link";
import SocialMedia from "./ui/SocialMedia";
const navigationArr = [
  "განცხადების დამატება",
  "იყიდე ონლაინ",
  "მეორადი ნივთები",
  "ფიშინგისგან თავდაცვა",
  "მაღაზიები",
  "გახსენი მაღაზია",
  "Trade In",
];
const helpArr = [
  "ხშირად დასმული კითხვები",
  "მესიჯის მიწერა",
  "(032) 280 00 35",
  "info@mymarket.ge",
];
const categoriesArrFirst = [
  "მომსახურება",
  "გაქირავება",
  "სახლი და ბაღი",
  "საოჯახო ტექნიკა",
  "ტექნიკა",
  "ნადირობა და თევზაობა",
];
const categoriesArrSecond = [
  "მუსიკა",
  "საბავშვო",
  "სილამაზე და მოდა",
  "მშენებლობა და რემონტი",
  "სოფლის მეურნეობა",
  "ცხოველები",
];
const categoriesArrThird = [
  "სპორტი და დასვენება",
  "ბიზნესი და დანადგარები",
  "წიგნები და კანცელარია",
];
export default function Navigation() {
  return (
    <div className="w-full py-[3.5rem] hidden md:flex">
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
        <SocialMedia/>
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
