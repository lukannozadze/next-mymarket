import { Bicycle, Laptop, Mobile } from "@/service/types";
import Wrapper from "../ui/wrapper";

export default function Specification({
  product,
}: {
  product: Mobile | Laptop | Bicycle;
}) {
  if (product.category === "laptop") {
    const item = product as Laptop;
    return (
      <div>
        <div className="pb-3 pt-4 mb-4 w-max border-b-2 border-yellow-400">
          <h2 className="text-gray-700">სპეციფიკაციები</h2>
        </div>
        <ul className="text-sm">
          <li className="flex flex-col">
            <div className="flex gap-2 justify-between py-3">
              <span className="w-1/2 text-gray-400">ბრენდი</span>
              <span className="w-1/2">{item.brand}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col">
            <div className="flex gap-2 justify-between py-3">
              <span className="w-1/2 text-gray-400">HDD მოცულობა</span>
              <span className="w-1/2">{item.hdd_capacity}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex items-center gap-2 py-3 justify-between">
              <span className="w-1/2 text-gray-400">კლავიატურის ნათება</span>
              <span className="w-1/2">{item.keyboard_lighting}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col">
            <div className="flex gap-2 justify-between py-3">
              <span className="w-1/2 text-gray-400">მეხსიერება</span>
              <span className="w-1/2">{item.memory}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex items-center gap-2 py-3 justify-between">
              <span className="w-1/2 text-gray-400">ოპერატიული სისტემა</span>
              <span className="w-1/2">{item.operating_system}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex items-center gap-2 py-3 justify-between">
              <span className="w-1/2 text-gray-400">ოპტიკური დისკი</span>
              <span className="w-1/2">{item.optical_disck}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex items-center gap-2 py-3 justify-between">
              <span className="w-1/2 text-gray-400">პროცესორის სიხშირე</span>
              <span className="w-1/2">{item.processor_frequency}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex items-center gap-2 py-3 justify-between">
              <span className="w-1/2 text-gray-400">პროცესორის ტიპი</span>
              <span className="w-1/2">{item.processor_type}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex items-center gap-2 py-3 justify-between">
              <span className="w-1/2 text-gray-400">რეზოლუცია</span>
              <span className="w-1/2">{item.resolution}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex items-center gap-2 py-3 justify-between">
              <span className="w-1/2 text-gray-400">ეკრანის ზომა</span>
              <span className="w-1/2">{item.screen_size}</span>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (product.category === "mobile") {
    const item = product as Mobile;
    return (
      <div>
        <div className="pb-3 pt-4 mb-4 w-max border-b-2 border-yellow-400">
          <h2 className="text-gray-700">სპეციფიკაციები</h2>
        </div>
        <ul className="text-sm">
          <li className="flex flex-col">
            <div className="flex gap-2 justify-between py-3">
              <span className="w-1/2 text-gray-400">ბრენდი</span>
              <span className="w-1/2">{item.brand}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col">
            <div className="flex gap-2 justify-between py-3">
              <span className="w-1/2 text-gray-400">ოპერატიული სისტემა</span>
              <span className="w-1/2">{item.os}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex items-center gap-2 py-3 justify-between">
              <span className="w-1/2 text-gray-400">სელფის კამერა</span>
              <span className="w-1/2">{item.selfie}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col">
            <div className="flex gap-2 justify-between py-3">
              <span className="w-1/2 text-gray-400">მეხსიერება</span>
              <span className="w-1/2">{item.memory}</span>
            </div>
          </li>
        </ul>
      </div>
    );
  } else {
    const item = product as Bicycle;
    return (
      <div>
        <div className="pb-3 pt-4 mb-4 w-max border-b-2 border-yellow-400">
          <h2 className="text-gray-700">სპეციფიკაციები</h2>
        </div>
        <ul className="text-sm">
          <li className="flex flex-col">
            <div className="flex gap-2 justify-between py-3">
              <span className="w-1/2 text-gray-400">ამორტიზატორი</span>
              <span className="w-1/2">{item.amortizatori}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col">
            <div className="flex gap-2 justify-between py-3">
              <span className="w-1/2 text-gray-400">დასაკეცი</span>
              <span className="w-1/2">{item.dasakeci}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col justify-center">
            <div className="flex items-center gap-2 py-3 justify-between">
              <span className="w-1/2 text-gray-400">ტიპი</span>
              <span className="w-1/2">{item.type}</span>
            </div>
            <Wrapper />
          </li>
          <li className="flex flex-col">
            <div className="flex gap-2 justify-between py-3">
              <span className="w-1/2 text-gray-400">ფლეში</span>
              <span className="w-1/2">{item.flash}</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
