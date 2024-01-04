import { createClient } from "next-sanity";
import {
  type SanityAsset,
  getImageDimensions,
  type SanityImageSource,
} from "@sanity/asset-utils";
import createImageUrlBuilder from "@sanity/image-url";
import { type PortableTextBlock } from "@sanity/types";

export const sanityClient = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2023-12-12",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV !== "production",
});

const imageBuilder = createImageUrlBuilder({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
});

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto("format").fit("max");

export function createRemoteImageAttributes(src: SanityAsset) {
  const basewidth = 1000;
  const { width, height } = getImageDimensions(src);
  const actualHeight = Math.trunc((height / width) * basewidth);
  const sanityImageUrl = `${urlForImage(src)
    .format("webp")
    .url()}&w=${basewidth}&h=${actualHeight}`;
  return {
    width: basewidth,
    height: actualHeight,
    img: sanityImageUrl,
  };
}

export interface SanityAssetExtended extends SanityAsset {
  aspectRatio: number;
  lqip: string;
  alt: string;
  caption?: string;
}

export interface IPost {
  _id: string;
  title: string;
  slug: string;
  datePublished: string;
  displayAtFront: boolean;
  body: PortableTextBlock[];
  coverImage: SanityAssetExtended;
  description: string;
  readingTime: number;
  tags: ITag[];
  relatedPosts?: IPost[];
}

export interface ITag {
  _id: string;
  title: string;
  slug: string;
  description?: string;
}

export interface IPage {
  _id: string;
  title: string;
  slug: string;
  body: PortableTextBlock[];
}

export interface IPsyHelp {
  _id: string;
  title: string;
  slug: string;
  body: PortableTextBlock[];
  description: string;
  coverImage: SanityAssetExtended;
}

export interface ITherapy {
  _id: string;
  title: string;
  slug: string;
  body: PortableTextBlock[];
  description: string;
  coverImage: SanityAssetExtended;
}

import {
  allPostsQuery,
  searchPostsQuery,
  featuredPostsQuery,
  postBySlugQuery,
  postsByTagQuery,
  allPsyHelpQuery,
  psyHelpBySlugQuery,
  allTherapiesQuery,
  therapyBySlugQuery,
  postSlugsQuery,
  tagSlugsQuery,
  therapySlugsQuery,
  psyHelpSlugsQuery,
  totalPostsNumberQuery,
  pageBySlugQuery,
} from "./queries";
import { POSTS_PER_PAGE } from "@/app/lib/constants";

export async function getAllPosts(): Promise<IPost[]> {
  const posts = await sanityClient.fetch(allPostsQuery);
  return posts;
}
export async function getPaginatedPosts(currentPage: number): Promise<IPost[]> {
  const fromPosition = POSTS_PER_PAGE * (currentPage - 1);
  const toPosition = POSTS_PER_PAGE * currentPage;
  const posts = await sanityClient.fetch(searchPostsQuery, {
    fromPosition: fromPosition,
    toPosition: toPosition,
  });
  return posts;
}
export async function getFeaturedPosts(): Promise<IPost[]> {
  const posts = await sanityClient.fetch(featuredPostsQuery);
  return posts ?? [];
}
export const getPostBySlug = async (slug: string): Promise<IPost> => {
  const { post } = await sanityClient.fetch(postBySlugQuery, { slug: slug });
  return post ?? null;
};
export const getPostsByTag = async (
  slug: string,
): Promise<{
  title: string;
  description: string;
  posts: IPost[];
}> => {
  const posts = await sanityClient.fetch(postsByTagQuery, { slug });
  return posts ?? [];
};
export async function getAllPsyHelp(): Promise<IPsyHelp[]> {
  const psyHelps = await sanityClient.fetch(allPsyHelpQuery);
  return psyHelps;
}
export const getPsyHelpBySlug = async (slug: string): Promise<IPsyHelp> => {
  const { psyHelp } = await sanityClient.fetch(psyHelpBySlugQuery, {
    slug: slug,
  });
  return psyHelp ?? null;
};
export async function getAllTherapy(): Promise<ITherapy[]> {
  const therapies = await sanityClient.fetch(allTherapiesQuery);
  return therapies;
}
export const getTherapyBySlug = async (slug: string): Promise<ITherapy> => {
  const { therapy } = await sanityClient.fetch(therapyBySlugQuery, {
    slug: slug,
  });
  return therapy ?? null;
};

export const getPageBySlug = async (slug: string): Promise<ITherapy> => {
  const { page } = await sanityClient.fetch(pageBySlugQuery, {
    slug: slug,
  });
  return page;
};

export const getPostSlugs = async (): Promise<
  { slug: string; date: string }[]
> => {
  const slugs = await sanityClient.fetch(postSlugsQuery);
  return slugs;
};
export const getTagSlugs = async (): Promise<
  { slug: string; date: string }[]
> => {
  const slugs = await sanityClient.fetch(tagSlugsQuery);
  return slugs;
};
export const getTherapySlugs = async (): Promise<
  { slug: string; date: string }[]
> => {
  const slugs = await sanityClient.fetch(therapySlugsQuery);
  return slugs;
};
export const getPsyHelpSlugs = async (): Promise<
  { slug: string; date: string }[]
> => {
  const slugs = await sanityClient.fetch(psyHelpSlugsQuery);
  return slugs;
};

export const getTotalPosts = async (): Promise<number> => {
  const totalPosts = await sanityClient.fetch(totalPostsNumberQuery);
  return totalPosts;
};
