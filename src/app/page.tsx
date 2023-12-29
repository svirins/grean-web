import { HelpSection } from "@/app/components/sections/HelpSection";
import { TherapySection } from "@/app/components/sections/TherapySection";
import { SubscribeSection } from "@/app/components/sections/SubscribeSection";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { FeaturedPostSection } from "@/app/components/sections/FeaturedPostSection";

export default function HomePage() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      <HeroSection />
      <HelpSection
        title="Помощь"
        description="Я работаю с следующими проблемами:"
      />
      <TherapySection
        title="Направления психотерапии"
        description="Методики, которые я использую в практике:"
      />
      <FeaturedPostSection
        title="Избранные статьи"
        description="Ознакомьтесь с более чем 90 статьями и материалами:"
      />
      <SubscribeSection />
    </div>
  );
}
