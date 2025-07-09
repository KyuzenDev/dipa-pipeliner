export const allBlogQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    description,
    category,
    coverImage {
      asset->{url}
    }
  }
`;

export const blogBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    publishedAt,
    description,
    category,
    coverImage {
      asset->{url}
    },
    body
  }
`;
