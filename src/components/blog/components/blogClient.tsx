"use client";

import { useRef, useState } from "react";
import {
  useStaggerZoom,
  useZoom,
  useSlideFromTop,
} from "@/components/animations/hooks";
import type { Post } from "@/types/sanity";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BlogClient({ posts }: { posts: Post[] }) {
  const blogRefs = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const [visibleCount, setVisibleCount] = useState(6);
  const reversedPosts = posts.slice().reverse();

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useSlideFromTop(headRef, 0.249);
  useSlideFromTop(descRef, 0.255);
  useStaggerZoom(blogRefs, 0.3);
  useZoom(buttonRef, 0.3);

  return (
    <>
      <div className="max-w-full h-auto border-b border-grayscale-200 pt-16 pb-16 px-16 gap-4 flex flex-col bg-white justify-center items-center bg-gradient-to-r from-blue-200 via-gray-100 to-green-200">
        <div>
          <Badge variant="default">Announcement</Badge>
        </div>
        <h2 ref={headRef} className="text-4xl font-semibold text-center">
          Read Blog & Articles
        </h2>
        <p ref={descRef} className="text-base text-center">
          Learn from our team and top experts on Pipeliner, CRM, and GTM.
        </p>
      </div>

      <div className="w-full py-12 px-4 flex flex-col items-center">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reversedPosts.slice(0, visibleCount).map((post, index) => (
            <div
              key={post.slug.current}
              ref={(el) => {
                if (el) blogRefs.current[index] = el;
              }}
              className="space-y-3"
            >
              <Image
                src={post.coverImage.asset.url}
                alt={post.title}
                width={400}
                height={250}
                className="rounded-lg w-full h-52 object-cover"
              />
              <div className="text-sm text-gray-500">
                {post.publishedAt} | {post.category}
              </div>
              <Link href={`/blog/${post.slug.current}`}>
                <h3 className="text-lg font-semibold hover:text-blue-400">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </div>
          ))}
        </div>

        {visibleCount < posts.length && (
          <div ref={buttonRef}>
            <Button
              variant="secondary"
              className="mt-10"
              onClick={handleLoadMore}
            >
              Load More Blogs
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
