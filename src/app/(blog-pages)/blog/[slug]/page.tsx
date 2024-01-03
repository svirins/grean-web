import { Metadata, ResolvingMetadata } from "next";

import {
  createRemoteImageAttributes,
  getPostBySlug,
  getPostSlugs,
} from "@/app/lib/sanity";
import { CoverImage } from "@/app/components/CoverImage";
import { PTComponents } from "@/app/components/PTComponents";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { H2 } from "@/app/components/Typography";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { RelatedPostSection } from "@/app/components/sections/RelatedPostSection";
import { Tag } from "@/app/components/Tag";

type Props = {
  params: { slug: string };
  searchParams: URLSearchParams;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const data = await getPostBySlug(params.slug);
  const {
    width,
    height,
    img: url,
  } = createRemoteImageAttributes(data.coverImage);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      type: "article",
      images: [{ url, width, height }],
    },
  };
}
export default async function PostPage({ params }: Props) {
  if (!params.slug) {
    notFound();
  }
  const data = await getPostBySlug(params.slug);

  const date = parse(data.datePublished, "yyyy-MM-dd", new Date());
  const result = format(date, "PP", { locale: ru });
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem]  md:gap-y-20 md:px-10"
    >
      <article>
        <H2>
          <Balancer ratio={0.85}>{data.title}</Balancer>
        </H2>
        <div className="text-secondary mb-8 mt-8 text-lg font-medium">
          {`${result} ~ ${data.readingTime} мин. чтения`}
        </div>
        <div className="col-span-full -mr-4 mb-8 flex flex-wrap lg:col-span-10">
          {data.tags &&
            data.tags.length > 0 &&
            data.tags.map((tag) => (
              <Tag key={tag.slug} slug={tag.slug} title={tag.title} />
            ))}
        </div>
        <CoverImage image={data.coverImage} priority={true} />

        <div className="prose mx-auto mt-24 max-w-4xl  break-words  dark:prose-dark">
          <PortableText
            value={data.body}
            onMissingComponent={false}
            components={PTComponents}
          />
        </div>
      </article>
      {data.relatedPosts && data.relatedPosts?.length > 0 && (
        <RelatedPostSection title="Похожие посты" posts={data.relatedPosts} />
      )}
              <SubmissionForm />

    </div>
  );
}

export async function generateStaticParams() {
  const paths = await getPostSlugs();
  return paths.map((slug) => ({
    slug: slug.slug,
  }));
}
