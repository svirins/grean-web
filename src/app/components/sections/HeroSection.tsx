import Image from "next/image";
import { H2, H4 } from "@/app/components/Typography";
import { ButtonLink } from "@/app/components/ButtonLink";

export function HeroSection() {
  return (
    <div className="col-span-full flex flex-col space-y-10 lg:flex-row lg:items-end lg:justify-between lg:space-y-0">
      <div className="space-y-2 lg:space-y-0">
        <div className="flex-flex-col">
          <H2>Здравствуйте. Я - психотеравет Валерий Гринь</H2>
          <H4 variant="secondary" className="mt-3">
            Квалифицированный специалист поможет оставить в прошлом Ваши
            проблемы, тревоги и страхи!
          </H4>

          <div className="mt-14 flex flex-col space-y-4">
            <div className="mr-auto flex flex-col gap-4">
              <ButtonLink to="/about" title="Обо мне" variant="primary" />
              <ButtonLink to="/blog" title="Мои статьи" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/doc.webp"
        height={256}
        width={256}
        alt="Психотерапевт Валерий Гринь"
        priority
        // className="md:w-[50vh]"
      />
    </div>
  );
}
