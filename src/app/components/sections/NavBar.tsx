"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuLink,
  MenuPopover,
  useMenuButtonContext,
} from "@reach/menu-button";
import { MoonIcon, SunIcon } from "@/app/components/Icons";

import { NAV_LINKS } from "@/app/lib/constants";
import clsx from "clsx";
import { isActive } from "@/app/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { setCookie, getCookie } from "cookies-next";

const iconTransformOrigin = { transformOrigin: "50% 100px" };

function DarkModeToggle() {
  // refactored to the most simple solution due to the screen flickering

  // const [theme, setTheme] = useState(getCookie("theme"));
  // useEffect(() => {
  //   if (theme) {
  //     setCookie(
  //       "theme",
  //       theme,
  //       // window.matchMedia("(prefers-color-scheme: dark)").matches
  //       //   ? "dark"
  //       //   : "light",
  //     );
  //     document.querySelector("html")?.setAttribute("class", theme);
  //   } else {
  //     setTheme(
  //       window.matchMedia("(prefers-color-scheme: dark)").matches
  //         ? "dark"
  //         : "light",
  //     );
  //   }
  // }, [theme]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme) {
      // setCookie(
      //   "theme",
      //   theme,
      //   // window.matchMedia("(prefers-color-scheme: dark)").matches
      //   //   ? "dark"
      //   //   : "light",
      // );
      document.querySelector("html")?.setAttribute("class", theme);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    }
  }, [theme]);

  const iconSpanClassName =
    "absolute inset-0 transform transition-transform duration-700 motion-reduce:duration-[0s]";
  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="border-secondary hover:border-primary focus:border-primary inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div className="relative h-8 w-8">
          <span
            className={clsx(
              iconSpanClassName,
              theme === "dark" ? "rotate-0" : "rotate-90",
            )}
            style={iconTransformOrigin}
          >
            <MoonIcon />
          </span>
          <span
            className={clsx(
              iconSpanClassName,
              theme === "light" ? "rotate-0" : "-rotate-90",
            )}
            style={iconTransformOrigin}
          >
            <SunIcon />
          </span>
        </div>
      </button>
    </>
  );
}

function NavLink({ href, title }: { href: string; title: string }) {
  const pathName = usePathname();
  const isSelected = isActive(href, pathName);
  return (
    <li className="px-5 py-2">
      <Link
        href={href}
        className={clsx(
          "underlined block whitespace-nowrap text-lg font-medium hover:text-black focus:text-black focus:outline-none dark:hover:text-white dark:focus:text-white",
          {
            "active focus:text-black dark:hover:text-white dark:focus:text-white":
              isSelected,
            "text-secondary dark:text-secondary": !isSelected,
          },
        )}
      >
        {title}
      </Link>
    </li>
  );
}

const topVariants = {
  open: { rotate: 45, y: 7, originX: "16px", originY: "10px" },
  closed: { rotate: 0, y: 0, originX: 0, originY: 0 },
};

const centerVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomVariants = {
  open: { rotate: -45, y: -5, originX: "16px", originY: "22px" },
  closed: { rotate: 0, y: 0, originX: 0, originY: 0 },
};

function MobileMenuList() {
  const { isExpanded } = useMenuButtonContext();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isExpanded) {
      // don't use overflow-hidden, as that toggles the scrollbar and causes layout shift
      document.body.classList.add("fixed");
      document.body.classList.add("overflow-y-scroll");
      // alternatively, get bounding box of the menu, and set body height to that.
      document.body.style.height = "100vh";
    } else {
      document.body.classList.remove("fixed");
      document.body.classList.remove("overflow-y-scroll");
      document.body.style.removeProperty("height");
    }
  }, [isExpanded]);

  return (
    <AnimatePresence>
      {isExpanded ? (
        <MenuPopover
          position={(r) => ({
            top: `calc(${Number(r?.top) + Number(r?.height)}px + 2.25rem)`, // 2.25 rem = py-9 from navbar
            left: 0,
            bottom: 0,
            right: 0,
          })}
          style={{ display: "block" }}
          className="z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              ease: "linear",
            }}
            className="bg-primary flex h-full flex-col overflow-y-scroll border-t border-gray-200 pb-12 dark:border-gray-600"
          >
            <MenuItems className="flex flex-col border-none bg-transparent p-0">
              {NAV_LINKS.map((link) => (
                <MenuLink
                  className="hover:bg-secondary focus:bg-secondary text-primary hover:text-navlinks flex border-b border-gray-200 px-5vw py-9 dark:border-gray-600"
                  key={link.href}
                  as={Link}
                  href={link.href}
                >
                  {link.text}
                </MenuLink>
              ))}
              <div className="noscript-hidden py-9 text-center">
                <DarkModeToggle />
              </div>
            </MenuItems>
          </motion.div>
        </MenuPopover>
      ) : null}
    </AnimatePresence>
  );
}

function MobileMenu() {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion ? { duration: 0 } : {};
  return (
    <Menu>
      {({ isExpanded }) => {
        const state = isExpanded ? "open" : "closed";
        return (
          <>
            <MenuButton className="focus:border-primary hover:border-primary border-secondary text-primary inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition focus:outline-none">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  animate={state}
                  variants={topVariants}
                  transition={transition}
                  x="6"
                  y="9"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <motion.rect
                  animate={state}
                  variants={centerVariants}
                  transition={transition}
                  x="6"
                  y="15"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <motion.rect
                  animate={state}
                  variants={bottomVariants}
                  transition={transition}
                  x="6"
                  y="21"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </MenuButton>

            <MobileMenuList />
          </>
        );
      }}
    </Menu>
  );
}

export function NavBar() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-9 md:px-10 lg:py-12">
      <nav className="text-primary flex  items-center justify-between">
        <div className="flex justify-between gap-4 align-middle">
          <Link
            href="/"
            className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
          >
            <h2>Валерий Гринь</h2>
          </Link>
        </div>

        <ul className="hidden lg:flex">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.text} href={item.href} title={item.text} />
          ))}
        </ul>

        <div className="flex items-center justify-center">
          <div className="block lg:hidden">
            <MobileMenu />
          </div>
          <div className="noscript-hidden hidden lg:block">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
