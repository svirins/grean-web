import Link from "next/link";

export function Tag({ slug, title }: { slug: string; title: string }) {
  return (
    <Link
      href={`/blog/tag/${slug}`}
      className="text-secondary focus-ring bg-gray-50 relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6 py-3 opacity-100 transition dark:bg-gray-800"
    >
      {`${title}`}
    </Link>
  );
}
