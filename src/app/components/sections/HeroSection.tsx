import Image from "next/image";
import { H2, H4 } from "@/app/components/Typography";
import { Grid } from "@/app/components/Grid";
import doc from "@/assets/doc.webp";
import { ButtonLink } from "@/app/components/ButtonLink";

export function HeroSection() {
  return (
    <Grid className="h-auto pt-24 lg:min-h-[32rem] lg:pb-12">
      {/* <div className="lg:mb-0flex col-span-full mb-12  items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mr-5vw lg:-mt-24 lg:px-0">
        <div className="h-auto max-h-50vh w-full object-contain">
          <Image
            src={doc}
            alt="Психотерапевт Валерий Гринь"
            fill
            // className="relative h-auto"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRtACAABXRUJQVlA4WAoAAAAgAAAAnwAAnwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg4gAAANALAJ0BKqAAoAA+7XaxVamnJCMgajEwHYlpbt1eB6vgBQs8cXvmbF/HwPKfLWG5WrftvTzQ41pOJK26MnUYNZc10fV0H0ggDuQhgA5qo0dG+0gA75Jj/WObLSSGX3ua24Y8sFnzf8AA/vDerGeWYCTy9vSipllpaGHAIDZjEGZpRPpcTD16hAE/lC8hYORLK797i1pwdNVNl19mPueyJdIRa9u5zFkmj2uf61vHBMmzvLmBWaQv+j8Q+gQ/Z36Y8ZYuMhVLOxhyFa1wCxIQmuj13zSEawrvPDmqI2hQV7SmAAA="
          />
        </div>
      </div> */}
      <div className="col-span-full pt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col">
        <div className="flex flex-auto flex-col">
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
    </Grid>
  );
}
