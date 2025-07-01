"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const growRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

  const images = [
    "/hero/pipeliner.png",
    "/hero/pipeliner.png",
    "/hero/pipeliner.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animate title and text
  useEffect(() => {
    if (textRef.current) {
      const elements = textRef.current.querySelectorAll("h1, p");
      gsap.fromTo(
        elements,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }
  }, []);

  // Animate chart image
  useEffect(() => {
    if (growRef.current) {
      gsap.fromTo(
        growRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, []);

  // Animate badge
  useEffect(() => {
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, []);

  // Animate buttons
  useEffect(() => {
    if (buttonRef.current) {
      const buttons = buttonRef.current.querySelectorAll("button");
      gsap.fromTo(
        buttons,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
        }
      );
    }
  }, []);

  // Slide image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      const currentImage = imageRefs.current[currentIndex];
      const nextImage = imageRefs.current[nextIndex];

      if (currentImage && nextImage) {
        const tl = gsap.timeline();

        tl.set(nextImage, { x: "100%", opacity: 1, zIndex: 2 })
          .to(currentImage, {
            x: "-100%",
            duration: 0.6,
            ease: "power2.inOut",
            zIndex: 1,
          })
          .to(nextImage, {
            x: "0%",
            duration: 0.6,
            ease: "power2.inOut",
            zIndex: 3,
          });

        setCurrentIndex(nextIndex);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="flex flex-col items-center gap-20 py-12 px-18 overflow-hidden">
      <div className="text-center flex flex-col items-center gap-10">
        <div ref={badgeRef}>
          <Badge variant="secondary">
            <Badge variant="blue">New</Badge>
            The Best AI CRM
          </Badge>
        </div>

        <div ref={textRef} className="flex flex-col gap-5">
          <h1 className="text-5xl font-semibold leading-[120%]">
            Customer<br /> Relationship Magic
          </h1>
          <p className="text-lg font-normal text-grayscale-700">
            AI-powered CRM designed to build, scale, and elevate your business.
          </p>
        </div>

        <div
          ref={buttonRef}
          className="flex flex-wrap gap-2 items-center justify-center"
        >
          <Button>Start for Free</Button>
          <Button variant="secondary">Contact Sales</Button>
        </div>
      </div>

      <div ref={growRef} className="flex flex-col gap-20 items-center">
        <Image
          src="/hero/reports.png"
          alt="Reports"
          width={1150}
          height={464}
        />
      </div>

      {/* Slide Carousel */}
      <div
        ref={imageWrapperRef}
        className="relative w-[1400px] h-[32px] overflow-hidden"
      >
        {images.map((img, index) => (
          <div
            key={index}
            
            className="absolute top-0 left-0 w-full h-full"
            style={{
              zIndex: index === currentIndex ? 3 : 1,
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          >
            <Image
              src={img}
              alt={`Pipeliner ${index + 1}`}
              width={1400}
              height={32}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
