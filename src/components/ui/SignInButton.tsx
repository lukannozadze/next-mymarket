import { useLocale } from "next-intl";
import Image from "next/image";
import Link from 'next/link'

export default function SignInButton() {
  const localeActive = useLocale();
  return (
    <Link href={`/${localeActive}/login`} className="items-center px-6 py-[11px] border border-gray-300 rounded-xl gap-3 hidden md:flex">
      <Image src="/icons/user-icon.svg" alt="add" width={22} height={22} />
      <span className="font-medium text-xs ">შესვლა</span>
    </Link>
  );
}
