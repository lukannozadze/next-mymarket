import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
const partners = [
  {
    id: 1,
    src: "/logos/myauto.png",
    alt: "myauto",
    path: "https://www.myauto.ge/",
  },
  {
    id: 2,
    src: "/logos/myparts.png",
    alt: "myparts",
    path: "https://www.myparts.ge/ka/",
  },
  {
    id: 3,
    src: "/logos/myhome.png",
    alt: "myhome",
    path: "https://www.myhome.ge/ka/",
  },
  {
    id: 4,
    src: "/logos/mymarket.png",
    alt: "mymarket",
    path: "https://www.mymarket.ge",
  },
  {
    id: 5,
    src: "/logos/superapp.png",
    alt: "superapp",
    path: "https://www.tnet.ge/",
  },
  {
    id: 6,
    src: "/logos/myshop.png",
    alt: "myshop",
    path: "https://www.myshop.ge/",
  },
  {
    id: 7,
    src: "/logos/vendoo.png",
    alt: "vendoo",
    path: "https://vendoo.ge/",
  },
  {
    id: 8,
    src: "/logos/swoop.png",
    alt: "swoop",
    path: "https://www.swoop.ge/",
  },
  { id: 9, src: "/logos/tkt.svg", alt: "tkt", path: "https://tkt.ge/" },
  { id: 10, src: "/logos/livo.svg", alt: "livo", path: "https://livo.ge/" },
];
export function PartnersAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full bg-[#F4F4F5] p-6 rounded-3xl md:hidden">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger>
          <Image src="/tnet-en.svg" alt="tnet" width={80} height={22}/>
        </AccordionTrigger>
        <AccordionContent className="grid grid-cols-3 gap-10">
        {partners.map((partner) => {
        return (
          <Link key={partner.id} href={partner.path}>
            <Image src={partner.src} alt={partner.alt} width={66} height={20} />
          </Link>
        );
      })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
