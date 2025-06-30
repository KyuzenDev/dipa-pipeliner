"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import { HiX } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDashboard = pathname === "/";
  const logoSrc = isDashboard ? "/logo/app-logo.png" : "/logo/app-footer.png";

  const headerRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Animate header on mount
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  // Animate mobile nav open/close
  useEffect(() => {
    if (isMenuOpen && mobileNavRef.current) {
      gsap.fromTo(
        mobileNavRef.current,
        { y: -20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          ease: "power2.out",
        }
      );
    }
  }, [isMenuOpen]);

  return (
    <header 
      ref={headerRef}
      className={`w-full max-w-[1520px] mx-auto flex items-center justify-between py-5 px-6 md:px-12 
  ${isMenuOpen ? "bg-white shadow-md" : isDashboard ? "bg-transparent" : "bg-white"} z-50`}>


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
        <nav className="absolute z-10 px-5 top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6">
          {navigation.filter(item => !item.hideInNavbar && item.published).map((item) => (
            <Link key={item.url} href={item.url} className="text-lg hover:text-gray-900">
              {item.label}
            </Link>
          ))}
          <Button className="w-full py-6">Start for Free</Button>
        </nav>
      )}
    </header>
  );
}
