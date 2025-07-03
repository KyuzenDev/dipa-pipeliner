"use client";

import { useRef } from "react";
import {
  useFadeIn,
  useZoom,
} from "@/components/animations/hooks";

export default function Stats() {
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  useFadeIn(stat1Ref, 0.1);
  useFadeIn(stat2Ref, 0.2);
  useZoom(messageRef, 0.3);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 text-center py-12 px-18">
      <div ref={stat1Ref} className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl md:text-6xl font-semibold">20K+</h1>
        <h1 className="text-grayscale-500 text-lg md:text-xl">
          Customer records that have benefited{" "}
          <br className="hidden md:block" />
          from and utilized our services.
        </h1>
      </div>

      <div ref={stat2Ref} className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl md:text-6xl font-semibold">132+</h1>
        <h1 className="text-grayscale-500 text-lg md:text-xl">
          Companies from various countries have{" "}
          <br className="hidden md:block" />
          used the feature we designed.
        </h1>
      </div>

      <div
        ref={messageRef}
        className="p-6 md:p-12 bg-[#F5F8FC] flex justify-center items-center rounded-2xl"
      >
        <h1 className="text-xl md:text-2xl font-semibold">
          We design workflows, deploy AI, <br className="hidden md:block" />
          integrate data, and make reports.
        </h1>
      </div>
    </div>
  );
}