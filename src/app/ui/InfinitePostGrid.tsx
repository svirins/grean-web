import { type IPost } from "@/app/lib/sanity";
import { Card } from "@/app/ui/Card";

export function InfinitePostGrid({ posts }: { posts: IPost[] }) {
  return posts?.map((post) => (
    <Card
      key={post._id}
      title={post.title}
      coverImage={post.coverImage}
      datePublished={post.datePublished}
      description={post.description}
      link={`/blog/${post.slug}`}
      tags={post.tags}
    />
  ));
}
