"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { navigation } from "@/data/navigation";
import { Button } from "./ui/button";
import { footerSocialMedia } from "@/data/footer";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      const targets = footerRef.current.querySelectorAll(".footer-animate");

      gsap.fromTo(
        targets,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <div className="w-full bg-gray-100">
      <div
        ref={footerRef}
        className="w-full max-w-[1520px] px-6 sm:px-8 md:px-18 lg:px-12 mx-auto"
      >
        <div className="flex flex-wrap gap-8 md:gap-5 justify-between py-8 items-center">
          <Image
            src="/logo/app-footer.png"
            alt="App Logo"
            width={110}
            height={24}
            className="self-start footer-animate"
          />

          <ul className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 justify-center items-center">
            {navigation
              .filter((item) => item.hideInNavbar || item.published)
              .map((item) => (
                <li key={item.url} className="footer-animate">
                  <Link href={item.url} className="hover:text-gray-900">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="flex justify-center items-center md:flex gap-1 md:justify-center md:items-center">
            {footerSocialMedia.map(({ platform, url }) => (
              <Link
                href={url}
                key={platform}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  className="footer-animate w-7 h-7 p-1 relative flex cursor-pointer justify-center items-center rounded bg-grayscale-200 hover:bg-gray-300"
                >
                  <Image
                    src={`/socialMedia/${platform}.svg`}
                    alt={platform}
                    width={16}
                    height={16}
                    className="absolute z-1"
                  />
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-300 py-6 flex flex-wrap gap-4 justify-between items-center text-grayscale-600">
          <p className="text-center md:text-left footer-animate ">
            Pipeliner © 2025
          </p>
          <div className="flex items-center cursor-pointer gap-2 footer-animate">
            <Link href="#" className="hover:text-gray-900">
              Get this template
            </Link>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
