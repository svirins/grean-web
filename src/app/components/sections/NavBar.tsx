"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/app/lib/constants";
import clsx from "clsx";
import { isActive } from "@/app/lib/utils";

function NavLink({ href, title }: { href: string; title: string }) {
  const pathName = usePathname();
  const isSelected = isActive(href, pathName);
  return (
    <li className="px-5 py-2">
      <Link
        href={href}
        className={clsx(
          "underlined block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none",
          {
            "active text-team-current": isSelected,
            "text-secondary": !isSelected,
          },
        )}
      >
        {title}
      </Link>
    </li>
  );
}

export function NavBar() {
  return (
    <div className="mx-10vw  py-9 lg:py-12">
      <nav className="text-primary mx-auto flex max-w-8xl items-center justify-between">
        <div className="flex justify-between gap-4 align-middle">
          <Link
            href="/"
            className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
          >
            <h1>Dr. Grean</h1>
          </Link>
        </div>

        <ul className="hidden lg:flex">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.text} href={item.href} title={item.text} />
          ))}
        </ul>

        {/* <div className="flex items-center justify-center">
          <div className="noscript-hidden hidden lg:block">
            <DarkModeToggle />
          </div>
        </div> */}
      </nav>
    </div>
  );
}
