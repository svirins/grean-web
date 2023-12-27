import { type ITag, type SanityAssetExtended } from "@/app/lib/sanity";
import { CoverImage } from "@/app/components/CoverImage";
import Link from "next/link";
import { H5 } from "@/app/components/Typography";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";

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
  const result = format(date, "PP", { locale: ru });

  return (
    <div className="relative w-full">
      <Link
        className="group peer relative block w-full focus:outline-none"
        href={link}
      >
        <CoverImage image={coverImage} link={link} priority={false} />
        <div className="text-secondary mt-4 flow-root text-lg font-medium">
          <div className="float-left">{result}</div>
          <div className="float-right">{`${readingTime} мин. чтения`}</div>
        </div>
        <H5 as="h5" className="mb-8 mt-8">
          {title}
        </H5>
      </Link>
      <div className="col-span-full -mb-4 -mr-4 flex flex-wrap lg:col-span-10">
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => (
            <Link
              href={`/blog/tag/${tag.slug}`}
              key={tag.slug}
              className="text-primary bg-secondary focus-ring relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6 py-3 opacity-100 transition"
            >
              {`${tag.title}`}
            </Link>
          ))}
      </div>
    </div>
  );
}
