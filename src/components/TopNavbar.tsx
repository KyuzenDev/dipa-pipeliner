"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { HiX } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { navigation } from "@/data/navigation";
import { usePathname } from "next/navigation";
import gsap from "gsap";

import {
  useSlideFromLeft,
  useSlideFromRight,
  useStaggerChildren,
} from "@/components/animations/hooks";

export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname === "/";
  const logoSrc = isDashboard ? "/logo/app-logo.png" : "/logo/app-footer.png";

  const logoRef = useRef<HTMLImageElement>(null);
  const desktopBtnRef = useRef<HTMLButtonElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useSlideFromLeft(logoRef);
  useSlideFromRight(desktopBtnRef, 0.1);
  useStaggerChildren(desktopMenuRef, "a", 0.15);

  if (typeof window !== "undefined" && isMenuOpen && mobileNavRef.current) {
    gsap.fromTo(
      mobileNavRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }

  return (
    <header
      className={`w-full max-w-[1520px] mx-auto flex items-center justify-between py-5 px-6 md:px-12 ${
        isMenuOpen
          ? "bg-white shadow-md"
          : isDashboard
          ? "bg-transparent"
          : "bg-white"
      } z-50`}
    >
      <div>
        <Link href="/">
          <Image
            ref={logoRef}
            src={logoSrc}
            alt="App Logo"
            width={113}
            height={24}
            className="cursor-pointer transition-none duration-300 hover:opacity-80"
          />
        </Link>
      </div>

      <nav
        ref={desktopMenuRef}
        className="hidden md:flex w-auto gap-4 md:gap-8 justify-center items-center"
      >
        {navigation
          .filter((item) => !item.hideInNavbar && item.published)
          .map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className="hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
      </nav>

      <div className="hidden md:block">
        <Button ref={desktopBtnRef} className="transition-none">
          Start for Free
        </Button>
      </div>

      <button
        className="md:hidden text-grayscale-900 hover:text-grayscale-700 p-2 rounded-lg cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <HiX className="w-8 h-8" />
        ) : (
          <FiMenu className="w-8 h-8" />
        )}
      </button>

      {isMenuOpen && (
        <nav
          ref={mobileNavRef}
          className="absolute z-10 px-5 top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6"
        >
          {navigation
            .filter((item) => !item.hideInNavbar && item.published)
            .map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="text-lg hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          <Button className="w-full py-6">Start for Free</Button>
        </nav>
      )}
    </header>
  );
}