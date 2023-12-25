import { Consultation } from "@/app/ui/Consultation";
import { PsyhelpGrid } from "@/app/ui/PsyhelpGrid";

export default function PsyhelpPage() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <PsyhelpGrid
        title="Помощь"
        description="Индивидуально подобранная
          терапия полезна, а часто и необходима уставшему человеку. Я работаю с
          следующими проблемами:"
      />
      <Consultation />
    </div>
  );
}
