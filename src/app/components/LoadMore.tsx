"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/app/components/Spinner";
import { type IPost } from "@/app/lib/sanity";
import { produce } from "immer";
import { searchPosts } from "@/app/lib/actions";
import { Grid } from "@/app/components/Grid";
import { PostCard } from "@/app/components/PostCard";

export function LoadMore({ queryString }: { queryString: string }) {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState(1);

  console.log("Posts are", posts);
  console.log("Page is", page);
  const { ref, inView } = useInView();

  // const delay = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));

  const loadMorePosts = async () => {
    // Once the page 8 is reached repeat the process all over again.
    //  delay(1000);
    // const totalPosts = await getTotalPosts();
    // const nextPage = (page % 7) + 1;

    const newPosts = await searchPosts(queryString, page);
    setPosts(
      produce((draft) => {
        [...draft, ...newPosts];
      }),
    );
    setPage(
      produce((draft) => {
        draft + 1;
      }),
    );
  };

  useEffect(() => {
    console.log("In vew is", inView);
    if (inView) {
      void loadMorePosts();
    }
  }, [inView]);

  return (
    <>
      <Grid className="gap-y-16">
        {posts.length ? (
          posts?.map((post, idx) => (
            <div key={idx} className="col-span-4">
              <PostCard
                title={post.title}
                readingTime={post.readingTime}
                coverImage={post.coverImage}
                datePublished={post.datePublished}
                link={`/blog/${post.slug}`}
                tags={post.tags}
              />
            </div>
          ))
        ) : (
          <p>По вашему запросу ничего не найдено</p>
        )}
      </Grid>
      <Spinner />
    </>
  );
}
