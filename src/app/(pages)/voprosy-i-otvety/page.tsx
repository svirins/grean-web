import { SubmitSection } from "@/app/components/sections/SubmitSection";
import { QASection } from "@/app/components/sections/QASection";
import { Spacer } from "@/app/components/Spacer";

export const metadata = {
  title: "Вопросы и ответы",
  description: "Ответы на наиболее распространенные вопросы о психотерапии.",
};

export default function QA() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      <QASection
        title="Вопросы и ответы"
        description="Ответы на наиболее распространенные вопросы о психотерапии."
      />
      <Spacer size="sm" />
      <SubmitSection />
    </div>
  );
}
