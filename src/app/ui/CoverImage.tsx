import {
  SanityAssetExtended,
  createRemoteImageAttributes,
} from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

interface CoverImageProps {
  image: SanityAssetExtended;
  link?: string;
  priority: boolean;
}

export function CoverImage(props: CoverImageProps) {
  const { image, priority = false, link } = props;
  const { width, height, img: src } = createRemoteImageAttributes(image);
  const condidionalImage = link ? (
    <Link href={`/blog/${link}`}>
      <Image
        className="aspect-[16/9] w-full rounded-2xl bg-gray-50 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        sizes="100vw"
        width={width}
        height={height}
        alt={`Cover Image for ${image.alt}`}
        src={src}
        priority={priority}
        // placeholder="blur"
        blurDataURL={image.lqip}
      />
    </Link>
  ) : (
    <Image
      className="aspect-[16/9] w-full rounded-2xl bg-gray-50 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
      sizes="100vw"
      width={width}
      height={height}
      alt={`Cover Image for ${image.alt}`}
      src={src}
      priority={priority}
      // placeholder="blur"
      blurDataURL={image.lqip}
    />
  );
  return condidionalImage;
}
