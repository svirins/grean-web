import Image from "next/image";
import doc from "@/assets/hero_slide.webp";

export function HeroBanner() {
  return (
    <section id="canHelp" className="relative">
      <div className="mt-6 flex w-full min-w-full items-center  sm:gap-[48px]  md:mt-0 md:min-w-[472px] lg:min-w-[1024px]">
        <Image
          src={doc}
          alt="Психотерапевт Валерий Гринь"
          fill
          className="none relative h-[500px] min-w-[350px] items-center object-contain md:flex lg:h-[632px] lg:min-w-[490px]"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRtACAABXRUJQVlA4WAoAAAAgAAAAnwAAnwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg4gAAANALAJ0BKqAAoAA+7XaxVamnJCMgajEwHYlpbt1eB6vgBQs8cXvmbF/HwPKfLWG5WrftvTzQ41pOJK26MnUYNZc10fV0H0ggDuQhgA5qo0dG+0gA75Jj/WObLSSGX3ua24Y8sFnzf8AA/vDerGeWYCTy9vSipllpaGHAIDZjEGZpRPpcTD16hAE/lC8hYORLK797i1pwdNVNl19mPueyJdIRa9u5zFkmj2uf61vHBMmzvLmBWaQv+j8Q+gQ/Z36Y8ZYuMhVLOxhyFa1wCxIQmuj13zSEawrvPDmqI2hQV7SmAAA="
        />
        <div className="flex w-full items-center">
          <div className="max-w-full">
            <div>
              <h1 className="w-100 mt-0 text-[40px] font-bold leading-[50.4px]  md:mt-[64px] md:text-[64px] md:leading-[72px] lg:w-3/4 ">
                Why join us?
              </h1>
              <p className="my-4 text-base font-light leading-7 md:my-8">
                Get tailored recommendations and advice. Use our features to
                find and manage your skincare routine.
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex-row">
              <div className="flex min-w-full flex-wrap gap-12 md:min-w-fit xl:flex-nowrap">
                <div className="md:x-screen xs:min-w-full md:min-w-[unset]">
                  <h3 className="text-2xl font-bold xs:w-full">
                    Share your skincare journey
                  </h3>
                  <p className="mt-4 text-base font-light leading-7 xs:w-full">
                    Для современного горожанина личный консультант в области
                    охраны психического здоровья. вероятно одна из немногих, а
                    может быть, и единственная возможность для безопасного
                    исследования себя и своих отношений с окружением, другими
                    людьми. Индивидуально подобранная терапия полезна, а часто и
                    необходима уставшему человеку.
                  </p>
                </div>
                <div className="md:x-screen xs:min-w-full md:min-w-[unset]">
                  <h3 className="text-2xl font-bold xs:w-full">
                    Share your skincare journey
                  </h3>
                  <p className="mt-4 text-base font-light leading-7 xs:w-full">
                    Share your skincare progress with your friends and
                    followers. Discuss anything skincare-related, and filter the
                    discussions by your skin type, concerns and interests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
