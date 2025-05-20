import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function TopNavbar() {
  return (
    <div className="w-full flex items-center justify-between bg-transparent py-5">
      <div className="w-full px-20 gap-30 bg-transparent flex flex-row justify-between items-center">
          <div>
            <Image
              src="/logo/app-logo.png"
              alt="App Logo"
              width={113}
              height={24}
            />
          </div>
          <ul className="w-full md:w-auto flex flex-wrap text-grayscale-600 gap-4 md:gap-8 justify-center items-center">
          <li>
            <Link href="" className="hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-900">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-900">
              Blog
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
          </ul>
          <Button>Start for Free</Button>
      </div>
    </div>
  );
};