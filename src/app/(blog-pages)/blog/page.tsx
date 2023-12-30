import { SearchBar } from "@/app/components/SearchBar";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { Grid } from "@/app/components/Grid";
import { PostCard } from "@/app/components/PostCard";
import { getPaginatedPosts, getTotalPosts } from "@/app/lib/sanity";
import { Pagination } from "@/app/components/Pagination";
import { POSTS_PER_PAGE } from "@/app/lib/constants";

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getPaginatedPosts(currentPage);
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      <HeaderSection
        title="Статьи"
        subTitle="Вы можете ознакомиться с более чем 90 статьями и информационными
          материалами."
      />
      <SearchBar />
      <div className="relative">
        <Grid className="gap-y-16">
          {data?.map((post, idx) => (
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
          ))}
        </Grid>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
