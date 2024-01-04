import { getPostsByTag, getTagSlugs } from "@/app/lib/sanity";
import { SearchBar } from "@/app/components/SearchBar";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { notFound } from "next/navigation";
import { ResolvingMetadata, Metadata } from "next";
import { SubmitSection } from "@/app/components/sections/SubmitSection";
import { Grid } from "@/app/components/Grid";
import { PostCard } from "@/app/components/PostCard";

type Props = {
  params: { tag: string };
  searchParams: URLSearchParams;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const data = await getPostsByTag(params.tag);
  return {
    title: data.title,
    description: data.description,
  };
}
export default async function TagPage({ params }: Props) {
  const { posts: data, title, description } = await getPostsByTag(params.tag);
  if (!data) {
    notFound();
  }
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem]  md:gap-y-20 md:px-10"
    >
      <HeaderSection
        title={title}
        subTitle={description ?? `Посты, отмеченные тегом #${title}`}
        className="capitalize"
      />
      <SearchBar />
      <div className="relative">
        <Grid className="gap-y-16 pb-20">
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
        <SubmitSection />
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
