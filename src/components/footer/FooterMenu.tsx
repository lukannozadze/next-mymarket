import Link from "next/link";
import Image from "next/image";
const footerMenuItems = [
  {
    id: 1,
    name: "Home",
    src: "/icons/home-home.svg",
    path: "/",
  },
  {
    id: 2,
    name: "Category",
    src: "/icons/category.jpg",
    path: "/",
  },
  {
    id: 3,
    name: "Add",
    src: "/icons/add-button.svg",
    path: "/",
  },
  {
    id: 4,
    name: "Favorites",
    src: "/icons/fav-icon.svg",
    path: "/",
  },
  {
    id: 5,
    name: "Sign In",
    src: "/icons/person.svg",
    path: "/",
  },
];
export default function FooterMenu() {
  return (
    <div className="flex fixed left-0 bottom-0 z-50 w-full px-6 pt-4 pb-4 bg-white justify-between items-center  drop-shadow-[0_-2px_16px_rgba(0,0,0,0.08)] md:hidden ">
      {footerMenuItems.map((item) => {
        return (
          <div key={item.id} className="flex flex-col items-center">
            <Link href={item.path}>
              <Image src={item.src} alt={item.name} width={19} height={19} />
            </Link>
            <span className="text-sm text-gray-400">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}
