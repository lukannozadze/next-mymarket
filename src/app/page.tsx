import Header from "@/components/ui/header/Header";
import Image from "next/image";
import { signOut } from "./(auth)/actions";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function Home() {
    const {data} = await readUserSession();
    if(!data.session){
      redirect('/login')
    }
  return <>
  <Header/>
  <main className="min-h-screen">
    <form action={signOut}>
     <button>Log Out</button>
    </form>
    </main>;
  </>
}
