import Image from "next/image";
import { H2, H4 } from "@/app/components/Typography";
import { Grid } from "@/app/components/Grid";
import { ButtonLink } from "@/app/components/ButtonLink";

export function HeroSection() {
  return (
    <Grid className="">
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col">
          <div className="flex min-w-[50vw] flex-col">
            <H2 as="h2">Я психотеравет Валерий Гринь</H2>
            <H4 as="p" variant="secondary" className="mt-3">
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
        <div className="col-span-6 flex flex-1">
          <Image
            src="/doc.webp"
            alt="Психотерапевт Валерий Гринь"
            fill
            priority
            className="h-auto max-h-50vh w-full object-contain"
          />
        </div>
      </div>
    </Grid>
  );
}