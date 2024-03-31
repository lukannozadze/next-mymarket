"use client";
import { useGeneralStateProvider } from "@/context/GeneralStateProvider";
import Image from "next/image";

export default function HamburgerIcon() {
  const { setHamburgerIsShown } = useGeneralStateProvider();
  const iconClickHandler = () => {
    setHamburgerIsShown(true);
    console.log("fire");
  };
  return (
    <Image
      onClick={iconClickHandler}
      className="md:hidden mr-3 cursor-pointer"
      src="/icons/burger-menu.svg"
      alt="burger"
      width={32}
      height={32}
    />
  );
}
