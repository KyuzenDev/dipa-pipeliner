import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types/sanity";

export default function MoreInsight({ posts }: { posts: Post[] }) {
  const insights = posts.slice(0, 3);
  const formatDate = (isoDate: string): string =>
    new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="max-w-5xl mx-auto py-16 px-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-grayscale-900">
          More Insight
        </h2>
        <Link
          href="/blog"
          className="text-sm text-blue-600 hover:text-blue-800 font-medium transition"
        >
          Explore More →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((post) => (
          <Link
            key={post.slug.current}
            href={`/blog/${post.slug.current}`}
            className="group"
          >
            <div className="space-y-3 rounded-xl p-4 bg-white hover:bg-blue-50 transition duration-300 shadow-sm hover:shadow-md">
              <Image
                src={post.coverImage.asset.url}
                alt={post.title}
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover transition duration-300 group-hover:scale-[1.03]"
              />
              <div className="text-sm text-gray-500">
                {formatDate(post.publishedAt)} | {post.category}
              </div>
              <h3 className="text-lg font-semibold text-grayscale-900 group-hover:text-blue-600 transition">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {post.description.length > 80
                  ? `${post.description.slice(0, 80)}...`
                  : post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
