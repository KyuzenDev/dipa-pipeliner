"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  useFadeIn,
  useSlideFromTop,
  useZoom,
} from "@/components/animations/hooks";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonGroupRef = useRef<HTMLDivElement>(null);
  const reportsImageRef = useRef<HTMLDivElement>(null);
  const carouselImageRef = useRef<HTMLDivElement>(null);

  useSlideFromTop(headingRef, 0.2);
  useFadeIn(descRef, 0.3);
  useZoom(buttonGroupRef, 0.4);
  useZoom(reportsImageRef, 0.5);
  useZoom(carouselImageRef, 0.6);

  return (
    <div className="flex flex-col items-center gap-20 py-12 px-18 overflow-hidden">
      <div className="text-center flex flex-col items-center gap-10">
        <div>
          <Badge variant="secondary">
            <Badge variant="blue" className="transition-none">New</Badge>
            The Best AI CRM
          </Badge>
        </div>

        <div className="flex flex-col gap-5">
          <h1
            ref={headingRef}
            className="text-5xl font-semibold leading-[120%]"
          >
            Customer
            <br /> Relationship Magic
          </h1>
          <p ref={descRef} className="text-lg font-normal text-grayscale-700">
            AI-powered CRM designed to build, scale, and elevate your business.
          </p>
        </div>

        <div
          ref={buttonGroupRef}
          className="flex flex-wrap gap-2 items-center justify-center"
        >
          <Button>Start for Free</Button>
          <Button variant="secondary">Contact Sales</Button>
        </div>
      </div>

      <div ref={reportsImageRef} className="flex flex-col gap-20 items-center">
        <Image
          src="/hero/reports.png"
          alt="Reports"
          width={1150}
          height={464}
        />
      </div>

      <div
        ref={carouselImageRef}
        className="relative w-[1400px] h-[32px] overflow-hidden"
      >
        <Image
          src="/hero/pipeliner.png"
          alt="Pipeliner"
          width={1400}
          height={32}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}