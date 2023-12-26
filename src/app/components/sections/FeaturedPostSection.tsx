import { getFeaturedPosts } from "@/app/lib/sanity";
import { PostCard } from "@/app/components/PostCard";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { Spacer } from "@/app/components/Spacer";
import { Grid } from "@/app/components/Grid";
import clsx from "clsx";

export async function FeaturedPostSection({
  title,
  description,
}: {
  title: string;
  description: string;
  cta?: string;
  ctaUrl: string;
}) {
  const data = await getFeaturedPosts();
  return (
    <section id="recentPosts">
      <HeaderSection
        title={title}
        // ctaUrl="/blog"
        // cta="Все статьи"
        subTitle={description}
      />
      <Spacer size="2xs" />
      <div className="relative">
        <Grid className="gap-y-16">
          {data?.map((post, idx) => (
            <div
              key={post._id}
              className={clsx("col-span-4", {
                "hidden lg:block": idx >= 2,
              })}
            >
              <PostCard
                title={post.title}
                readingTime={post.readingTime}
                coverImage={post.coverImage}
                datePublished={post.datePublished}
                description={post.description}
                link={`/blog/${post.slug}`}
                tags={post.tags}
              />
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
}
