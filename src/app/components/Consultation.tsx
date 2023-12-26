"use client";
import clsx from "clsx";
import { Button } from "@/app/components/Button";

import styles from "@/styles/Consultation.module.css";

export function Consultation() {
  const submitAction = () => {
    () => console.log("submitted!");
  };
  return (
    <section
      id="joinUsBanner"
      className={clsx(
        "relative flex h-[610px] items-center justify-center md:h-[510px]",
        styles.banner,
      )}
    >
      <div className="flex flex-col p-3 md:p-[80px]">
        <h1 className="mb-16 text-center text-3xl text-[40px] font-semibold leading-[50.4px] text-bk-white md:text-[64px] md:leading-[72px]">
          Квалифицированный специалист поможет оставить в прошлом Ваши проблемы,
          тревоги и страхи
        </h1>
        <Button className="mx-auto px-6 py-3" onClick={submitAction}>
          Записаться
        </Button>
      </div>
    </section>
  );
}
