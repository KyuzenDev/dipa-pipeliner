import { client } from "@/lib/sanity";
import { blogBySlugQuery } from "@/lib/queries";
import type { Metadata } from "next";
type BlogMetaProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: BlogMetaProps): Promise<Metadata> {
  const blog = await client.fetch(blogBySlugQuery, { slug: params.slug });

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The post you're looking for does not exist.",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [{ url: blog.coverImage.asset.url }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.coverImage.asset.url],
    },
  };
}
