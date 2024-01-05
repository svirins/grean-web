import { getAllQA } from "@/app/lib/sanity";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import { Grid } from "@/app/components/Grid";
import { Spacer } from "@/app/components/Spacer";
import Link from "next/link";
import { H5, H6 } from "@/app/components/Typography";

export async function QASection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const data = await getAllQA();
  return (
    <section id="qa">
      <HeaderSection title={title} subTitle={description} />
      <Spacer size="2xs" />
      <div className="relative">
        <Grid className="gap-y-8">
          {data?.map((qa) => (
            <div key={qa._id} className="col-span-12">
              <Link
                className="group peer relative block w-full focus:outline-none"
                href={`/voprosy-i-otvety/${qa.slug}`}
              >
                <H6 as="h6" className="link my-4">
                  {qa.title}
                </H6>
              </Link>
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
}
