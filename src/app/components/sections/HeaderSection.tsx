import { Grid } from "@/app/components/Grid";
import { H2, H4 } from "@/app/components/Typography";
import { ButtonLink } from "@/app/components/ButtonLink";

interface HeaderSectionProps {
  ctaUrl?: string;
  cta?: string;
  as?: React.ElementType;
  title: string;
  subTitle?: string;
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
      <div className="col-span-full flex flex-col space-y-10 lg:flex-row lg:items-end lg:justify-between lg:space-y-0">
        <div className="space-y-2 lg:space-y-0">
          <H2>{title}</H2>
          <H4 variant="secondary" as="p" className="mt-3">
            {subTitle}
          </H4>
        </div>
        {cta && ctaUrl ? (
          <ButtonLink to={ctaUrl} title={cta} variant="secondary" />
        ) : null}
      </div>
    </Grid>
  );
}
