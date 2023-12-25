import { ITag } from "@/app/lib/sanity";
import { CoverImage } from "@/app/ui/CoverImage";
import { SanityAssetExtended } from "@/app/lib/sanity";
import Link from "next/link";

export function Card({
  title,
  coverImage,
  datePublished,
  description,
  link,
  tags,
}: {
  title: string;
  coverImage: SanityAssetExtended;
  datePublished?: string;
  description: string;
  link: string;
  readingTime?: number;
  tags?: ITag[];
}) {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <CoverImage image={coverImage} link={link} priority={false} />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={datePublished} className="text-gray-500">
            {datePublished}
          </time>
          {tags &&
            tags.length > 0 &&
            tags.map((tag) => (
              <Link
                href={`/blog/tag/${tag.slug}`}
                key={tag.slug}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {`${tag.title}`}
              </Link>
            ))}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={link}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
