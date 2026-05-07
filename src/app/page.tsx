import { FeaturedPostSection } from "@/app/components/sections/FeaturedPostSection";
import { HelpSection } from "@/app/components/sections/HelpSection";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { SubmitSection } from "@/app/components/sections/SubmitSection";
import { TherapySection } from "@/app/components/sections/TherapySection";

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
				title="Методики"
				description="Методики, которые я использую в практике:"
			/>
			<FeaturedPostSection
				title="Избранные статьи"
				description="Ознакомьтесь с более чем 150 статьями в моем блоге:"
			/>
			<SubmitSection />
		</div>
	);
}
