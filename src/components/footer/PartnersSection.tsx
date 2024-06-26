import Link from "next/link";
import Image from "next/image";


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
export default function PartnersSection() {
  return (
    <div className="w-full  border border-gray-200 pr-4 rounded-full items-center justify-between hidden md:flex">
      <Link href="https://www.tnet.ge/">
        <Image
          src="/logos/tnet-footer.png"
          alt="tnet"
          width={130}
          height={32}
        />
      </Link>
      {partners.map((partner) => {
        return (
          <Link key={partner.id} href={partner.path}>
            <Image src={partner.src} alt={partner.alt} width={66} height={20} />
          </Link>
        );
      })}

      </div>
  );
}
