import Link from "next/link";
import { Input } from "./ui/input";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "./logo";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full border-t px-8 py-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1.5fr,1fr,1fr,1fr] gap-16">
        <div className="space-y-6">
          <Logo textSize="text-2xl" />
          <div className="space-y-4">
            <p className="">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <form className="flex gap-2">
              <Input
                placeholder="Enter your email here..."
                type="email"
                className="rounded-none border border-gray-300 bg-transparent focus:border-gray-400 focus:ring-0"
              />
              <Button
                type="submit"
                className="border border-gray-300 px-6 py-2 transition-colors hover:border-gray-400"
              >
                Join
              </Button>
            </form>
            <p className="text-xs text-gray-600">
              By subscribing, you consent to our{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>{" "}
              and agree to receive updates.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold">Resources</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="#" className="text-sm hover:underline">
              Documentation
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Blog Posts
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Case Studies
            </Link>
            <Link href="#" className="text-sm hover:underline">
              FAQs
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Support
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold">Connect</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="#" className="text-sm hover:underline">
              Contact Us
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Community
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Events
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Webinars
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Newsletter
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold">Stay Connected</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="#"
              className="flex items-center gap-3 text-sm hover:underline"
            >
              <Facebook className="size-4" />
              Facebook
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-sm hover:underline"
            >
              <Instagram className="size-4" />
              Instagram
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-sm hover:underline"
            >
              <Twitter className="size-4" />X
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-sm hover:underline"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-sm hover:underline"
            >
              <Youtube className="size-4" />
              YouTube
            </Link>
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1400px] items-center justify-between border-t pt-6">
        <p className="text-sm text-gray-600">
          © 2024 AlgoIllustrator. All rights reserved.
        </p>
        <nav className="flex gap-6">
          <Link href="#" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:underline">
            Cookie Settings
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
