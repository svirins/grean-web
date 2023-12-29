import { getAllTherapy } from "@/app/lib/sanity";
import { ServiceCard } from "@/app/components/ServiceCard";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { Grid } from "@/app/components/Grid";
import { Spacer } from "@/app/components/Spacer";

export async function TherapySection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const data = await getAllTherapy();
  return (
    <section id="psyHelp">
      <HeaderSection title={title} subTitle={description} />
      <Spacer size="2xs" />
      <div className="relative">
        <Grid className="gap-y-16">
          {data?.map((therapy) => (
            <div key={therapy._id} className="col-span-4">
              <ServiceCard
                title={therapy.title}
                coverImage={therapy.coverImage}
                description={therapy.description}
                link={`/therapy/${therapy.slug}`}
              />
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
}
