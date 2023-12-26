import Link from "next/link";

import { Grid } from "@/app/components/Grid";
import { H2, H4 } from "@/app/components/Typography";

interface HeaderSectionProps {
  ctaUrl?: string;
  cta?: string;
  as?: React.ElementType;
  title: string;
  subTitle: string;
  className?: string;
}

export function HeaderSection({
  ctaUrl,
  cta,
  title,
  subTitle,
}: HeaderSectionProps) {
  return (
    <Grid>
      <div className="col-span-full pt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col">
        <div className="flex flex-auto flex-col">
          <H2>{title}</H2>
          <H4 variant="secondary" as="p" className="mt-3">
            {subTitle}
          </H4>
        </div>
        {cta && ctaUrl ? (
          <Link className="" href={ctaUrl}>{`${cta} ->`}</Link>
        ) : null}
      </div>
    </Grid>
  );
}
