import algoliasearch from "algoliasearch";
import groq from "groq";
import { createClient } from "next-sanity";

export interface IPost {
  _id: string;
  publishedAt: string;
  title: string;
  slug: string;
  tags?: string[];
}

const sanityClient = createClient({
  apiVersion: process.env.SANITY_API_VERSION ?? "2023-12-12",
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: true,
});

export const allPostsQuery = groq`
*[_type == "post" ] | order(datePublished desc, _updatedAt desc) {
  _id,
  "publishedAt": _updatedAt,
  title,
  "slug": slug.current,
  "tags": tags[] -> title
}`;

async function getAllPosts(): Promise<IPost[]> {
  const posts = await sanityClient.fetch(allPostsQuery);
  return posts;
}

const algoliaInstance = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.ALGOLIA_SEARCH_ADMIN_KEY!,
);

export default async function generateIndex() {
  const data = await getAllPosts();
  const indexData = data.map((post) => {
    return {
      objectID: post._id,
      title: post.title,
      slug: post.slug,
      tags: post.tags,
    };
  });

  const index = algoliaInstance.initIndex(
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX_NAME!,
  );
  console.log(index);

  try {
    await index.saveObjects(indexData);
    console.log(
      `Saving ${indexData.length} documents to index: ${index.indexName}`,
    );
    return {
      status: 200,
      body: "Success!",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: error,
    };
  }
}
generateIndex();
