"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`w-full max-w-[1520px] mx-auto flex items-center justify-between py-5 px-6 md:px-12 
      ${isMenuOpen ? "bg-white shadow-md" : "bg-transparent"}`}>

      <div>
        <Link href="/">
          <Image
            src="/logo/app-logo.png"
            alt="App Logo"
            width={113}
            height={24}
            className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
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
        className="md:hidden text-gray-700 hover:text-gray-900 p-2 rounded-lg cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX className="w-8 h-8" /> : <HiMenuAlt3 className="w-8 h-8" />}
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
