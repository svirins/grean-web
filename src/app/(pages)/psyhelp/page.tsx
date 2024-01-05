import { Spacer } from "@/app/components/Spacer";
import { HelpSection } from "@/app/components/sections/HelpSection";
import { SubmitSection } from "@/app/components/sections/SubmitSection";

export const metadata = {
  title: "Психотерапевтическая помощь",
  description: "Я работаю с следующими психологическими проблемами",
};

export default function PsyhelpPage() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      <HelpSection
        title="Помощь"
        description="Я работаю с следующими проблемами:"
      />
      <Spacer size="sm" />
      <SubmitSection />
    </div>
  );
}
