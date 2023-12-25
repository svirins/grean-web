import { getPostsByTag, getTagSlugs } from "@/app/lib/sanity";
import { Card } from "@/app/ui/Card";
import { SearchBar } from "@/app/ui/SearchBar";
import SectionHeader from "@/app/ui/SectionHeader";

export default async function TagPage({
  params,
}: {
  params: {
    tag: string;
    searchParams: URLSearchParams;
  };
}) {
  const { posts: data, title, description } = await getPostsByTag(params.tag);
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <SectionHeader title={title} subTitle={description ?? "Описание тега"} />
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

export async function generateStaticParams() {
  const paths = await getTagSlugs();
  return paths.map((tag) => ({
    tag,
  }));
}
