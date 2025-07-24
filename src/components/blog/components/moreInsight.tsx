import MoreInsightHeader from "./moreInsightHeader";
import InsightCards from "./card/insightCard";
import type { Post } from "@/types/sanity";

export default function MoreInsight({ posts }: { posts: Post[] }) {
  return (
    <div className="border-t-1 border-grayscale-200">
      <div className="max-w-5xl mx-auto pt-8 border-x-1 border-grayscale-200 space-y-6">
        <MoreInsightHeader />
        <InsightCards posts={posts} />
      </div>
    </div>
  );
}
