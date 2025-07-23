import BlogClient from "./blogClient";
import { client } from "@/lib/sanity";
import { allBlogQuery } from "@/lib/queries";
import type { Post } from "@/types/sanity";
import MoreInsight from "@/components/blog/components/moreInsight"; 

export default async function BlogWrapper() {
  const posts: Post[] = await client.fetch(allBlogQuery);
   return (
     <>
       <BlogClient posts={posts} />
       <MoreInsight posts={posts} />
     </>
   );
}
