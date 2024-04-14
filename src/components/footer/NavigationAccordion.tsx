import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";

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
const categoriesArr = [
  "მომსახურება",
  "გაქირავება",
  "სახლი და ბაღი",
  "საოჯახო ტექნიკა",
  "ტექნიკა",
  "ნადირობა და თევზაობა",
  "მუსიკა",
  "საბავშვო",
  "სილამაზე და მოდა",
  "მშენებლობა და რემონტი",
  "სოფლის მეურნეობა",
  "ცხოველები",
  "სპორტი და დასვენება",
  "ბიზნესი და დანადგარები",
  "წიგნები და კანცელარია",
];


export function NavigationAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full block md:hidden">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">Navigation</AccordionTrigger>
        <AccordionContent className="flex flex-col">
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
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:no-underline">Help</AccordionTrigger>
        <AccordionContent className="flex flex-col">
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
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="hover:no-underline">Category</AccordionTrigger>
        <AccordionContent className="flex flex-col">
          {categoriesArr.map((item) => {
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
