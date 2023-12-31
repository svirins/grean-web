import { TherapySection } from "@/app/components/sections/TherapySection";

export const metadata = {
  title: "Направления психотерапии",
  description: "Методики, которые я использую в практике.",
};

export default function Therapy() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      <TherapySection
        title="Направления психотерапии"
        description="Методики, которые я использую в практике:"
      />
    </div>
  );
}
