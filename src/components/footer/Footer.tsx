import Wrapper from "../ui/wrapper";
import Navigation from "./Navigation";
import AppDownloadSection from "./AppDownloadSection";
import AgreementsSection from "./AgreementsSection";
import PartnersSection from "./PartnersSection";
import { NavigationAccordion } from "./NavigationAccordion";
import { PartnersAccordion } from "./PartnersAccordion";
export default function Footer() {
  return (
    <footer className="px-4 flex flex-col gap-8  flex-nowrap items-center px-6 justify-between md:container md:mx-auto md:flex-wrap md:px-0">
      <AppDownloadSection />
       <NavigationAccordion/>
      <Navigation />
      <AgreementsSection />
      <PartnersAccordion/>
      <PartnersSection />
      <div className="w-full px-4 pb-8 flex justify-center pt-6 ">
        <div>
          <span className="text-xs text-gray-400">
            © 2024 All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
