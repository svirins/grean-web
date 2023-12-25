"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/app/ui/Spinner";
import { type IPost } from "@/app/lib/sanity";
import { InfinitePostGrid } from "@/app/ui/InfinitePostGrid";
import { produce } from "immer";
import { searchPosts } from "@/app/lib/actions";

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
      <InfinitePostGrid posts={posts} />
      <div
        className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}
