import { type IPost } from "@/app/lib/sanity";
import { PostCard } from "@/app/components/PostCard";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { Spacer } from "@/app/components/Spacer";
import { Grid } from "@/app/components/Grid";
import clsx from "clsx";

export async function RelatedPostSection({
  title,
  posts,
}: {
  title: string;
  description?: string;
  posts: IPost[];
}) {
  return (
    <section id="similarPosts">
      <HeaderSection title={title} />
      <Spacer size="2xs" />
      <div className="relative">
        <Grid className="gap-y-16">
          {posts?.map((post, idx) => (
            <div
              key={idx}
              className={clsx("col-span-12 md:col-span-6", {
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
