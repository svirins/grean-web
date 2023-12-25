import { searchPosts } from "@/app/lib/sanity";
import { SearchBar } from "@/app/ui/SearchBar";

type Props = {
  params: object;
  searchParams: { title?: string };
};
const isEmptyObject = (obj: object) => {
  return JSON.stringify(obj) === "{}";
};
import { Card } from "@/app/ui/Card";
import SectionHeader from "@/app/ui/SectionHeader";

export default async function BlogPage(props: Props) {
  const searchParams = props.searchParams;
  const queryString = isEmptyObject(searchParams)
    ? "*"
    : `${searchParams.title}*`;
  const data = await searchPosts(queryString, skip, limit);
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <SectionHeader
        title="Статьи"
        subTitle="Вы можете ознакомиться с более чем 90 статьями и информационными
          материалами."
      />
      <SearchBar />
      <div className="mx-auto hidden grid-cols-1 gap-x-5 gap-y-10 md:grid lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data?.length ? (
          data?.map((post) => (
            <Card
              key={post._id}
              title={post.title}
              coverImage={post.coverImage}
              datePublished={post.datePublished}
              description={post.description}
              link={`/blog/${post.slug}`}
              tags={post.tags}
            />
          ))
        ) : (
          <p>По вашему запросу ничего не найдено</p>
        )}
      </div>
    </div>
  );
}
