import Image from "next/image";
import AddButton from "@/components/ui/AddButton";
import SignInButton from "../ui/SignInButton";
import SearchForm from "./SearchForm";
import HamburgerIcon from "./HamburgerIcon";
import Wrapper from "../ui/wrapper";
import readUserSession from "@/lib/actions";
import SignOutButton from "../ui/SignOutButton";


type Props = {
  classnames?:string,
  inputClass?:string
}
export default async function Header({inputClass,classnames}:Props) {
  const {data} = await readUserSession();
  console.log('session' + data.session);
  return (
    <header className=  {` py-2 shadow-lg md:shadow-none ${classnames} `}>
      <div className="mx-auto flex justify-between items-center  max-w-[1440px] px-6 ">
        <div className="flex gap-5 max-w-96">
          <Image src="/logo.svg" alt="logo" width={150} height={41} />
          <SearchForm inputClass={inputClass} />
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
         { !data.session && <SignInButton />}
         {data.session && <SignOutButton/>}
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
      <div className="hidden md:block pt-6">
        <Wrapper />
      </div>
    </header>
  );
}
