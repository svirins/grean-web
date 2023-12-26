import { Consultation } from "@/app/components/Consultation";
import { HelpSection } from "@/app/components/sections/HelpSection";

export default function PsyhelpPage() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <HelpSection
        title="Помощь"
        description="Я работаю с следующими проблемами:"
      />
      <Consultation />
    </div>
  );
}
