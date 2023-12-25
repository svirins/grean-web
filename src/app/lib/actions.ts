"use server";

import { INFINITE_SCROLL_FRAME_SIZE } from "@/app/lib/constants";

import { searchPostsQuery } from "./queries";
import { sanityClient, type IPost } from "@/app/lib/sanity";

export async function searchPosts(
  queryString: string,
  page: number,
): Promise<IPost[]> {
  // TODO implement 'fromPosition' and 'toPosition'
  const fromPosition = INFINITE_SCROLL_FRAME_SIZE * (page - 1);
  const toPosition = INFINITE_SCROLL_FRAME_SIZE * page;

  const posts = await sanityClient.fetch(searchPostsQuery, {
    queryString: queryString,
    fromPosition: fromPosition,
    toPosition: toPosition,
  });
  return posts;
}
