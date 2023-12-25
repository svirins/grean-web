import { Consultation } from "@/app/ui/Consultation";
import { TherapyGrid } from "@/app/ui/TherapyGrid";

export default function Therapy() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <TherapyGrid
        title="Направления помощи"
        description="Вы можете определиться с тем, какого рода помощь и поддержка Вам
          необходима и обратиться к специалисту, получив представление о
          направлениях психотерапии, которые я использую в практике."
      />
      <Consultation />
    </div>
  );
}
