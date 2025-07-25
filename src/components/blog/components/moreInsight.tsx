"use client";

import { useStaggerChildren } from "@/components/animations/hooks";
import { useRef } from "react";
import MoreInsightHeader from "./moreInsightHeader";
import InsightCards from "./card/insightCard";
import type { Post } from "@/types/sanity";

export default function AnimatedMoreInsight({ posts }: { posts: Post[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useStaggerChildren(wrapperRef, ".insight-card", 0.2);

  return (
    <div className="border-t border-grayscale-200">
      <div
        ref={wrapperRef}
        className="max-w-5xl mx-auto pt-8 border-x border-grayscale-200 space-y-6"
      >
        <MoreInsightHeader />
        <InsightCards posts={posts} />
      </div>
    </div>
  );
}
