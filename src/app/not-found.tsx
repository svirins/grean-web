import { ButtonLink } from "@/app/components/Buttons";
import { HeaderSection } from "@/app/components/sections/HeaderSection";

export default function NotFound() {
  // TODO: revalidate
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem]  md:gap-y-20 md:px-10"
    >
      <HeaderSection
        title="Ошибка 404"
        subTitle="Такой страницы не существует или она перемещена"
      />
      <ButtonLink
        to="/about-me"
        title="Вернуться на главную"
        variant="secondary"
        className="mx-auto"
      />
    </div>
  );
}
