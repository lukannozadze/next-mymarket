import Image from "next/image";

import AddButton from "@/components/ui/AddButton";
import SignInButton from "../SignInButton";
import SearchForm from "./SearchForm";
export default function Header() {
  return (
    <header className="sticky top-0 px-4 py-4 border-b border-b-gray-100 ">
      <div className="flex justify-between px-[5%] ">
        <div className="flex gap-5 max-w-96">
          <Image src="/logo.svg" alt="logo" width={150} height={41} />
          <SearchForm />
        </div>
        <div className="flex gap-4">
          <AddButton />
          <div className="flex gap-4">
            <Image
              src="/icons/message-icon.svg"
              alt="message"
              width={24}
              height={24}
            />
            <Image
              src="/icons/favorites-icon.svg"
              alt="favorites"
              width={24}
              height={24}
            />
            <Image
              src="/icons/cart-icon.svg"
              alt="cart"
              width={24}
              height={24}
            />
          </div>
          <SignInButton />
          <Image src="/icons/tnet-icon.svg" alt="tnet" width={44} height={44} />
        </div>
      </div>
    </header>
  );
}
