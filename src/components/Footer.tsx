import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { navigation } from "@/data/navigation";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full max-w-[1520px] px-6 sm:px-8 md:px-18 lg:px-12 mx-auto">
        <div className="flex flex-wrap gap-8 md:gap-5 justify-between py-8 items-center">
          <Image
            src="/logo/app-footer.png"
            alt="App Logo"
            width={110}
            height={24}
            className="self-start"
          />


          <ul className="w-full md:w-auto flex flex-wrap gap-4 md:gap-6 justify-center items-center">
            {navigation.filter(item => item.hideInNavbar || item.published).map((item) => (
                <li key={item.url}>
                  <Link href={item.url} className="hover:text-gray-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          <div className="flex gap-3 justify-center items-center">
            {["facebook", "instagram", "dribble", "linkedin"].map((platform) => (
              <Button
                key={platform}
                className="w-8 h-8 p-1 relative flex cursor-pointer justify-center items-center rounded bg-grayscale-200 hover:bg-gray-300"
              >
                <Image src={`/socialMedia/${platform}.svg`} alt={platform} width={20} height={20} className="absolute z-1" />
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-300 py-6 flex flex-wrap gap-4 justify-between items-center text-grayscale-600">
          <p className="text-center md:text-left">Pipeliner © 2025</p>
          <div className="flex items-center cursor-pointer gap-2">
            <Link href="#" className="hover:text-gray-900">Get this template</Link>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
