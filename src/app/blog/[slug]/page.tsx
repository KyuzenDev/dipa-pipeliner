import { client } from "@/lib/sanity";
import { blogBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { blogdetailSocialMedia } from "@/data/blogsociomedia";
import { Button } from "@/components/ui/button";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const blog = await client.fetch(blogBySlugQuery, {
    slug: resolvedParams.slug,
  });
  const formatDate = (isoDate: string): string =>
    new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 space-y-6">
      <Image
        src={blog.coverImage.asset.url}
        alt={blog.title}
        width={900}
        height={500}
        className="rounded-xl object-cover w-full h-auto"
      />
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-500 text-sm">
        {formatDate(blog.publishedAt)} | {blog.category}
      </p>
      <p className="text-base text-gray-700">{blog.description}</p>
      <PortableText value={blog.body} />

      <div className="max-w-full flex flex-col justify-left items-left md:flex gap-3 md:justify-left md:items-left">
        <p className="text-base leading-[150%] text-gray-600">Share post on</p>
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
  );
}
