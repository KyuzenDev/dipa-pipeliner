"use client";

import Image from "next/image";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import PreviewPage from "../previews";
import samsul from "../../../../../public/Relationship/samsul.png";
import auto from "../../../../../public/icons/flow/conect.png";
import produce from "../../../../../public/icons/flow/files.png";
import source from "../../../../../public/icons/flow/source.png";
import {
  useSlideFromTop,
  useFadeIn,
  useZoom
} from "@/components/animations/hooks";
import { StaticImageData } from "next/image";

export default function Testimony() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const testimonyRef = useRef<HTMLDivElement>(null);

  useSlideFromTop(badgeRef, 0.1);
  useSlideFromTop(headingRef, 0.2);
  useFadeIn(paraRef, 0.3);
  useZoom(testimonyRef, 0.325);

  return (
    <div className="max-w-full h-auto px-16 py-20 bg-[#F5F8FC]">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center text-center">
          <div ref={badgeRef}>
            <Badge>Testimonials</Badge>
          </div>
          <h2
            ref={headingRef}
            className="text-[40px] font-semibold text-grayscale-900"
          >
            Their Favorites Feature
          </h2>
          <p
            ref={paraRef}
            className="text-base font-normal text-grayscale-700"
          >
            Leverage insights from your business, customer, and product data <br />
            to drive and enhance your team&apos;s performance and success.
          </p>
        </div>

        <div ref={testimonyRef} className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col p-6 sm:p-10 rounded-xl gap-6 bg-[#EBEDFD] border-10 border-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-grayscale-900 leading-[140%]">
              Pipeliner is the first CRM that feels truly modern. It&apos;s powerful, flexible,
              and fast to build with. There&apos;s nothing like it.
            </h3>
            <div className="flex items-center gap-4">
              <Image src={samsul} alt="photo" className="w-13 h-13 rounded-full" />
              <div>
                <p className="text-base font-semibold text-grayscale-900">
                  Sahil Mansuri
                </p>
                <p className="text-sm font-normal text-grayscale-600">
                  CEO & Head of Finance
                </p>
              </div>
            </div>
            <div className="border-t border-dashed border-grayscale-300" />
            <div className="flex flex-col gap-4 mt-[5px]">
              <p className="text-sm text-grayscale-600">Favorites Feature</p>
              <div className="flex flex-row gap-4">
                <FeatureItem icon={auto} label="Automation" />
                <FeatureItem icon={produce} label="Productivity" />
                <FeatureItem icon={source} label="Pipeline" />
              </div>
            </div>
          </div>

          <div className="w-full h-auto">
            <PreviewPage />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  icon,
  label,
}: {
  icon: StaticImageData;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Image src={icon} width={24} height={24} alt={label} />
      <p className="text-base font-medium text-grayscale-900">{label}</p>
    </div>
  );
}
