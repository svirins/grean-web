import { Metadata, ResolvingMetadata } from "next";

import {
  createRemoteImageAttributes,
  getTherapyBySlug,
  getTherapySlugs,
} from "@/app/lib/sanity";
import { CoverImage } from "@/app/components/CoverImage";
import { PTComponents } from "@/app/components/PTComponents";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { H2 } from "@/app/components/Typography";
import Balancer from "react-wrap-balancer";
import { SubmissionForm } from "@/app/components/SubmissionForm";

type Props = {
  params: { slug: string };
  searchParams: URLSearchParams;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const data = await getTherapyBySlug(params.slug);
  const {
    width,
    height,
    img: url,
  } = createRemoteImageAttributes(data.coverImage);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [{ url, width, height }],
    },
  };
}

export default async function TherapyPage({ params }: Props) {
  const data = await getTherapyBySlug(params.slug);
  if (!params.slug) {
    notFound();
  }

  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4   pt-[4rem] md:gap-y-20 md:px-10"
    >
      <article>
        <H2 className="mb-8">
          <Balancer ratio={0.85}>{data.title}</Balancer>
        </H2>
        <CoverImage image={data.coverImage} priority={true} />
        <div className="prose mx-auto mt-24 max-w-4xl  break-words  dark:prose-dark">
          <PortableText
            value={data.body}
            onMissingComponent={false}
            components={PTComponents}
          />
        </div>
      </article>
      <SubmissionForm />
    </div>
  );
}

export async function generateStaticParams() {
  const paths = await getTherapySlugs();
  return paths.map((slug) => ({
    slug: slug.slug,
  }));
}
