import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";

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
const categoriesArr= [
  "Services",
  "Rent",
  "Home and garden",
  "Home Technics",
  "Technic",
  "Weapons, Hunting, Fishing",
  "Music",
  "Children's products",
  "Beauty and Fashion",
  "Repair and building materials",
  "Agricultural",
  "Animals",
  "Sport, Tourism, Recreation",
  "Business and Industrial",
  "Books, Stationery, Art"
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
