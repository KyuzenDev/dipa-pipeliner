import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className="w-full h-auto px-6 md:px-20 lg:px-40 bg-gray-100">
      <div className="w-full flex flex-col md:flex-row justify-between md:gap-40 py-18 items-center">
        <div className="mb-6 md:mb-0">
          <Image
            src="/logo/app-footer.png"
            alt="App Logo"
            width={110}
            height={24}
          />
        </div>
        <ul className="w-full md:w-auto flex flex-wrap text-grayscale-600 gap-4 md:gap-8 justify-center items-center">
          <li>
            <Link href="" className="hover:text-gray-900">
              Home
            </Link>
          </li>
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
        <div className="flex gap-2 justify-center items-center">
          <button className="w-6 h-6 p-1 flex cursor-pointer justify-center items-center rounded bg-gray-300 hover:bg-gray-400">
            <Image src="/footer/facebook.svg" alt="facebook" width={16} height={16} />
          </button>
          <button className="w-6 h-6 p-1 flex cursor-pointer justify-center items-center rounded bg-gray-300 hover:bg-gray-400">
            <Image src="/footer/instagram.svg" alt="instagram" width={16} height={16} />
          </button>
          <button className="w-6 h-6 p-1 flex cursor-pointer justify-center items-center rounded bg-gray-300 hover:bg-gray-400">
            <Image src="/footer/dribble.svg" alt="dribbble" width={16} height={16} />
          </button>
          <button className="w-6 h-6 p-1 flex cursor-pointer justify-center items-center rounded bg-gray-300 hover:bg-gray-400">
            <Image src="/footer/linkedin.svg" alt="linkedin" width={16} height={16} />
          </button>
        </div>
      </div>
      <div className="border-t border-gray-300 py-6 flex flex-col md:flex-row justify-between items-center text-grayscale-600">
        <p className="text-center md:text-left">Pipeliner © 2025</p>
        <div className="flex items-center cursor-pointer gap-1 mt-4 md:mt-0">
          <Link href="#" className="hover:text-gray-900">
            Get this template
          </Link>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
}