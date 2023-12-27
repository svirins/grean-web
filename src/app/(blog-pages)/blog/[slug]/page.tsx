import { getPostBySlug, getPostSlugs } from "@/app/lib/sanity";
import { Card } from "@/app/components/Card";
import { CoverImage } from "@/app/components/CoverImage";
import { PTComponents } from "@/app/components/PTComponents";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
    searchParams: URLSearchParams;
  };
}) {
  const data = await getPostBySlug(params.slug);
  if (!params.slug) {
    notFound();
  }
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <article>
        <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
          {data.title}
        </h1>
        <div className="sm:mx-0 mb-8 md:mb-16">
          <CoverImage image={data.coverImage} priority={false} />
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime={data.datePublished} className="text-gray-500">
              {data.datePublished}
            </time>
            {`* ${data.readingTime} min read`}
            {data.tags &&
              data.tags.length > 0 &&
              data.tags.map((tag) => (
                <Link
                  href={`/blog/tag/${tag.slug}`}
                  key={tag.slug}
                  className="bg-gray-50 relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {`${tag.title}`}
                </Link>
              ))}
          </div>
        </div>
        <div className="prose mx-auto max-w-2xl">
          <PortableText
            value={data.body}
            onMissingComponent={false}
            components={PTComponents}
          />
        </div>
      </article>
      <hr className="border-accent-2 mb-24 mt-28" />
      {data.relatedPosts &&
        data.relatedPosts?.length > 0 &&
        data.relatedPosts.map((post) => (
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
  );
}

export async function generateStaticParams() {
  const paths = await getPostSlugs();
  return paths.map((slug) => ({
    slug,
  }));
}
