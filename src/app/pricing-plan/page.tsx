"use client";

import { useEffect, useRef } from "react";
import { pricing } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";
import FeaturesFAQ from "@/components/pipeliner-homepage/components/features/featuresFAQ";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Plate from "../../../public/pricing-plan/head.svg";
import gsap from "gsap";

export default function PricingPlan() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <>
      <div className="max-w-full relative border-b border-grayscale-200 lg:pt-24 lg:pb-32 px-4 md:px-16 bg-gradient-to-r from-white via-green-100 to-blue-200 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          <div
            className="flex flex-col items-start w-full lg:w-1/2 gap-4 mt-8"
            ref={textRef}
          >
            <Badge>Pricing</Badge>
            <h2 className="font-sans font-semibold text-4xl text-grayscale-900 leading-[120%]">
              Hack to Unicorn
            </h2>
            <p className="font-sans font-normal text-base text-grayscale-700 leading-[150%]">
              Start small, dream big. Get going in minutes—no commitment needed.
            </p>
          </div>

          <div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 mb-4 lg:mt-0 lg:mb-3 lg:absolute lg:right-[-10px]"
            ref={imageRef}
          >
            <Image
              src={Plate}
              alt="photos"
              width={700}
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 max-w-7xl mx-auto"
      >
        {pricing.map((plan) => (
          <div
            key={plan.head}
            className={`pricing-card border border-grayscale-200 flex flex-col justify-between h-full gap-6 sm:gap-8 p-6 shadow-sm rounded-xl transition-all duration-300
              ${plan.version === "Primary" ? "bg-gradient-to-b from-white to-[#B7E2FA] from-45%" : "bg-white"}
              ${plan.head === "Enterprise" ? "md:col-span-2 lg:col-span-1" : ""}
            `}
          >
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">{plan.head}</h3>
              {plan.popularity && (
                <div className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full">
                  Most Value
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <p className="text-4xl font-bold text-gray-900">{plan.price}</p>
              <p className="text-sm text-gray-500">{plan.description}</p>
            </div>

            <div className="flex flex-col flex-1 justify-between">
              <div className="flex flex-col gap-6">
                <p className="text-base font-medium text-gray-700">{plan.notes}</p>
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-800"
                    >
                      <Image
                        src="/pricing-plan/checklist.svg"
                        alt="checklist"
                        width={20}
                        height={20}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant={plan.version === "Primary" ? "default" : "outline"}
                className="w-full py-2 px-4 rounded-xl text-sm font-semibold mt-8"
              >
                {plan.head === "Enterprise" ? "Talk to Sales" : `Go with ${plan.head}`}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <FeaturesFAQ />
      <CTA />
    </>
  );
}
