import { Consultation } from "@/app/components/Consultation";
import { TherapySection } from "@/app/components/sections/TherapySection";

export default function Therapy() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <TherapySection
        title="Направления психотерапии"
        description="Методики, которые я использую в практике:"
      />
      <Consultation />
    </div>
  );
}
