import Link from "next/link";

export function PostTitle({ title, slug }: { title: string; slug: string }) {
  return (
    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
      <Link href={`/blog/${slug}`}>
        <span className="absolute inset-0" />
        {title}
      </Link>
    </h3>
  );
}
