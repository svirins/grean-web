import { getAllPosts } from "@/app/lib/sanity";
import { Card } from "@/app/ui/Card";
import { CoverImage } from "@/app/ui/CoverImage";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function BlogPage() {
  const data = await getAllPosts();
  const { coverImage, title, slug, datePublished, description, tags } =
    data[0]!;
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
        <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          <Balancer ratio={0.65}>Статьи</Balancer>
        </h1>
        <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
          Вы можете ознакомиться с более чем 50 статьями и информационными
          материалами.
        </h4>
      </header>
      <section>
        <div className="mb-8 md:mb-16">
          <CoverImage
            image={coverImage}
            link={`/blog/${slug}`}
            priority={true}
          />
        </div>
        <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
          <div>
            <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
              <Link href={`/blog/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              {datePublished && (
                <time dateTime={datePublished} className="text-gray-500">
                  {datePublished}
                </time>
              )}
              {tags &&
                tags.length > 0 &&
                tags.map((tag) => (
                  <Link
                    href={`/blog/tag/${tag.slug}`}
                    key={tag.slug}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {`${tag.title}`}
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <div className="mb-4 text-lg leading-relaxed">
              <Link
                href={`/blog/${slug}`}
                className="mb-4 text-lg leading-relaxed hover:underline"
              >
                {description}
              </Link>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}
