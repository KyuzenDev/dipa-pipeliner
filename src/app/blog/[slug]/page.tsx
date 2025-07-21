import { client } from "@/lib/sanity";
import { blogBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
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
        <p className="text-gray-500 text-normal">{formatDate(blog.publishedAt)}</p>
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
      <p className="text-base text-gray-700">{blog.description}</p>
      <PortableText value={blog.body} />
    </div>
  );
}
