import { Grid } from "@/app/components/Grid";
import { H2, H4 } from "@/app/components/Typography";
import { ButtonLink } from "@/app/components/Buttons";
import Balancer from "react-wrap-balancer";

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
  className,
}: HeaderSectionProps) {
  return (
    <Grid>
      <div className="col-span-full flex flex-col space-y-10 lg:flex-row lg:items-end lg:justify-between lg:space-y-0">
        <div className="space-y-2 lg:space-y-0">
          <H2 className={className}>
            <Balancer ratio={0.85}>{title}</Balancer>
          </H2>
          <H4 variant="secondary" className="mt-3">
            {subTitle}
          </H4>
        </div>
        {cta && ctaUrl ? (
          <ButtonLink
            to={ctaUrl}
            title={cta}
            variant="secondary"
            className="mr-auto md:mr-0"
          />
        ) : null}
      </div>
    </Grid>
  );
}
