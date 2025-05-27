import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { navigation } from "@/data/navigation";
export default function TopNavbar() {
  return (
    <div className="w-full max-w-[1520px] mx-auto flex items-center justify-between py-5 px-6 md:px-12">
      <div>
        <Image
          src="/logo/app-logo.png"
          alt="App Logo"
          width={113}
          height={24}
        />
      </div>
      <ul className="w-full md:w-auto flex flex-wrap gap-4 md:gap-8 justify-center items-center">
        {navigation.filter(item => !item.hideInNavbar && item.published).map((item) => (
          <li key={item.url}>
            <Link href={item.url} className="hover:text-gray-900">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Button>Start for Free</Button>
    </div>
  );
}
