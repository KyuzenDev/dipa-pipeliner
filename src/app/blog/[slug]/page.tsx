import { client } from "@/lib/sanity";
import { allBlogQuery, blogBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogdetailSocialMedia } from "@/types/socialMedia";
import type { Post } from "@/types/sanity";
import MoreInsight from "@/components/blog/components/moreInsight";
import CTA from "@/components/CTA";
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const [blog, posts]: [Post, Post[]] = await Promise.all([
    client.fetch(blogBySlugQuery, { slug: resolvedParams.slug }),
    client.fetch(allBlogQuery),
  ]);
  const insights = posts.filter(
    (item) => item.slug.current !== resolvedParams.slug
  );
  const formatDate = (isoDate: string): string =>
    new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  if (!blog) return notFound();

  return (
    <>
      <div className="max-w-3xl mx-auto py-10 px-6 space-y-6">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-grayscale-900 hover:text-grayscale-600 text-sm font-medium transition"
        >
          <Image
            width={16}
            height={16}
            alt="Back to blog"
            src="/icons/flip-backward.svg"
          />
          Blog
        </Link>

        <h1 className="text-4xl font-semibold">{blog.title}</h1>
        <div className="flex gap-3">
          <p className="text-gray-500 text-normal">
            {formatDate(blog.publishedAt)}
          </p>
          <div className="border-1 text-grayscale-600 opacity-20"></div>
          <p className="text-gray-500 text-normal">{blog.category}</p>
        </div>
        <Image
          src={blog.coverImage.asset.url}
          alt={blog.title}
          width={900}
          height={500}
          className="rounded-xl object-cover w-full h-auto"
        />
        <p className="text-lg text-gray-700">{blog.description}</p>
        {blog.body ? (
          <PortableText value={blog.body} />
        ) : (
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-2xl leading-[140%] text-gray-900">
              The Game Changer For CRM
            </h4>
            <p className="font-sans font-normal text-lg leading-[160%] text-gray-600">
              By 2025, AI-powered CRMs won’t just store data they’ll write
              follow-ups, summarize meetings, track interactions, and predict
              customer needs. What was once a bonus will soon be essential.
              These AI-driven features will shift from nice-to-have.
            </p>
            <p className="font-sans font-normal text-lg leading-[160%] text-gray-600">
              Think about it automated meeting summaries, email drafting, and
              activity tracking will soon be the new standard. This means sales
              teams can say goodbye to hours spent on repetitive tasks like data
              entry and instead focus on selling.
            </p>
          </div>
        )}

        <div className="max-w-full flex flex-col justify-left items-left md:flex gap-3 md:justify-left md:items-left">
          <p className="text-base leading-[150%] text-gray-600">
            Share post on
          </p>
          <div className="flex justify-left items-left md:flex gap-1 md:justify-left md:items-left">
            {blogdetailSocialMedia.map(({ platform, url }) => (
              <Link
                href={url}
                key={platform}
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

      <MoreInsight posts={insights} />
      <CTA />
    </>
  );
}
