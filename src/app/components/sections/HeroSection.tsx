import Image from "next/image";
import { H2, H4 } from "@/app/components/Typography";
import { ButtonLink } from "@/app/components/Buttons";

export function HeroSection({ isFront = true }: { isFront?: boolean }) {
  return (
    <div className=" flex flex-col-reverse space-y-10 lg:flex-row lg:justify-between lg:space-y-0">
      <div className="mr-16 items-center space-y-2 lg:space-y-0">
        <div className="flex-flex-col">
          <H2>Здравствуйте. Я - психотерапевт Валерий Гринь</H2>
          <H4 variant="secondary" className="mt-3">
            Я помогу оставить в прошлом Ваши проблемы, тревоги и страхи!
          </H4>

          <div className="mt-14 flex flex-col space-y-4">
            <div className="mr-auto flex flex-col gap-4 ">
              {isFront && (
                <ButtonLink to="/about-me" title="Обо мне" variant="primary" />
              )}
              <ButtonLink to="/blog" title="Мои статьи" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex grow pb-14 lg:pb-0">
        <Image
          src="/doc.webp"
          height={320}
          width={320}
          alt="Психотерапевт Валерий Гринь"
          priority
          className="aspect-square h-80 w-80"
        />
      </div>
    </div>
  );
}
