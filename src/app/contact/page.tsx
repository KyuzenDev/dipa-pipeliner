"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import FormContact from "@/components/contact/components/form/formContact";
import {
  useSlideFromTop,
  useFadeIn,
  useZoom,
} from "@/components/animations/hooks";

export default function Contact() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useSlideFromTop(headingRef, 0.2);
  useFadeIn(descRef, 0.3);
  useZoom(formRef, 0.4);

  return (
    <div className="relative max-w-full w-full h-auto py-8 px-4 md:py-[104px] md:px-[64px] gap-2">
      <div className="absolute w-[610px] top-0 right-0 -z-5 h-64 bg-[linear-gradient(to_bottom_right,_#D9F8C0_10%,_#88CCF8)] rounded-xl blur-[120px]" />

      <div className="relative w-full flex flex-col items-center gap-8 mx-auto">
        <div className="flex flex-col items-center text-center gap-4 w-full">
          <div>
            <Badge>Contact</Badge>
          </div>

          <h2
            ref={headingRef}
            className="font-semibold text-xl md:text-4xl leading-[120%] text-grayscale-900"
          >
            Support Center
          </h2>

          <p
            ref={descRef}
            className="font-normal text-sm md:text-base leading-[150%] text-grayscale-700"
          >
            Don&apos;t hesitate to reach out to us if you need further
            assistance.
          </p>

          <div ref={formRef} className="w-full">
            <FormContact />
          </div>
        </div>
      </div>

      <div className="absolute w-[610px] bottom-0 left-0 -z-5 h-64 bg-[linear-gradient(to_bottom_right,_#88CCF8_10%,_#D9F8C0)] rounded-xl blur-[120px]" />
    </div>
  );
}
