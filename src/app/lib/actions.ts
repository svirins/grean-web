"use server";

import { INFINITE_SCROLL_FRAME_SIZE } from "@/app/lib/constants";

// import { sanityClient, type IPost, getPaginatedPosts } from "@/app/lib/sanity";

// export async function searchPosts(page: number): Promise<IPost[]> {
//   const fromPosition = INFINITE_SCROLL_FRAME_SIZE * (page - 1);
//   const toPosition = INFINITE_SCROLL_FRAME_SIZE * page;

//   const posts = await sanityClient.fetch(getPaginatedPosts, {
//     fromPosition: fromPosition,
//     toPosition: toPosition,
//   });
//   return posts;
// }
