"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "@/assets/svg/close.svg";
import Menubar from "@/assets/svg/menubar.svg";
import { Popover, Transition } from "@headlessui/react";
import { NAV_LINKS } from "@/app/lib/constants";
import { Fragment, useState } from "react";
import classNames from "classnames";
import { isActive } from "@/app/lib/utils";

export function Header() {
  const [siderBar, setSideBar] = useState(false);
  const pathName = usePathname();
  return (
    <header className="bg-white py-4 md:py-3 lg:mb-10">
      <div className="mx-auto max-w-[1440px] px-2 sm:px-4 lg:px-8">
        <Popover className="flex h-auto flex-wrap  items-center justify-between md:h-16 md:flex-nowrap">
          <div className="order-1 flex px-2 md:order-none lg:px-0">
            <div className="flex shrink-0 items-center">
              <Link href="/" className="sm:block">
                <p className="text-2xl font-bold text-black">Dr. Grean</p>
              </Link>
            </div>
          </div>
          {/* NAVIGATION - BIG SCREENS */}
          <nav
            aria-label="Global"
            className="order-3 hidden w-full md:order-none md:flex md:w-auto lg:ml-6 lg:items-center lg:space-x-4"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className={classNames(
                  isActive(item.href, pathName)
                    ? "active-link  font-semibold text-bk-black underline"
                    : "font-medium text-gray-800",
                  "mt-[2px] block px-3 py-2 text-base hover:underline focus:underline md:inline-block",
                )}
              >
                {item.text}
              </Link>
            ))}
          </nav>
          {/* NAVIGATION - SMALL SCREENS */}
          <Transition.Root as={Fragment}>
            <div className="lg:hidden">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay
                  className="fixed inset-0 z-20 bg-black bg-opacity-25"
                  aria-hidden="true"
                />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute right-0 top-0 z-30 w-full max-w-none origin-top transform p-2 transition"
                >
                  <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="pb-2 pt-3">
                      <div className="flex items-center justify-between px-4">
                        <div>
                          <img
                            className="h-auto w-40"
                            src="/logo-text-only.png"
                            alt="Dr. Grean"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Close menu</span>
                            <CloseIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </Transition.Root>
          <div className="order-2 flex px-2 md:order-none md:hidden md:px-0">
            {/* <Menubar onClick={() => setSideBar((value) => !value)} /> */}
          </div>
        </Popover>
      </div>
      {/* <Sidebar open={siderBar} onClose={() => setSideBar((value) => !value)} /> */}
    </header>
  );
}

type SideBarProps = {
  open: boolean;
  onClose: () => void;
};

const Sidebar = (props: SideBarProps) => {
  const { open, onClose } = props;

  return (
    <>
      <div
        className={classNames(
          " fixed right-0 top-0 z-10 h-full  min-h-screen bg-[#0000009e] ease-in-out",
          open ? "w-full" : "w-0 delay-300",
        )}
      />
      <div
        className={classNames(
          "fixed right-0 top-0 z-20 h-full min-h-screen w-full duration-300 ease-in-out",
          open ? "translate-x-0 " : "translate-x-full",
        )}
      >
        <div className="ml-auto min-h-screen w-3/4 bg-white p-4 shadow">
          <div className="mb-3">
            <CloseIcon className="h-6 w-6" onClick={onClose} />
          </div>
          <nav aria-label="Global" className="pb-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="mt-[2px]  block py-2 text-base font-light text-black "
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};