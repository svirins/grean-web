import { PTComponents } from "@/app/components/PTComponents";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { getPageBySlug } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";

export const metadata = {
  title: "Правила и условия",
};
export default async function ThermsPage() {
  const data = await getPageBySlug("terms-and-conditions");
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      <HeaderSection
        title="Правила и условия"
        subTitle="порядок предоставления услуг"
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
