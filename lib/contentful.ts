import { cache } from "react";
import { createClient } from "contentful";

export type PostSummary = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
};

function getClient() {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  if (!space || !accessToken) {
    throw new Error("Missing Contentful env vars");
  }

  return createClient({ space, accessToken });
}

function assetUrl(url?: string) {
  if (!url) return "/images/placeholder.jpg";
  return url.startsWith("//") ? `https:${url}` : url;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPostsSummary();
  return posts.map((post) => post.slug).filter(Boolean);
}

export const getAllPostsSummary = cache(async (): Promise<PostSummary[]> => {
  const client = getClient();
  const response = await client.getEntries({
    content_type: "blogPost",
    // @ts-expect-error Contentful SDK accepts string order in v10
    order: "-sys.createdAt",
    limit: 1000,
  });

  return response.items.map((post) => {
    const fields = post.fields as any;
    return {
      slug: fields.slug,
      title: fields.title,
      subtitle: fields.subtitle || "",
      description: fields.description || "",
      heroImage: assetUrl(fields.heroImage?.fields?.file?.url),
    };
  });
});

export async function getPostBySlug(slug: string) {
  const client = getClient();
  const response = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  return response.items[0] ?? null;
}

export function contentfulImageUrl(url?: string) {
  if (!url) return null;
  return url.startsWith("//") ? `https:${url}` : url;
}
