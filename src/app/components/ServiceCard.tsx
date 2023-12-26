import { type SanityAssetExtended } from "@/app/lib/sanity";
import { CoverImage } from "@/app/components/CoverImage";
import Link from "next/link";
import { H4, H5, Paragraph } from "@/app/components/Typography";

export function ServiceCard({
  title,
  coverImage,
  description,
  link,
}: {
  title: string;
  coverImage: SanityAssetExtended;
  description: string;
  link: string;
}) {
  return (
    <div className="relative w-full">
      <Link
        className="group peer relative block w-full focus:outline-none"
        href={link}
      >
        <H4 as="h4" className="mb-8 mt-4">
          {title}
        </H4>
        <CoverImage image={coverImage} link={link} priority={false} />
        <Paragraph>{description}</Paragraph>
      </Link>
    </div>
  );
}
