import { clsx } from "clsx";
import Link from "next/link";

export function ButtonLink({
  variant = "primary",
  to,
  title,
}: {
  variant: "primary" | "secondary";
  to: string;
  title: string;
}) {
  return (
    <Link
      href={to}
      className={clsx(
        "group relative inline-flex space-x-3 rounded-full px-8 py-4 text-lg font-medium opacity-100 transition focus:outline-none ",
        {
          "text-inverse bg-inverse relative flex h-full w-full items-center justify-center space-x-5 whitespace-nowrap":
            variant === "primary",
          "focus-ring border-secondary bg-primary absolute inset-0 transform border-2  group-hover:border-transparent group-focus:border-transparent":
            variant === "secondary",
        },
      )}
    >
      <div className="relative flex h-full w-full items-center justify-center space-x-5 whitespace-nowrap">
        {title}
      </div>
    </Link>
  );
}