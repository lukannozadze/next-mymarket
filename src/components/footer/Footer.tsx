import Wrapper from "../ui/wrapper";
import Navigation from "./Navigation";
import AppDownloadSection from "./AppDownloadSection";
import AgreementsSection from "./AgreementsSection";
import PartnersSection from "./PartnersSection";
import { NavigationAccordion } from "./NavigationAccordion";
import { PartnersAccordion } from "./PartnersAccordion";
import FooterMenu from "./FooterMenu";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 w-screen  flex-nowrap items-center px-6 justify-between md:container md:mx-auto md:flex-wrap relative">
      <AppDownloadSection />
      <NavigationAccordion />
      <Navigation />
      <AgreementsSection />
      <PartnersAccordion />
      <PartnersSection />
      <div className="w-full px-4 pb-8 flex justify-center pt-6 ">
        <div>
          <span className="text-xs text-gray-400">
            © 2024 All rights reserved
          </span>
        </div>
      </div>
      <FooterMenu />
    </footer>
  );
}
