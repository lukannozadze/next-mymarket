import Link from "next/link";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <div className="w-full flex border border-gray-200 rounded-full items-center justify-between">
      <Link href="https://www.tnet.ge/">
        <Image
          src="/logos/tnet-footer.png"
          alt="tnet"
          width={130}
          height={32}
        />
      </Link>
      <Link href="https://www.myauto.ge/">
        <Image src="/logos/myauto.png" alt="tnet" width={66} height={20} />
      </Link>
      <Link href="https://www.myparts.ge/">
        <Image src="/logos/myparts.png" alt="tnet" width={66} height={20} />
      </Link>
      <Link href="https://www.myhome.ge/ka/">
        <Image src="/logos/myhome.png" alt="tnet" width={66} height={20} />
      </Link>
      <Link href="https://www.mymarket.ge">
        <Image src="/logos/mymarket.png" alt="tnet" width={66} height={20} />
      </Link>
      <Link href="https://www.tnet.ge/">
        <Image src="/logos/superapp.png" alt="tnet" width={66} height={20} />
      </Link>
      <Link href="https://www.myshop.ge/">
        <Image src="/logos/myshop.png" alt="tnet" width={66} height={20} />
      </Link>
      <Link href="https://vendoo.ge/">
        <Image src="/logos/vendoo.png" alt="tnet" width={66} height={20} />
      </Link>
      <Link href="https://tkt.ge/">
        <Image src="/logos/swoop.png" alt="tnet" width={66} height={20} />
      </Link>
      <Link href="https://www.swoop.ge/">
        <Image src="/logos/tkt.svg" alt="tnet" width={66} height={20} />
      </Link>
      <Link className="pr-6" href="https://livo.ge/">
        <Image src="/logos/livo.svg" alt="tnet" width={66} height={20} />
      </Link>
    </div>
  );
}
