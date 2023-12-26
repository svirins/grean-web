"use client";
import { Button } from "@/app/components/Button";

export function SubscribeSection() {
  const submitAction = () => {
    () => console.log("submitted!");
  };
  return (
    <section
      id="suscribeSection"
      className="banner relative flex h-[610px] items-center justify-center md:h-[510px]"
    >
      <div className="flex flex-col p-3 md:p-[80px]">
        <h4 className="text-primary mb-16 text-center">
          онлайн -форма прямо здесь | телефон +email +кнопка
        </h4>
        <Button className="mx-auto px-6 py-3" onClick={submitAction}>
          Записаться
        </Button>
      </div>
    </section>
  );
}
