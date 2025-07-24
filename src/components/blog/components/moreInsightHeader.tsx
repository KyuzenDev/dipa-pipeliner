import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MoreInsightHeader() {
  return (
    <div className="flex justify-between items-center mb-8 px-8">
      <h2 className="text-2xl font-semibold text-grayscale-900">
        More Insight
      </h2>

      <Button asChild variant="outline">
        <Link href="/blog" className="text-grayscale-600">
          Explore More
        </Link>
      </Button>
    </div>
  );
}
