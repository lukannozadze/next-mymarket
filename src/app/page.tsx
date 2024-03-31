import Header from "@/components/header/Header";
import { signOut } from "./(auth)/actions";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import Footer from "@/components/footer/Footer";
import Wrapper from "@/components/ui/wrapper";
import HamburgerMenu from "@/components/header/HamburgerMenu";

export default async function Home() {
  const { data } = await readUserSession();
  if (!data.session) {
    redirect("/login");
  }
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col  justify-between relative">
        <HamburgerMenu />
        <Header />
        <div className="hidden md:block">
          <Wrapper />
        </div>
        <main className="min-h-screen">
          <form action={signOut}>
            <button>Log Out</button>
          </form>
        </main>
        <Footer />
      </div>
    </div>
  );
}
