import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types/sanity";

export default function InsightCards({ posts }: { posts: Post[] }) {
  const insights = posts.slice(0, 3);

  const formatDate = (isoDate: string): string =>
    new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-t-1 border-grayscale-200">
      {insights.map((post) => (
        <Link
          key={post.slug.current}
          href={`/blog/${post.slug.current}`}
          className="group"
        >
          <div className="insight-card space-y-3 border-r-1 border-grayscale-200 px-8 py-8 bg-white transition-none duration-300">
            <div className="relative w-full h-48 overflow-hidden rounded-lg">
              <Image
                src={post.coverImage.asset.url}
                alt={post.title}
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </div>
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
  );
}
