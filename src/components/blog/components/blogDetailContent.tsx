"use client";

import {
  useFadeIn,
  useSlideFromTop,
  useZoom,
  useSlideFromLeft,
} from "@/components/animations/hooks";
import { useRef } from "react";
import type { Post } from "@/types/sanity";
import Image from "next/image";
import BlogBody from "./blogBody";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogdetailSocialMedia } from "@/types/socialMedia";

export default function BlogDetailContent({
  blog,
  formattedDate,
}: {
  blog: Post;
  formattedDate: string;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const shareRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useSlideFromLeft(linkRef, 0.2);
  useSlideFromTop(titleRef, 0.2);
  useFadeIn(metaRef, 0.3);
  useZoom(imageRef, 0.35);
  useFadeIn(descRef, 0.4);
  useFadeIn(shareRef, 0.5);

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 space-y-6">
      <Link
        ref={linkRef}
        href="/blog"
        className="flex items-center gap-2 text-grayscale-900 hover:text-grayscale-600 text-sm font-medium transition-none"
      >
        <Image
          width={16}
          height={16}
          alt="Back to blog"
          src="/icons/flip-backward.svg"
        />
        Blog
      </Link>

      <h1 ref={titleRef} className="text-4xl font-semibold">
        {blog.title}
      </h1>

      <div ref={metaRef} className="flex gap-3">
        <p className="text-gray-500 text-normal">{formattedDate}</p>
        <div className="border-1 text-grayscale-600 opacity-20"></div>
        <p className="text-gray-500 text-normal">{blog.category}</p>
      </div>

      <div ref={imageRef}>
        <Image
          src={blog.coverImage.asset.url}
          alt={blog.title}
          width={900}
          height={500}
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>

      {blog.body ? (
        <div className="prose prose-blue mx-auto max-w-3xl">
          <BlogBody value={blog.body} />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="font-sans font-normal text-lg leading-[160%] text-gray-600">
            Empty content. Please check the blog body.
          </p>
        </div>
      )}

      <div ref={shareRef} className="max-w-full flex flex-col gap-3">
        <p className="text-base leading-[150%] text-gray-600">Share post on</p>
        <div className="flex gap-1">
          {blogdetailSocialMedia.map(({ platform, url }) => (
            <Link
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="icon"
                className="nav-item w-7 h-7 p-1 relative transition-none flex cursor-pointer justify-center items-center rounded bg-grayscale-200 hover:bg-gray-300"
              >
                <Image
                  src={`/socialMedia/${platform}.svg`}
                  alt={platform}
                  width={16}
                  height={16}
                  className="absolute z-1"
                />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
