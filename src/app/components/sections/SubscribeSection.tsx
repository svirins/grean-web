"use server";
import { ButtonLink } from "@/app/components/ButtonLink";
import { Grid } from "@/app/components/Grid";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import z from "zod";
import isMobilePhone from "validator/es/lib/isMobilePhone";

const submitFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Минимум 3 символа" })
    .max(32, { message: "Максимум 32 символа" }),
  email: z.string().email({ message: "Недопустимый email " }),
  phone: z
    .string()
    .refine(isMobilePhone, { message: "Недопустимый номер телефона" }),
  message: z.string().max(1024, { message: "Максимум 1024 символа" }),
});
export async function SubscribeSection() {
  async function createSubmission(formData: FormData) {
    return null;
  }
  return (
    <section id="suscribeSection" className="">
      <Grid className="featured">
        <HeaderSection
          className="mb-8"
          title="Записаться на консультацию"
          subTitle="some description"
        />
        {/* <form action={createSubmission}>...</form> */}
        {/* <ButtonLink to="" title="Записаться" variant="primary" /> */}
      </Grid>
    </section>
  );
}
