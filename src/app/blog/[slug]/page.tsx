import { client } from "@/lib/sanity";
import { allBlogQuery, blogBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import BlogDetailContent from "@/components/blog/components/blogDetailContent";
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
  
  const formattedDate = formatDate(blog.publishedAt);


  if (!blog) return notFound();

  return (
    <>
      <BlogDetailContent blog={blog} formattedDate={formattedDate} />
      <MoreInsight posts={insights} />
      <CTA />
    </>
  );
}
