import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Services from "@/components/header/Services";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function FavoritesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
     <Header classnames="block"/>
      <Services/>
      {children}
       <Footer/>
    </div>
   
        
    
  );
}