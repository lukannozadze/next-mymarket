import Link from "next/link";

export default function ConfirmEmail({text}:{text:string}) {
  return (
    <div className="h-screen w-screen flex justify-center pt-72">
        <p className="text-3xl">{text}</p>
    </div>
  )
}
