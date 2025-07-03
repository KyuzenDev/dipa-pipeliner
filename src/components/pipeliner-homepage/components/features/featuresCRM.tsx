"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  useSlideFromTop,
  useFadeIn,
  useStaggerChildren,
} from "@/components/animations/hooks";

export default function FeaturesCRM() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useSlideFromTop(badgeRef, 0.1);
  useSlideFromTop(titleRef, 0.2);
  useFadeIn(descRef, 0.3);
  useStaggerChildren(cardsRef, ".feature-card", 0.4);

  return (
    <div className="flex flex-col items-center gap-20 py-12 px-18">
      <div className="text-center flex flex-col items-center gap-5">
        <div ref={badgeRef}>
          <Badge>
            <Avatar>
              <AvatarImage src="/avatar/jerrell.svg" sizes="sm" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Jerrell Luna
            <p className="text-grayscale-600"> - Chief Operating Officer</p>
          </Badge>
        </div>

        <div className="flex flex-col gap-5">
          <h1
            ref={titleRef}
            className="text-4xl font-semibold leading-[120%]"
          >
            “When I Tried Pipeliner<br /> I Think is the Future of CRM”
          </h1>
          <p
            ref={descRef}
            className="font-normal text-grayscale-700"
          >
            Experience the next generation of customer relationship management.
          </p>
        </div>
      </div>

      <div
        ref={cardsRef}
        className="w-full flex flex-wrap gap-6 justify-center text-center"
      >
        {[
          {
            title: "Data Powered",
            subtitle: "Workflows Design",
            desc: "Automate your go market decisions based on the most reliable dataset.",
            img: "/features/features_1/card_1.svg",
          },
          {
            title: "Your Team",
            subtitle: "Synergy Station",
            desc: "Pipeliner boosts go market teams productivity and streamlines tasks.",
            img: "/features/features_1/card_2.svg",
          },
          {
            title: "Automate with",
            subtitle: "Intelligent Control",
            desc: "Effortlessly automate intricate business processes with our smart.",
            img: "/features/features_1/card_3.svg",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="feature-card overflow-hidden shadow-sm flex flex-col items-center justify-center max-w-[341px] w-full rounded-2xl border border-[#E0F1FB]"
          >
            <div className="rounded-2xl flex flex-col gap-4 bg-white py-6 px-4">
              <h3 className="font-semibold text-xl text-grayscale-900">
                {item.title} <br /> {item.subtitle}
              </h3>
              <p className="text-grayscale-600 text-md">{item.desc}</p>
            </div>
            <Image src={item.img} alt={item.title} width={341} height={264} />
          </div>
        ))}
      </div>
    </div>
  );
}