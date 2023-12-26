import { getAllPsyHelp } from "@/app/lib/sanity";
import { ServiceCard } from "@/app/components/ServiceCard";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { Grid } from "@/app/components/Grid";
import { Spacer } from "@/app/components/Spacer";

export async function HelpSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const data = await getAllPsyHelp();
  return (
    <section id="psyHelp">
      <HeaderSection title={title} subTitle={description} />
      <Spacer size="2xs" />
      <div className="relative">
        <Grid className="gap-y-16">
          {data?.map((service) => (
            <div key={service._id} className="col-span-4">
              <ServiceCard
                title={service.title}
                coverImage={service.coverImage}
                description={service.description}
                link={`/psyhelp/${service.slug}`}
              />
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
}
