"use client";
import useLightbox from "@/app/lib/useLightbox";

const slides = Array.from({ length: 8 }, (_, i) => i + 1).map((i) => ({
  src: `certs/cert${i}.jpg`,
  alt: `Сертификат ${i}`,
  width: 720,
  height: 1008,
}));

export function Certificates() {
  const { openLightbox, renderLightbox } = useLightbox();
  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className="text-inverse bg-inverse w-128 relative mx-auto h-full whitespace-nowrap rounded-full px-8 py-4 text-lg transition focus:outline-none"
      >
        Мои дипломы и сертификаты
      </button>
      {renderLightbox({ slides })}
    </>
  );
}
