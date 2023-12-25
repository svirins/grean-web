import Link from "next/link";
import React from "react";
import Balancer from "react-wrap-balancer";

type Props = {
  title: string;
  link?: string;
  linkTitle?: string;
  subTitle?: string;
};

export default function SectionHeader(props: Props) {
  const { title, link, subTitle, linkTitle = "" } = props;
  return (
    <div className="pb-8 md:pb-8">
      <div className="flex flex-col items-start gap-y-8 md:items-center md:justify-between lg:flex-row">
        <SectionHeading title={title} />
        {linkTitle && (
          <Link
            className="font-sans text-2xl font-bold lg:place-self-end"
            href={link!}
          >
            <div className="flex flex-row items-center gap-4">
              <span className="flex-col text-2xl">{`${linkTitle} →`}</span>
            </div>
          </Link>
        )}
      </div>
      {subTitle && (
        <div className="pt-8 md:pt-9">
          <p className="max-w-4xl text-lg leading-6 first-letter:uppercase md:text-2xl md:leading-[30px]">
            {subTitle}
          </p>
        </div>
      )}
    </div>
  );
}

export const SectionHeading = ({ title }: { title: string }) => {
  return (
    <h2 className="font-sans text-[40px] font-bold leading-[50px]	lg:text-[64px] lg:leading-[72px]">
      <Balancer ratio={0.65}>{title}</Balancer>
    </h2>
  );
};
