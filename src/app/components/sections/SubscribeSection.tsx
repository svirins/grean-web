"use server";
import { Grid } from "@/app/components/Grid";
import { SubmissionForm } from "@/app/components/SubmissionForm";
import { HeaderSection } from "@/app/components/sections/HeaderSection";

export async function SubscribeSection() {
  return (
    <section id="suscribeSection" className="">
      <Grid className="featured">
        <HeaderSection
          className="mb-8"
          title="Записаться на консультацию"
          subTitle="some description"
        />
        <SubmissionForm />
      </Grid>
    </section>
  );
}
