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
        <FooterLink name="Записатья на консультацию" href="" />
      </ul>
      <div className="text-secondary mt-6 flex items-center justify-between gap-4 xl:flex-col xl:items-start">
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/doktorGrin/"
            className="text-primary hover:text-team-current focus:text-team-current focus:outline-none"
          >
            <YoutubeIcon size={48} />
          </a>
          <a
            href="https://www.facebook.com/doktorGrin/"
            className="text-primary hover:text-team-current focus:text-team-current focus:outline-none"
          >
            <YoutubeIcon size={48} />
          </a>
        </div>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div>
      <H5 as="div">Legal info</H5>
      <Paragraph>
        Консультант в области охраны психического здоровья, индивидуальный
        предприниматель Валерий Гринь, УНП 192617833
      </Paragraph>
      <Paragraph>
        ВНИМАНИЕ: оказываемые услуги НЕ являются психотерапией либо
        психиатрической помощью
      </Paragraph>
      <Paragraph>
        Cвидетельство гос. регистрации 192617833 от 11.03.2016 г. Выдано Минским
        горисполкомом Республика Беларусь,
      </Paragraph>
      <Paragraph>
        г. Минск, ул. Сухая 7 каб. 6 Время работы: 15:00 - 20:00, ПН - ПТ
      </Paragraph>
      <Paragraph>Время работы: 15:00 - 20:00, ПН - ПТ</Paragraph>
    </div>
  );
}

function GeneralSection() {
  return (
    <div>
      <H5 as="div">Информация</H5>
      <ul className="mt-4">
        <FooterLink type="internal" name="Вопросы и ответы" href="/q-and-a" />
        <FooterLink
          type="internal"
          name="Правила и условия"
          href="/terms-and-conditions"
        />
        <FooterLink
          type="external"
          name="Договор оферты"
          href="/grean_offer.pdf"
        />
        <FooterLink
          type="internal"
          name="Стоимость услуг и оплата on-line"
          href="/prices-and-payment"
        />
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

export function Footer() {
  return (
    <footer className="border-t border-gray-200 pb-16 pt-40 lg:pt-48 dark:border-gray-600">
      <div className="relative mx-10vw">
        <div className="relative mx-auto grid max-w-7xl grid-cols-4 gap-x-4 gap-y-8 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="col-span-4 mt-20 md:mt-0">
            <ContactSection />
          </div>
          <div className="col-span-4 mt-20 md:mt-0">
            <GeneralSection />
          </div>
          <div className="col-span-4 mt-20 md:mt-0">
            <SitemapSection />
          </div>
          <div className="col-span-4 mt-20 md:mt-0">
            <InfoSection />
          </div>
          {/* TODO: Place payment systems here  */}
          <div className="col-span-full mt-24 text-lg text-gray-600 md:mt-44 dark:text-slate-500">
            <span>Все права защищены</span>{" "}
            <span className="block md:inline">{`© Валерий Гринь ${new Date().getFullYear()}`}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
