import { clsx } from "clsx";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export function Grid({ children, className, featured }: GridProps) {
  return (
    <div
      className={clsx("relative w-full", {
        "py-10 md:py-24 lg:pb-40 lg:pt-36": featured,
      })}
    >
      {featured ? (
        <div className="absolute inset-0 -mx-5vw">
          <div className="bg-secondary mx-auto h-full w-full max-w-8xl rounded-lg" />
        </div>
      ) : null}

      <div
        className={clsx(
          "relative mx-auto grid max-w-7xl grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
