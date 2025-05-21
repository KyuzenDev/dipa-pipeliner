import { useState } from 'react';
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu , X } from 'lucide-react'; 

export default function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  
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

      {/* Dekstop Menu */}
      <ul className="hiden md:flex flex-wrap text-grayscale-900 gap-4 md:gap-10 justify-center items-center">
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

      {/* CTA Button (Dekstop)*/}
      <div clasName="hidden md:block">
        <Button>Start for Free</Button>
      </div>

      {/* Hamburger Button (Mobile)*/}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

     {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <ul className="flex flex-col gap-4 text-grayscale-900">
            <li>
              <Link href="" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <Button className="w-full">Start for Free</Button>
        </div>
      )}
  );
}
