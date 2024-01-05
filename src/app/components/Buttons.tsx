import { clsx } from "clsx";
import Link from "next/link";

export function ButtonLink({
  variant = "primary",
  to,
  title,
  className,
}: {
  variant: "primary" | "secondary";
  to: string;
  title: string;
  className?: string;
}) {
  return (
    <Link
      href={to}
      className={clsx(
        "group relative inline-flex shrink-0 space-x-3 rounded-full px-8 py-4 text-lg transition focus:outline-none",
        {
          "text-inverse bg-inverse relative flex h-full w-full items-center justify-center space-x-5 whitespace-nowrap":
            variant === "primary",
          "focus-ring border-secondary bg-primary absolute inset-0 transform border-2 text-black group-hover:border-transparent group-focus:border-transparent   dark:text-white":
            variant === "secondary",
        },
        className,
      )}
    >
      <div className="relative flex h-full w-full items-center justify-center space-x-5 whitespace-nowrap">
        {title}
      </div>
    </Link>
  );
}

export function ButtonExtLink({
  variant = "primary",
  to,
  title,
  className,
}: {
  variant: "primary" | "secondary";
  to: string;
  title: string;
  className?: string;
}) {
  return (
    <a
      href={to}
      rel="noopener"
      target="_blank"
      className={clsx(
        "group relative inline-flex shrink-0 space-x-3 rounded-full px-8 py-4 text-lg transition focus:outline-none",
        {
          "text-inverse bg-inverse relative flex h-full w-full items-center justify-center space-x-5 whitespace-nowrap":
            variant === "primary",
          "focus-ring border-secondary bg-primary absolute inset-0 transform border-2 text-black group-hover:border-transparent group-focus:border-transparent   dark:text-white":
            variant === "secondary",
        },
        className,
      )}
    >
      <div className="relative flex h-full w-full items-center justify-center space-x-5 whitespace-nowrap">
        {title}
      </div>
    </a>
  );
}





export function Button({
  title,
  variant = "primary",
  type = "submit",
  disabled = false,
}: {
  title: string;
  variant: "primary" | "secondary";
  type?: "submit" | "reset" | "button";
  disabled: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "group relative inline-flex space-x-3 rounded-full px-8 py-4 text-lg font-medium opacity-100 transition focus:outline-none ",
        {
          "text-inverse bg-inverse w-128 relative flex h-full items-center justify-center space-x-5 whitespace-nowrap":
            variant === "primary",
          "focus-ring border-secondary bg-primary absolute inset-0 transform border-2  group-hover:border-transparent group-focus:border-transparent":
            variant === "secondary",
        },
      )}
    >
      <div className="relative flex h-full w-full items-center justify-center space-x-5 whitespace-nowrap">
        {title}
      </div>
    </button>
  );
}
