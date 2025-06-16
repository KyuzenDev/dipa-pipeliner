"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import { HiX } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDashboard = pathname === "/";
  const logoSrc = isDashboard ? "/logo/app-logo.png" : "/logo/app-footer.png";

  return (
    <header className={`w-full max-w-[1520px] mx-auto flex items-center justify-between py-5 px-6 md:px-12 
      ${isMenuOpen ? "bg-white shadow-md" : "bg-transparent"}`}>

      <div>
        <Link href="/">
          <Image
            src={logoSrc}
            alt="App Logo"
            width={113}
            height={24}
            className={`cursor-pointer transition-opacity duration-300 hover:opacity-80 ${isDashboard ? "" : ""
              }`}
          />
        </Link>
      </div>

      <nav className="hidden md:flex w-auto gap-4 md:gap-8 justify-center items-center">
        {navigation.filter(item => !item.hideInNavbar && item.published).map((item) => (
          <Link key={item.url} href={item.url} className="hover:text-gray-900">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Button>Start for Free</Button>
      </div>

      <button
        className="md:hidden text-grayscale-900 hover:text-grayscale-700 p-2 rounded-lg cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
      </button>

      {isMenuOpen && (
        <nav className="absolute z-10 top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6">
          {navigation.filter(item => !item.hideInNavbar && item.published).map((item) => (
            <Link key={item.url} href={item.url} className="text-lg hover:text-gray-900">
              {item.label}
            </Link>
          ))}
          <Button>Start for Free</Button>
        </nav>
      )}
    </header>
  );
}
