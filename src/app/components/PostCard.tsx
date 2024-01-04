import { type ITag, type SanityAssetExtended } from "@/app/lib/sanity";
import { CoverImage } from "@/app/components/CoverImage";
import Link from "next/link";
import { H5 } from "@/app/components/Typography";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { Tag } from "@/app/components/Tag";

export function PostCard({
  title,
  coverImage,
  datePublished,
  readingTime,
  link,
  tags,
}: {
  title: string;
  coverImage: SanityAssetExtended;
  datePublished: string;
  description?: string;
  link: string;
  readingTime: number;
  tags?: ITag[];
}) {
  const date = parse(datePublished, "yyyy-MM-dd", new Date());
  const result = format(date, "PPP", { locale: ru });

  return (
    <div className="relative w-full">
      <Link
        className="group peer relative block w-full focus:outline-none"
        href={link}
      >
        <CoverImage
          image={coverImage}
          link={link}
          priority={false}
          alt={title}
        />
        <div className="text-secondary mb-8 mt-8 text-lg font-medium">
          {`${result} — ${readingTime} мин. чтения`}
        </div>
        <H5 as="h5" className="link mb-8 mt-8">
          {title}
        </H5>
      </Link>
      <div className="col-span-full -mb-4 -mr-4 flex flex-wrap lg:col-span-10">
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => (
            <Tag key={tag.slug} slug={tag.slug} title={tag.title} />
          ))}
      </div>
    </div>
  );
}
