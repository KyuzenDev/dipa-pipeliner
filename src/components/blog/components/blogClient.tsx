"use client";

import { useRef } from "react";
import { useStaggerZoom, useZoom } from "@/components/animations/hooks";
import type { Post } from "@/types/sanity";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSlideFromTop } from "@/components/animations/hooks";

export default function BlogClient({ posts }: { posts: Post[] }) {
  const blogRefs = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

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
        <h2
          ref={headRef}
          className="m-auto w-full font-sans font-semibold text-4xl text-grayscale-900 text-center leading-[120%]"
        >
          Read Blog & Articles
        </h2>
        <p
          ref={descRef}
          className="m-auto w-full font-sans font-normal text-base text-grayscale-700 text-center leading-[150%]"
        >
          Learn from our team and top experts on Pipeliner, CRM, and GTM.
        </p>
      </div>
      <div className="w-full py-12 px-4 flex flex-col items-center">
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
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
                <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-400">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </div>
          ))}
        </div>

        <div ref={buttonRef}>
          <Button variant="secondary" className="mt-10">
            Load More Blogs
          </Button>
        </div>
      </div>
    </>
  );
}
