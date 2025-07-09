import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types/sanity";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="space-y-3 block">
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
      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-400">
        {post.title}
      </h3>
      <p className="text-gray-600 text-sm">{post.description}</p>
    </Link>
  );
}
