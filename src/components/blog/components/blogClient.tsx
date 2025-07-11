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

const formatDate = (isoDate: string): string =>
  new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogClient({ posts }: { posts: Post[] }) {
  const blogRefs = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const [visibleCount, setVisibleCount] = useState(6);
  const reversedPosts = posts?.slice().reverse() || [];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  const cardGradients = [
    "bg-gradient-to-br from-white  to-[#B7E2FA30]",
    "bg-gradient-to-br from-white  to-[#C7CCFA30]",
    "bg-gradient-to-br from-white  to-[#C8FBEE30]",
  ];
  
  
  useSlideFromTop(headRef, 0.249);
  useSlideFromTop(descRef, 0.255);
  useStaggerZoom(blogRefs, 0.3);
  useZoom(buttonRef, 0.3);

  return (
    <>
      <div className="max-w-full border-b border-grayscale-200 gap-3 pt-16 pb-16 px-16 flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 via-gray-100 to-green-200">
        <Badge variant="default">Announcement</Badge>
        <h2
          ref={headRef}
          className="text-4xl font-semibold text-center leading-[120%] text-grayscale-900"
        >
          Read Blog & Articles
        </h2>
        <p
          ref={descRef}
          className="text-base text-center leading-[150%] text-grayscale-700"
        >
          Learn from our team and top experts on Pipeliner, CRM, and GTM.
        </p>
      </div>

      <div className="w-full py-12 px-4 flex flex-col items-center">
        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reversedPosts.slice(0, visibleCount).map((post, index) => (
            <Link
              key={post.slug.current}
              href={`/blog/${post.slug.current}`}
              className="group"
            >
              <div
                ref={(el) => {
                  if (el) blogRefs.current[index] = el;
                }}
                className={`space-y-3 px-12 py-16 border-1 border-grayscale-200 transition duration-300 hover:shadow-xl ${cardGradients[index % cardGradients.length]}`}
              >
                <div className="relative w-full h-52 overflow-hidden rounded-lg">
                  <Image
                    src={post.coverImage.asset.url}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="rounded-lg w-full h-52 object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="text-sm text-grayscale-600">
                  {formatDate(post.publishedAt)} | {post.category}
                </div>

                <h3 className="text-lg font-semibold text-grayscale-900 transition group-hover:text-blue-500">
                  {post.title}
                </h3>

                <p className="text-grayscale-500 text-sm">
                  {post.description.length > 48
                    ? `${post.description.slice(0, 48)}...`
                    : post.description}
                </p>
              </div>
            </Link>
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
