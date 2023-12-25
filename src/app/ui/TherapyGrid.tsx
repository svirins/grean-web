import { getAllTherapy } from "@/app/lib/sanity";
import { Card } from "@/app/ui/Card";
import SectionHeader from "@/app/ui/SectionHeader";

export async function TherapyGrid({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const data = await getAllTherapy();
  return (
    <section id="therapy" className="">
      <SectionHeader title={title} subTitle={description} />
      <div className="mx-auto hidden grid-cols-1 gap-x-5 gap-y-10 md:grid lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data?.map((therapy) => (
            <Card
              key={therapy._id}
              title={therapy.title}
              coverImage={therapy.coverImage}
              description={therapy.description}
              link={`/therapy/${therapy.slug}`}
            />
          ))}
      </div>
    </section>
  );
}
