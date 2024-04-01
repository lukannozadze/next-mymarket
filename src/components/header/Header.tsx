import Image from "next/image";

import AddButton from "@/components/ui/AddButton";
import SignInButton from "../ui/SignInButton";
import SearchForm from "./SearchForm";
import HamburgerIcon from "./HamburgerIcon";
import { ReactNode } from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white py-4 shadow-lg md:shadow-none ">
      <div className="mx-auto flex justify-between items-center max-w-[1440px]">
        <div className="flex gap-5 max-w-96">
          <Image src="/logo.svg" alt="logo" width={150} height={41} />
          <SearchForm />
        </div>
        <div className="flex gap-4">
          <AddButton />
          <div className="flex gap-4">
            <Image
              className="hidden md:block"
              src="/icons/message-icon.svg"
              alt="message"
              width={24}
              height={24}
            />
            <Image
              className="hidden md:block"
              src="/icons/favorites-icon.svg"
              alt="favorites"
              width={24}
              height={24}
            />
            <Image
              className="hidden md:block"
              src="/icons/cart-icon.svg"
              alt="cart"
              width={24}
              height={24}
            />
          </div>
          <SignInButton />
          <Image
            className="hidden lg:block"
            src="/icons/tnet-icon.svg"
            alt="tnet"
            width={44}
            height={44}
          />
          <HamburgerIcon />
        </div>
      </div>
    </header>
  );
}
