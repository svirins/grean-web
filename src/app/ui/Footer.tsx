// import Link from "next/link";

// export function Footer() {
//   return (
//     <footer className="bg-gray-900 pb-16 pt-48">
//       <div className="grid-rows-max-content xl:gap-x-6mx-auto relative mx-auto grid max-w-[1440px] grid-cols-4 gap-x-4 md:grid-cols-8 xl:grid-cols-12">
//         <div
//       </div>
//     </footer>
//   );
// }

function SubscribeSection() {
  return (
    <div>
      <h4>Записатья на консультацию</h4>
      <div className="mt-4 max-w-md">
        <p>
          Квалифицированный специалист поможет оставить в прошлом Ваши проблемы,
          тревоги и страхи!
        </p>
      </div>
    </div>
  );
}
function ContactSection() {
  return (
    <div>
      <h4>Контакты</h4>
      <ul className="mt-4">
        <FooterLink name="+375 29 667-23-80 " href="tel:+375296672380" />
        <FooterLink name="Email " href="mailto:vgrean@mail.ru" />
        <FooterLink name="Skype" href="skype:valeri20770?call" />
      </ul>
    </div>
  );
}
function GeneralSection() {
  return (
    <div>
      <h4>Информация</h4>
      <ul className="mt-4">
        <FooterLink name="Правила и условия" href="/terms-and-conditions" />
        <FooterLink name="Договор оферты" href="/contract-offer" />
        <FooterLink
          name="Прейскурант и оплата услуг"
          href="/prices-and-payment"
        />
        <FooterLink name="Вопросы и ответы" href="/q-and-a" />
      </ul>
    </div>
  );
}

function SitemapSection() {
  return (
    <div>
      <h6>Sitemap</h6>
      <ul className="mt-4">
        <FooterLink name="Главная" href="/" />
        <FooterLink name="Помощь" href="/psyhelp" />
        <FooterLink name="Направления" href="/therapy" />
        <FooterLink name="Обо мне" href="/about" />
        <FooterLink name="Статьи" href="/blog" />
        <FooterLink name="Sitemap.xml" reload href="/sitemap.xml" />
      </ul>
    </div>
  );
}

function AboutSection() {
  return (
    <div>
      <h4 as="div">Kent C. Dodds</h4>

      <p className="text-secondary mt-6 max-w-md text-2xl">
        Full time educator making our world better
      </p>

      <div className="text-secondary mt-6 flex items-center justify-between gap-4 xl:flex-col xl:items-start">
        <div className="flex gap-4">
          <IconLink href={externalLinks.github}>
            <GithubIcon size={32} />
          </IconLink>
          <IconLink href={externalLinks.youtube}>
            <YoutubeIcon size={32} />
          </IconLink>
          <IconLink href={externalLinks.twitter}>
            <TwitterIcon size={32} />
          </IconLink>
          <IconLink href={externalLinks.rss}>
            <RssIcon size={32} />
          </IconLink>
        </div>

        <div className="text-secondary relative flex w-24 items-center xl:mt-20 xl:w-32">
          {/* absolute position so that it doesn't change line-height of social icons */}
          <Signature className="absolute block w-full" />
        </div>
      </div>
    </div>
  );
}

function FooterLink({
  name,
  href,
  reload,
}: {
  name: string;
  href: string;
  reload?: boolean;
}) {
  return (
    <li className="py-1">
      <AnchorOrLink
        prefetch={href.startsWith("http") ? undefined : "intent"}
        href={href}
        className="text-secondary underlined hover:text-team-current focus:text-team-current inline-block whitespace-nowrap text-lg focus:outline-none"
        reload={reload}
      >
        {name}
      </AnchorOrLink>
    </li>
  );
}

function Footer({ image }: { image: ImageBuilder }) {
  const { userInfo } = useRootData();
  const subscribedToNewsletter =
    Boolean(userInfo) ||
    userInfo?.convertKit?.tags.some(
      ({ name }) => name === "Subscribed: general newsletter",
    );
  const featuredImg = (
    <div className="aspect-[4/3]">
      <img
        loading="lazy"
        className="w-full rounded-sm object-contain"
        {...getImgProps(image, {
          widths: [300, 600, 850, 1600, 2550],
          sizes: [
            "(max-width: 639px) 80vw",
            "(min-width: 640px) and (max-width: 1499px) 50vw",
            "(min-width: 1500px) and (max-width: 1620px) 25vw",
            "410px",
          ],
          transformations: {
            resize: {
              aspectRatio: "4:3",
              type: "fit",
            },
          },
        })}
      />
    </div>
  );
  return (
    <footer className="border-t border-gray-200 pb-16 pt-48 dark:border-gray-600">
      <div className="mx-10vw relative">
        <div className="grid-rows-max-content relative mx-auto grid max-w-7xl grid-cols-4 gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          <div className="col-span-full md:col-span-3 xl:row-span-2">
            <AboutSection />
          </div>

          <div className="col-span-full mt-20 md:col-span-5 md:col-start-1 xl:hidden">
            {subscribedToNewsletter ? featuredImg : <NewsletterSection />}
          </div>

          <div className="col-span-2 mt-20 md:col-start-5 md:row-start-1 md:mt-0">
            <ContactSection />
          </div>

          <div className="col-span-2 mt-20 md:col-start-7 md:row-start-1 md:mt-0 xl:col-start-5 xl:row-start-2 xl:mt-16">
            <GeneralSection />
          </div>

          <div className="col-span-full mt-20 md:col-span-2 md:col-start-7 xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:ml-56 xl:mt-0">
            <SitemapSection />
          </div>

          {/*
          Note that the <NewsletterSection /> is rendered twice. The position of this cell changes based on breakpoint.
          When we would move the cell around with css only, the tabIndex won't match the visual order.
         */}
          <div className="col-span-4 col-start-9 row-span-2 row-start-1 mt-0 hidden xl:block">
            <SubscribeSection />
          </div>

          <div className="col-span-full mt-24 text-lg text-gray-500 md:mt-44 dark:text-slate-500">
            <span>Все права защищены</span>{" "}
            <span className="block md:inline">{`© Валерий Гринь${new Date().getFullYear()}`}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
