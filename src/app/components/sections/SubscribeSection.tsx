"use client";
import { ButtonLink } from "@/app/components/ButtonLink";
import { Grid } from "@/app/components/Grid";
import { HeaderSection } from "@/app/components/sections/HeaderSection";

export function SubscribeSection() {
  const submitAction = () => {
    () => console.log("submitted!");
  };
  return (
    <section id="suscribeSection" className="">
      <Grid className="featured">
        <HeaderSection
          title="Записаться на консультацию"
          subTitle="some description"
        />
        <ButtonLink to="" title="Записаться" variant="primary" />
      </Grid>
    </section>
  );
}
