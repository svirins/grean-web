import { ButtonExtLink } from "@/app/components/Buttons";
import { HeaderSection } from "@/app/components/sections/HeaderSection";
import Image from "next/image";
export default async function PricesPage() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      <HeaderSection title="Цены и оплата on-line" subTitle="" />
      <div className="prose mx-auto mt-12 max-w-4xl  break-words  dark:prose-dark">
        <h4 className="mb-4">Оказываемые услуги:</h4>
        <ul>
          <li>Cемейное консультирование;</li>
          <li>
            Консультирование при неврозах, депрессиях, реакциях стресса,
            дезадаптации.;
          </li>
        </ul>
        <p>
          Продолжительность консультации: <strong>45...60</strong> мин.
          Стоимость одной консультации: <strong>70</strong> бел руб. Возможна
          оплата on-line
        </p>
        <h4 className="mb-4">Спопобы on-line оплаты:</h4>
        <Image
          src="/payment-gateways.png"
          alt="Спопобы on-line оплаты"
          className="w-full"
        />
        <hr />
      </div>
      <div className="mx-auto max-w-4xl pb-20">
        <div className="flex flex-col">
          <Image src="/qr1.webp" alt="QR" className="w-96 py-12" />
          <ButtonExtLink
            to="https://ecom.alfabank.by/shortlink/ScpvTFjD"
            title="Оплатить 1 консультацию (70 BYN)"
            variant="secondary"
          />

          <Image src="/qr2.webp" alt="QR" className="w-96 py-12" />
          <ButtonExtLink
            to="https://ecom.alfabank.by/shortlink/KxqbY8hz"
            title="Оплатить произвольную сумму"
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}
