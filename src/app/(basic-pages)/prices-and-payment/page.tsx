import { PTComponents } from "@/app/components/PTComponents";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { getPageBySlug } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";

export default async function AboutPage() {
  const data = await getPageBySlug("prices-and-payment");
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      <HeaderSection
        title="Психотерапевт Валерий Гринь"
        subTitle="Вы можете ознакомиться с более чем 50 статьями и информационными
          материалами."
      />
      <div className="prose mx-auto mt-24 max-w-4xl  break-words  dark:prose-dark">
        <PortableText
          value={data.body}
          onMissingComponent={false}
          components={PTComponents}
        />
      </div>
    </div>
  );
}
