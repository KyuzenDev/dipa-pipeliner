import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function TopNavbar() {
  return (
    <div className="w-full max-w-[1520px] mx-auto flex items-center justify-between py-5 px-6 md:px-16">
      <div>
        <Image
          src="/logo/app-logo.png"
          alt="App Logo"
          width={113}
          height={24}
        />
      </div>
      <ul className="flex flex-wrap text-grayscale-900 gap-4 md:gap-10 justify-center items-center">
        <li>
          <Link href="" className="hover:text-gray-600">
            About
          </Link>
        </li>
        <li>
          <Link href="" className="hover:text-gray-600">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="" className="hover:text-gray-600">
            Blog
          </Link>
        </li>
        <li>
          <Link href="" className="hover:text-gray-600">
            Contact
          </Link>
        </li>
      </ul>
      <Button>Start for Free</Button>
    </div>
  );
}