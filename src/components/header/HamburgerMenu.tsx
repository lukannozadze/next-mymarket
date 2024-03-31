"use client";

import { useGeneralStateProvider } from "@/context/GeneralStateProvider";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../ui/wrapper";

export default function HamburgerMenu() {
  const { hamburgerIsShown, setHamburgerIsShown } = useGeneralStateProvider();
  const listItems = [
    "Open Shop",
    "Help",
    "Contact",
    "Send Message",
    "Call Request",
    "Rate",
    "Protect from Phishing",
    "Terms and Condition",
  ];
  const closeIconClickHandler = () => {
    setHamburgerIsShown(false);
  };
  return (
    hamburgerIsShown && (
      <div className="bg-white w-screen h-full absolute p-4 z-50">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Menu</span>
          <div
            onClick={closeIconClickHandler}
            className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center cursor-pointer hover:bg-gray-200"
          >
            <Image
              src="/icons/close-x.svg"
              alt="close"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          {listItems.map((item) => {
            return (
              <Link className="text-base" key={item} href="#">
                {item}
              </Link>
            );
          })}
        </div>
        <Wrapper />
      </div>
    )
  );
}
