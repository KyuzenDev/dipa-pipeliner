import { client } from "@/lib/sanity";
import { blogBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
type BlogParams = {
  params: { slug: string };
};

export default async function BlogDetailPage({ params }: BlogParams) {
  const blog = await client.fetch(blogBySlugQuery, { slug: params.slug });

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
        {blog.publishedAt} | {blog.category}
      </p>
      <p className="text-base text-gray-700">{blog.description}</p>
      <PortableText value={blog.body} />
    </div>
  );
}
