import {
  Menu,
  MenuButton,
  MenuItems,
  MenuLink,
  MenuPopover,
  useMenuButtonContext,
} from "@reach/menu-button";
import { clsx } from "clsx";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useReducedMotion,
} from "framer-motion";
import * as React from "react";
import { useEffect } from "react";
import { kodyProfiles } from "~/images.tsx";
import { useTeam } from "~/utils/team-provider.tsx";
import { useElementState } from "./hooks/use-element-state.tsx";
import { LaptopIcon, MoonIcon, SunIcon } from "./icons.tsx";
import { TeamCircle } from "./team-circle.tsx";
import { useRequestInfo } from "~/utils/request-info.ts";

const iconTransformOrigin = { transformOrigin: "50% 100px" };
function DarkModeToggle({
  variant = "icon",
}: {
  variant?: "icon" | "labelled";
}) {
  const requestInfo = useRequestInfo();
  const fetcher = useFetcher({ key: THEME_FETCHER_KEY });

  const optimisticMode = useOptimisticThemeMode();
  const mode = optimisticMode ?? requestInfo.userPrefs.theme ?? "system";
  const nextMode =
    mode === "system" ? "light" : mode === "light" ? "dark" : "system";

  const iconSpanClassName =
    "absolute inset-0 transform transition-transform duration-700 motion-reduce:duration-[0s]";
  return (
    <fetcher.Form method="POST" action="/action/set-theme">
      <input type="hidden" name="theme" value={nextMode} />

      <button
        type="submit"
        className={clsx(
          "border-secondary hover:border-primary focus:border-primary inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none",
          {
            "w-14": variant === "icon",
            "px-8": variant === "labelled",
          },
        )}
      >
        {/* note that the duration is longer then the one on body, controlling the bg-color */}
        <div className="relative h-8 w-8">
          <span
            className={clsx(
              iconSpanClassName,
              mode === "dark" ? "rotate-0" : "rotate-90",
            )}
            style={iconTransformOrigin}
          >
            <MoonIcon />
          </span>
          <span
            className={clsx(
              iconSpanClassName,
              mode === "light" ? "rotate-0" : "-rotate-90",
            )}
            style={iconTransformOrigin}
          >
            <SunIcon />
          </span>

          <span
            className={clsx(
              iconSpanClassName,
              mode === "system" ? "translate-y-0" : "translate-y-10",
            )}
            style={iconTransformOrigin}
          >
            <LaptopIcon size={32} />
          </span>
        </div>
        <span className={clsx("ml-4", { "sr-only": variant === "icon" })}>
          {`Switch to ${
            nextMode === "system"
              ? "system"
              : nextMode === "light"
                ? "light"
                : "dark"
          } mode`}
        </span>
      </button>
    </fetcher.Form>
  );
}

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
            <MenuItems className="border-none bg-transparent p-0">
              {MOBILE_LINKS.map((link) => (
                <MenuLink
                  className="hover:bg-secondary focus:bg-secondary text-primary border-b border-gray-200 px-5vw py-9 hover:text-team-current dark:border-gray-600"
                  key={link.to}
                  as={Link}
                  to={link.to}
                >
                  {link.name}
                </MenuLink>
              ))}
              <div className="noscript-hidden py-9 text-center">
                <DarkModeToggle variant="labelled" />
              </div>
            </MenuItems>
          </motion.div>
        </MenuPopover>
      ) : null}
    </AnimatePresence>
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

// Timing durations used to control the speed of the team ring in the profile button.
// Time is seconds per full rotation
const durations = {
  initial: 40,
  hover: 3,
  focus: 3,
  active: 0.25,
};
