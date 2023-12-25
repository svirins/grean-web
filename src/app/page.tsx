import { PsyhelpGrid } from "@/app/ui/PsyhelpGrid";
import { TherapyGrid } from "@/app/ui/TherapyGrid";
import { PostGrid } from "@/app/ui/PostGrid";
import { HeroBanner } from "@/app/ui/HeroBanner";
import { Consultation } from "@/app/ui/Consultation";

export default function HomePage() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <HeroBanner />
      <PsyhelpGrid
        title="Помощь"
        description="Я работаю с следующими проблемами."
      />
      <TherapyGrid
        title="Направления помощи"
        description="Вы можете определиться с тем, какого рода помощь и поддержка Вам
          необходима и обратиться к специалисту, получив представление о
          направлениях психотерапии, которые я использую в практике."
      />
      <Consultation />
      <PostGrid
        title="Последние статьи"
        description="Вы можете ознакомиться с более чем 50 статьями и информационными
          материалами."
      />
    </div>
  );
}
