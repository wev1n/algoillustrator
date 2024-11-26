"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./logo";
import { useTheme } from "next-themes";
import { ModeToggle } from "./darkMode/mode-toggle";
import { Separator } from "./ui/separator";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative border-b-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 justify-center">
              <Logo textSize="text-md" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/visualizer"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:text-primary"
              >
                Visualizer
              </Link>
              <Link
                href="/documentation"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:text-primary"
              >
                Documentation
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:text-primary"
              >
                Pricing
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium leading-none text-gray-400 hover:text-primary"
              >
                More
                <ChevronDown className="h-4 w-4" />
                <span className="sr-only">Toggle main menu</span>
              </button>
            </div>
          </div>
          <div className="hidden gap-4 sm:ml-6 sm:flex sm:items-center">
            <ModeToggle />
            <Link href="https://github.com/wev1n/algoillustrator">
              <Image
                src={
                  theme === "dark"
                    ? "/images/github-color.png"
                    : "/images/github.png"
                }
                width={25}
                height={25}
                alt="GitHub"
              />
              <span className="sr-only">GitHub</span>
            </Link>
            <Separator orientation="vertical" className="mx-2 h-8" />
            <Link href="/login">
              <Button className="ml-4">Login</Button>
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 z-10" ref={menuRef}>
          <div className="overflow-hidden rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-6 border-b-2 border-t-2 bg-background px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-foreground">
                      Page group one
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {["Page One", "Page Two", "Page Three", "Page Four"].map(
                        (page, index) => (
                          <li key={index}>
                            <Link
                              href="#"
                              className="text-base text-muted-foreground hover:text-foreground"
                            >
                              {page}
                            </Link>
                            <p className="mt-1 text-sm text-muted-foreground">
                              Lorem ipsum dolor sit amet consectetur elit
                            </p>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground">
                      Page group two
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {[
                        "Page Five",
                        "Page Six",
                        "Page Seven",
                        "Page Eight",
                      ].map((page, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="text-base text-muted-foreground hover:text-foreground"
                          >
                            {page}
                          </Link>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur elit
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-5">
                <h3 className="text-sm font-medium text-foreground">
                  Featured from Blog
                </h3>
                <ul className="mt-4 space-y-4">
                  {["Article Title", "Article Title"].map((article, index) => (
                    <li key={index} className="mt-4">
                      <Link
                        href="#"
                        className="text-base font-medium text-foreground hover:text-primary"
                      >
                        {article}
                      </Link>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                      <Link
                        href="#"
                        className="mt-2 text-sm font-medium text-primary hover:text-primary/80"
                      >
                        Read more
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 text-sm">
                  <Link
                    href="/blog"
                    className="font-medium text-primary hover:text-primary/80"
                  >
                    See all articles <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
