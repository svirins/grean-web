import { SearchBar } from "@/app/components/SearchBar";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
// import { searchPosts } from "@/app/lib/actions";
import { Grid } from "@/app/components/Grid";
import { PostCard } from "@/app/components/PostCard";
import { getPaginatedPosts } from "@/app/lib/sanity";

type Props = {
  params: object;
  searchParams: { page?: string };
};

export default async function BlogPage(props: Props) {
  const searchParams = Number(props.searchParams) ?? 1;
  // TODO: !! Return to server actions instead
  const data = await getPaginatedPosts(0, 9);
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
          {data.length ? (
            data?.map((post, idx) => (
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
      </div>
    </div>
  );
}
