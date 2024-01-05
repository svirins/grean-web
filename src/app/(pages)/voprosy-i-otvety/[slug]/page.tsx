import { Metadata, ResolvingMetadata } from "next";

import { PTComponents } from "@/app/components/PTComponents";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { H2 } from "@/app/components/Typography";
import Balancer from "react-wrap-balancer";
import { SubmitSection } from "@/app/components/sections/SubmitSection";
import { getQABySlug, getQASlugs } from "@/app/lib/sanity";
import { ButtonLink } from "@/app/components/Buttons";

type Props = {
  params: { slug: string };
  searchParams: URLSearchParams;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {
  const data = await getQABySlug(params.slug);
  if (data) {
    return {
      title: data.title,
      description:
        "Ответы на наиболее распространенные вопросы о психотерапии.",
    };
  }
}

export default async function QAPage({ params }: Props) {
  const data = await getQABySlug(params.slug);
  if (!data) {
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
        <ButtonLink
          to="/voprosy-i-otvety"
          variant="secondary"
          title="<- Вернуться к вопросам и ответам"
        />
        <div className="prose mx-auto mt-24 max-w-4xl  break-words  dark:prose-dark">
          <PortableText
            value={data.body}
            onMissingComponent={false}
            components={PTComponents}
          />
        </div>
      </article>
      <SubmitSection />
    </div>
  );
}

export async function generateStaticParams() {
  const paths = await getQASlugs();
  return paths.map((slug) => ({
    slug: slug.slug,
  }));
}
