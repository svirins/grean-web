import SectionHeader from "@/app/ui/SectionHeader";

export default function AboutPage() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-y-16 px-4 md:gap-y-20 md:px-10"
    >
      <SectionHeader
        title="Психотерапевт Валерий Гринь"
        subTitle="Вы можете ознакомиться с более чем 50 статьями и информационными
          материалами."
      />
    </div>
  );
}
