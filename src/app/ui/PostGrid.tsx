"use client";
import { getFeaturedPosts } from "@/app/lib/sanity";
import { Card } from "@/app/ui/Card";
import SectionHeader from "@/app/ui/SectionHeader";

export async function PostGrid({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const data = await getFeaturedPosts();
  return (
    <section id="recentPosts" className="">
      <SectionHeader
        title={title}
        link="/blog"
        linkTitle="Все статьи"
        subTitle={description}
      />
      <div className="mx-auto hidden grid-cols-1 gap-x-5 gap-y-10 md:grid lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data?.map((post) => (
            <Card
              key={post._id}
              title={post.title}
              coverImage={post.coverImage}
              datePublished={post.datePublished}
              description={post.description}
              link={`/blog/${post.slug}`}
              tags={post.tags}
            />
          ))}
      </div>
    </section>
  );
}
