import { ButtonLink } from "@/app/components/ButtonLink";
import { YoutubeIcon } from "@/app/components/Icons";
import { H4, H5, H6, Paragraph } from "@/app/components/Typography";
import Link from "next/link";

function ContactSection() {
  return (
    <div>
      <H5 as="div">Контакты</H5>
      <ul className="mt-4">
        <FooterLink name="+375 29 667-23-80 " href="tel:+375296672380" />
        <FooterLink name="vgrean@gmail.com" href="mailto:vgrean@mail.ru" />
        <FooterLink name="Skype: valeri20770" href="skype:valeri20770?call" />
      </ul>
      <div className="text-secondary mt-6 flex items-center justify-between gap-4 xl:flex-col xl:items-start">
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/doktorGrin/"
            className="text-primary hover:text-team-current focus:text-team-current focus:outline-none"
          >
            <YoutubeIcon size={32} />
          </a>
          <a
            href="https://www.facebook.com/doktorGrin/"
            className="text-primary hover:text-team-current focus:text-team-current focus:outline-none"
          >
            <YoutubeIcon size={32} />
          </a>
        </div>
      </div>
      <div className="mt-14 flex flex-col space-y-4">
        <div className="mr-auto flex flex-col gap-4">
          <ButtonLink
            to="/about"
            title="Записатья на консультацию"
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
}
function GeneralSection() {
  return (
    <div>
      <H5 as="div">Информация</H5>
      <ul className="mt-4">
        <FooterLink
          type="internal"
          name="Правила и условия"
          href="/terms-and-conditions"
        />
        <FooterLink
          type="internal"
          name="Договор оферты"
          href="/contract-offer"
        />
        <FooterLink
          type="internal"
          name="Прейскурант и оплата услуг"
          href="/prices-and-payment"
        />
        <FooterLink type="internal" name="Вопросы и ответы" href="/q-and-a" />
        <div className="mt-14 flex flex-col space-y-4">
          <div className="mr-auto flex flex-col gap-4">
            <ButtonLink
              to="/about"
              title="Оплатить on-line"
              variant="primary"
            />
          </div>
        </div>
      </ul>
    </div>
  );
}

function SitemapSection() {
  return (
    <div>
      <H5 as="div">Карта сайта</H5>
      <ul className="mt-4">
        <FooterLink type="internal" name="Главная" href="/" />
        <FooterLink type="internal" name="Помощь" href="/psyhelp" />
        <FooterLink type="internal" name="Направления" href="/therapy" />
        <FooterLink type="internal" name="Обо мне" href="/about" />
        <FooterLink type="internal" name="Статьи" href="/blog" />
        <FooterLink name="Sitemap.xml" href="/sitemap.xml" />
      </ul>
    </div>
  );
}

function InfoSection() {
  return (
    <div>
      <H5 as="div">Legal info</H5>
      Консультант в области охраны психического здоровья, индивидуальный
      предприниматель Валерий Гринь, УНП 192617833 ВНИМАНИЕ: оказываемые услуги
      НЕ являются психотерапией либо психиатрической помощью Cвидетельство гос.
      регистрации 192617833 от 11.03.2016 г. Выдано Минским горисполкомом
      Республика Беларусь, г. Минск, ул. Сухая 7 каб. 6 Время работы: 15:00 -
      20:00, ПН - ПТ
    </div>
  );
}

function FooterLink({
  name,
  href,
  type = "internal",
}: {
  name: string;
  href: string;
  type?: "internal" | "external";
}) {
  return (
    <li className="py-1">
      {type === "internal" ? (
        <Link
          href={href}
          className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
        >
          {name}
        </Link>
      ) : (
        <a
          href={href}
          className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
        >
          {name}
        </a>
      )}
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 pb-16 pt-40 lg:pt-48 dark:border-gray-600">
      <div className="relative mx-10vw">
        <div className="relative mx-auto grid  grid-cols-4  grid-rows-max-content gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          <div className="col-span-2 mt-20 md:col-start-5 md:row-start-1 md:mt-0">
            <ContactSection />
          </div>
          <div className="col-span-full mt-20 md:col-span-2 md:col-start-7 xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:ml-56 xl:mt-0">
            <InfoSection />
          </div>
          <div className="col-span-2 mt-20 md:col-start-7 md:row-start-1 md:mt-0 xl:col-start-5 xl:row-start-2 xl:mt-16">
            <GeneralSection />
          </div>
          <div className="col-span-full mt-20 md:col-span-2 md:col-start-7 xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:ml-56 xl:mt-0">
            <SitemapSection />
          </div>
          <div className="col-span-full mt-24 text-lg text-gray-500 md:mt-44 dark:text-slate-500">
            <span>Все права защищены</span>{" "}
            <span className="block md:inline">{`© Валерий Гринь ${new Date().getFullYear()}`}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
