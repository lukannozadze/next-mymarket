import {signOut} from '../../app/[locale]/(auth)/actions/index'
import Image from "next/image";


export default function SignInButton() {
 
  return (
    <form action={signOut}>    
    <button className="items-center px-6 py-[11px] border border-gray-300 rounded-xl gap-3 hidden md:flex">
      <Image src="/icons/user-icon.svg" alt="add" width={22} height={22} />
      <span className="font-medium text-xs ">გამოსვლა</span>
    </button>
    </form>
  );
}
