"use server";
import { Spacer } from "@/app/components/Spacer";
import { SubmissionForm } from "@/app/components/SubmissionForm";
import { HeaderSection } from "@/app/components/sections/HeaderSection";

export async function SubmitSection() {
  return (
    <section id="suscribeSection">
      <div className="border-secondary  rounded-xl border-2 px-16 py-12">
        <div className="flex flex-col">
          <HeaderSection
            className="mb-8"
            title="Записаться на консультацию"
            subTitle="Оставьте заявку и я обязательно свяжусь с Вами"
          />
          <Spacer size="2xs" />
          <div className="relative">
            <SubmissionForm classname="f-wull" />
          </div>
        </div>
      </div>
    </section>
  );
}
