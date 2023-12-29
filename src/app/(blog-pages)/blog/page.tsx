import { SearchBar } from "@/app/components/SearchBar";
import { LoadMore } from "@/app/components/LoadMore";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { searchPosts } from "@/app/lib/actions";
import { Grid } from "@/app/components/Grid";
import { PostCard } from "@/app/components/PostCard";

type Props = {
  params: object;
  searchParams: { title?: string };
};
const isEmptyObject = (obj: object) => {
  return JSON.stringify(obj) === "{}";
};

export default async function BlogPage(props: Props) {
  const searchParams = props.searchParams;
  const queryString = isEmptyObject(searchParams)
    ? "*"
    : `${searchParams.title}*`;
  const data = await searchPosts(queryString, 1);
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
      <LoadMore queryString={queryString} />
    </div>
  );
}
