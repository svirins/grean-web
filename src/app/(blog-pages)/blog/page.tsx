import { SearchBar } from "@/app/components/SearchBar";
import { LoadMore } from "@/app/components/LoadMore";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { InfinitePostGrid } from "@/app/components/InfinitePostGrid";
import { searchPosts } from "@/app/lib/actions";

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
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <HeaderSection
        title="Статьи"
        subTitle="Вы можете ознакомиться с более чем 90 статьями и информационными
          материалами."
      />
      <SearchBar />
      <div className="mx-auto hidden grid-cols-1 gap-x-5 gap-y-10 md:grid lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data?.length ? (
          <InfinitePostGrid posts={data} />
        ) : (
          <p>По вашему запросу ничего не найдено</p>
        )}
      </div>
      <LoadMore queryString={queryString} />
    </div>
  );
}
