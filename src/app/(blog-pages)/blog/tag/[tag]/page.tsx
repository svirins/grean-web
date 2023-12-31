import { getPostsByTag, getTagSlugs } from "@/app/lib/sanity";
import { Card } from "@/app/components/Card";
import { SearchBar } from "@/app/components/SearchBar";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { notFound } from "next/navigation";
import { ResolvingMetadata, Metadata } from "next";

type Props = {
  params: { tag: string };
  searchParams: URLSearchParams;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { title, description } = await getPostsByTag(params.tag);
  return {
    title: title,
    description: description,
  };
}
export default async function TagPage({ params }: Props) {
  if (!params.tag) {
    notFound();
  }
  const { posts: data, title, description } = await getPostsByTag(params.tag);
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem]  md:gap-y-20 md:px-10"
    >
      <HeaderSection title={title} subTitle={description ?? "Описание тега"} />
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
    tag: tag.slug,
  }));
}
