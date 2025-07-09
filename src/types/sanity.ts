import { PortableTextBlock } from "@portabletext/types";

export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  description: string;
  category: string;
  coverImage: {
    asset: { url: string };
  };
  body?: PortableTextBlock[];
}
