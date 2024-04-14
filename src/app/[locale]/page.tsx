import Header from "@/components/header/Header";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import Footer from "@/components/footer/Footer";
import Wrapper from "@/components/ui/wrapper";
import HamburgerMenu from "@/components/header/HamburgerMenu";
import Services from "@/components/header/Services";
import fetchedData from "../../../public/data/data.json";
import Categories from "@/components/home/Categories";
import Products from "@/components/home/Products";

export default function Home() {

  return (
    <div className="flex flex-col justify-between relative ">
      <HamburgerMenu />
      <Header inputClass="hidden" classnames="sticky top-0 z-40 bg-white" />
      <Services />
      <main className="min-h-screen w-full px-6 z-10 flex flex-col">
          <Categories />
          <Products />
      </main>
      <Footer />
    </div>
  );
}
