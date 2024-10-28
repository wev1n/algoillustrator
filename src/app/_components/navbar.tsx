import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./logo";
import { useTheme } from "next-themes";
import { ModeToggle } from "./darkMode/mode-toggle";
import { Separator } from "./ui/separator";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

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
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:text-primary"
              >
                Visualizer
              </Link>
              <Link
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:text-primary"
              >
                Documentation
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium leading-none text-gray-400 hover:text-primary"
              >
                More
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="hidden gap-4 sm:ml-6 sm:flex sm:items-center">
            <ModeToggle />
            <Link
              href="https://github.com/wev1n/algoillustrator"
              className="text-gray-400 hover:text-gray-500"
            >
              <Image
                src={
                  theme === "dark"
                    ? "/images/github-color.svg"
                    : "/images/github.svg"
                }
                width={25}
                height={25}
                alt="GitHub"
              />
              <span className="sr-only">GitHub</span>
            </Link>
            <Separator orientation="vertical" />
            <Button className="ml-4">Login</Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 z-10">
          <div className="overflow-hidden rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Page group one
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {["Page One", "Page Two", "Page Three", "Page Four"].map(
                        (page, index) => (
                          <li key={index}>
                            <Link
                              href="#"
                              className="text-base text-gray-500 hover:text-gray-900"
                            >
                              {page}
                            </Link>
                            <p className="mt-1 text-sm text-gray-500">
                              Lorem ipsum dolor sit amet consectetur elit
                            </p>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
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
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {page}
                          </Link>
                          <p className="mt-1 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet consectetur elit
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-5">
                <h3 className="text-sm font-medium text-gray-900">
                  Featured from Blog
                </h3>
                <ul className="mt-4 space-y-4">
                  {["Article Title", "Article Title"].map((article, index) => (
                    <li key={index} className="mt-4">
                      <Link
                        href="#"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {article}
                      </Link>
                      <p className="mt-1 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur elit
                      </p>
                      <Link
                        href="#"
                        className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Read more
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 text-sm">
                  <Link
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
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
