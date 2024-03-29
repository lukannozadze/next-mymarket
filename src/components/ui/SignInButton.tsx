import Image from "next/image";

export default function SignInButton() {
  return (
    <button className="flex items-center px-6 py-[11px] border border-gray-300 rounded-xl gap-3">
      <Image src="/icons/user-icon.svg" alt="add" width={22} height={22} />
      <span className="font-medium text-xs ">Sign In</span>
    </button>
  );
}
