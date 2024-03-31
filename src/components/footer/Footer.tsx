import Wrapper from "../ui/wrapper";
import Navigation from "./Navigation";
import AppDownloadSection from "./AppDownloadSection";
import AgreementsSection from "./AgreementsSection";
import PartnersSection from "./PartnersSection";
export default function Footer() {
  return (
    <footer className="flex flex-nowrap items-center justify-between md:container md:mx-auto md:flex-wrap">
      <AppDownloadSection />

      <Navigation />
      <AgreementsSection />
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
