import { INFINITE_SCROLL_FRAME_SIZE } from "@/app/lib/constants";
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
} from "./queries";

export async function getAllPosts(): Promise<IPost[]> {
  const posts = await sanityClient.fetch(allPostsQuery);
  return posts;
}
export async function searchPosts(
  queryString: string,
  page: number,
): Promise<IPost[]> {
  // TODO implement 'fromPosition' and 'toPosition'
  const fromPosition = INFINITE_SCROLL_FRAME_SIZE * (page - 1);
  const toPosition = INFINITE_SCROLL_FRAME_SIZE * page - 1;

  const posts = await sanityClient.fetch(searchPostsQuery, {
    queryString: queryString,
    fromPosition: fromPosition,
    toPosition: toPosition,
  });
  return posts;
}
export async function getFeaturedPosts(): Promise<IPost[]> {
  const posts = await sanityClient.fetch(featuredPostsQuery);
  return posts;
}
export const getPostBySlug = async (slug: string): Promise<IPost> => {
  const { post } = await sanityClient.fetch(postBySlugQuery, { slug: slug });
  return post;
};
export const getPostsByTag = async (
  slug: string,
): Promise<{
  title: string;
  description: string;
  posts: IPost[];
}> => {
  const posts = await sanityClient.fetch(postsByTagQuery, { slug });
  return posts;
};
export async function getAllPsyHelp(): Promise<IPsyHelp[]> {
  const psyHelps = await sanityClient.fetch(allPsyHelpQuery);
  return psyHelps;
}
export const getPsyHelpBySlug = async (slug: string): Promise<IPsyHelp> => {
  const { psyHelp } = await sanityClient.fetch(psyHelpBySlugQuery, {
    slug: slug,
  });
  return psyHelp;
};
export async function getAllTherapy(): Promise<ITherapy[]> {
  const therapies = await sanityClient.fetch(allTherapiesQuery);
  return therapies;
}
export const getTherapyBySlug = async (slug: string): Promise<ITherapy> => {
  const { therapy } = await sanityClient.fetch(therapyBySlugQuery, {
    slug: slug,
  });
  return therapy;
};
export const getPostSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(postSlugsQuery);
  return slugs;
};
export const getTagSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(tagSlugsQuery);
  return slugs;
};
export const getTherapySlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(therapySlugsQuery);
  return slugs;
};
export const getPsyHelpSlugs = async (): Promise<string[]> => {
  const slugs = await sanityClient.fetch(psyHelpSlugsQuery);
  return slugs;
};

export const getTotalPosts = async (): Promise<number> => {
  const totalPosts = await sanityClient.fetch(totalPostsNumberQuery);
  return totalPosts;
};
