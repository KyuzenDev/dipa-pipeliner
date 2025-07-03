"use client";

import { useRef, useEffect } from "react";
import { StackIcon } from "@phosphor-icons/react/dist/ssr";
import { PiFadersHorizontal } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import Image from "next/image";
import {
  useSlideFromTop,
  useFadeIn,
  useZoom,
} from "@/components/animations/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesDataModel() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useSlideFromTop(headingRef, 0.1);
  useFadeIn(descRef, 0.2);
  useZoom(imageRef, 0.6);

  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: 0.3 + i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });
  }, []);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) cardRefs.current[index] = el;
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 py-12 px-6 md:px-12 lg:px-18">
      <div className="flex flex-col items-start gap-8 max-w-xl">
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h1
            ref={headingRef}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold"
          >
            The Ultimate Data Model <br />
            for Go-to-Market Success
          </h1>
          <p ref={descRef} className="text-grayscale-600 text-base md:text-lg">
            Leverage insights from your business, customer, and product data{" "}
            <br />
            to drive and enhance your teams performance and success.
          </p>
        </div>

        <div ref={cardsContainerRef} className="flex flex-col gap-4 w-full">
          <div
            ref={(el) => setCardRef(el, 0)}
            className="flex flex-col gap-1 border-b border-grayscale-200 pb-4"
          >
            <p className="text-grayscale-900 text-lg md:text-xl font-medium flex gap-2 items-center">
              <PiFadersHorizontal className="text-primary-400 scale-x-[-1] stroke-[0.8]" />
              Custom Attributes
            </p>
            <p className="text-grayscale-600">
              Store and update any kind of data your business needs.
            </p>
          </div>

          <div
            ref={(el) => setCardRef(el, 1)}
            className="flex flex-col gap-1 border-b border-grayscale-200 pb-4"
          >
            <p className="text-grayscale-900 text-lg md:text-xl font-medium flex gap-2 items-center">
              <CiClock2 className="text-primary-400 stroke-[0.8]" /> Activity
              Timelines
            </p>
            <p className="text-grayscale-600">
              Get instant visibility into the full history of every interaction.
            </p>
          </div>

          <div ref={(el) => setCardRef(el, 2)} className="flex flex-col gap-1">
            <p className="text-grayscale-900 text-lg md:text-xl font-medium flex gap-2 items-center">
              <StackIcon className="text-primary-400" /> Detailed Views
            </p>
            <p className="text-grayscale-600">
              From basic to tables, visualize your data the way that works for
              you.
            </p>
          </div>
        </div>
      </div>

      <div ref={imageRef}>
        <Image
          src="/vectorFeatures.png"
          alt="Data Model"
          width={454}
          height={278}
          className="object-cover w-full max-w-md md:max-w-lg"
        />
      </div>
    </div>
  );
}
