import { getAllPsyHelp } from "@/app/lib/sanity";
import { Card } from "@/app/ui/Card";
import SectionHeader from "@/app/ui/SectionHeader";

export async function PsyhelpGrid({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const data = await getAllPsyHelp();
  return (
    <section id="psyHelp" className="">
      <SectionHeader title={title} subTitle={description} />
      <div className="mx-auto hidden grid-cols-1 gap-x-5 gap-y-10 md:grid lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data?.map((psyhelp) => (
            <Card
              key={psyhelp._id}
              title={psyhelp.title}
              coverImage={psyhelp.coverImage}
              description={psyhelp.description}
              link={`/psyhelp/${psyhelp.slug}`}
            />
          ))}
      </div>
    </section>
  );
}
