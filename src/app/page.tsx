import { HelpSection } from "@/app/components/sections/HelpSection";
import { TherapySection } from "@/app/components/sections/TherapySection";
import { Consultation } from "@/app/components/Consultation";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { FeaturedPostSection } from "@/app/components/sections/FeaturedPostSection";

export default function HomePage() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
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
      <Consultation />
      <FeaturedPostSection
        title="Избарнные статьи"
        description="Ознакомьтесь с более чем 90 статьями и материалами из."
        ctaUrl="/blog"
        cta="Все статьи"
      />
    </div>
  );
}
