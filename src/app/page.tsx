"use client";

import Image from "next/image";
import { ArrowRight, DollarSign, KeyRound, TimerIcon } from "lucide-react";
import { Button } from "./_components/ui/button";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import TestimonialCard from "./_components/testimonial-card";
import { type Testimonial } from "~/types";

// plejd internationalization: https://www.plejd.com/sv-se

const slideAnimation = `
  @keyframes slideLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes slideRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
`;

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    image: "/images/avatar.png",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    image: "/images/avatar.png",
  },
  {
    name: "John Smith",
    role: "COO",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    image: "/images/avatar.png",
  },
  {
    name: "Gordon Doe",
    role: "Developer",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    image: "/images/avatar.png",
  },
  {
    name: "John Doe",
    role: "CEO & Founder",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    image: "/images/avatar.png",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
    image: "/images/avatar.png",
  },
];

export default function HomePage() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex w-full flex-col items-center justify-center">
        <section>
          <div className="container">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
                <p>Newly Released</p>
                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                  Visualize Algorithms and Data Structures with Ease
                </h1>
                <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                  Welcome to our website, where you can easily visualize
                  algorithms and data structures. Whether you are a student,
                  developer, or simply curious, we provide a user-friendly
                  platform to explore and understand these concepts.
                </p>
                <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button className="w-full sm:w-auto">
                    <ArrowRight className="mr-2 size-4" />
                    Sign Up
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[3/4]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 800 800"
                    className="size-full text-muted-foreground opacity-20"
                  >
                    {Array.from(Array(720).keys()).map((dot, index, array) => {
                      const angle = 0.2 * index;
                      const scalar = 40 + index * (360 / array.length);
                      const x = Math.round(Math.cos(angle) * scalar);
                      const y = Math.round(Math.sin(angle) * scalar);

                      return (
                        <circle
                          key={index}
                          r={(3 * index) / array.length}
                          cx={400 + x}
                          cy={400 + y}
                          opacity={1 - Math.sin(angle)}
                        />
                      );
                    })}
                  </svg>
                </div>
                <div className="absolute left-[8%] top-[10%] flex aspect-[5/6] w-[38%] justify-center rounded-lg border border-border bg-accent"></div>
                <div className="absolute right-[12%] top-[20%] flex aspect-square w-1/5 justify-center rounded-lg border border-border bg-accent"></div>
                <div className="absolute bottom-[24%] right-[24%] flex aspect-[5/6] w-[38%] justify-center rounded-lg border border-border bg-accent"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden py-32">
          <div className="container relative">
            <div className="pointer-events-none absolute inset-0 -top-20 -z-10 mx-auto hidden size-[500px] bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] opacity-25 [background-size:6px_6px] [mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)] lg:block"></div>
            <div className="relative flex justify-between gap-16">
              <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-transparent to-transparent lg:block"></div>

              <div className="w-full max-w-96 shrink-0 justify-between">
                <p className="font-mono text-xs text-muted-foreground">
                  What’s the solution?
                </p>
                <h2 className="mb-3 mt-6 text-3xl font-medium lg:text-4xl">
                  Let Streamline handle the details
                </h2>
                <p className="text-sm text-muted-foreground">
                  Streamline optimizes your workflow from start to finish. It
                  gathers information, generates reports, automates tasks, and
                  delivers results—all in one seamless system.
                </p>
              </div>
              <div className="hidden w-full max-w-3xl shrink-0 lg:block">
                <Image
                  src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                  alt="placeholder"
                  className="max-h-[450px] w-full min-w-[450px] max-w-3xl rounded-lg border object-cover"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="relative mt-8 grid md:grid-cols-3">
              <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                <TimerIcon />
                <div>
                  <h3 className="text-lg font-medium">Maximize efficiency</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Skip the manual tasks and complex setups. With Streamline,
                    you can focus on what matters most while the system handles
                    the rest.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                <DollarSign />
                <div>
                  <h3 className="text-lg font-medium">Optimize resources</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Don’t overspend on unnecessary tools or teams. Keep your
                    operations lean and efficient by automating your workflows
                    with Streamline.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                <KeyRound />
                <div>
                  <h3 className="text-lg font-medium">Simplify operations</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Say goodbye to managing multiple platforms. Streamline takes
                    care of all the heavy lifting, ensuring consistent results
                    with minimal hassle.
                  </p>
                </div>
              </div>
              <div className="absolute -inset-x-4 top-0 h-px bg-input md:hidden"></div>
              <div className="absolute -inset-x-4 top-[-0.5px] row-start-2 h-px bg-input md:hidden"></div>
              <div className="absolute -inset-x-4 top-[-0.5px] row-start-3 h-px bg-input md:hidden"></div>
              <div className="absolute -inset-x-4 bottom-0 row-start-4 h-px bg-input md:hidden"></div>
              <div className="absolute -left-2 -top-2 bottom-0 w-px bg-input md:hidden"></div>
              <div className="absolute -right-2 -top-2 bottom-0 col-start-2 w-px bg-input md:hidden"></div>
              <div className="absolute -inset-x-2 top-0 hidden h-px bg-input md:block"></div>
              <div className="absolute -top-2 bottom-0 left-0 hidden w-px bg-input md:block"></div>
              <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-2 hidden w-px bg-input md:block"></div>
              <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-3 hidden w-px bg-input md:block"></div>
              <div className="absolute -top-2 bottom-0 right-0 hidden w-px bg-input md:block"></div>
            </div>
          </div>
        </section>

        <section className="flex w-full justify-center overflow-hidden py-12 md:py-24 lg:py-32">
          <style dangerouslySetInnerHTML={{ __html: slideAnimation }} />
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet our happy clients
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                All of our 1000+ clients are happy
              </p>
              <Button className="mt-4">Get started for free</Button>
            </div>
            <div className="mt-16 space-y-8">
              <div className="flex animate-[slideLeft_60s_linear_infinite] space-x-4">
                {[...firstRow, ...firstRow].map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    testimonial={testimonial}
                    className="min-w-[300px] md:min-w-[400px]"
                  />
                ))}
              </div>
              <div className="flex animate-[slideRight_60s_linear_infinite] space-x-4">
                {[...secondRow, ...secondRow].map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    testimonial={testimonial}
                    className="min-w-[300px] md:min-w-[400px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container">
            <div className='flex items-center justify-center rounded-2xl border bg-[url("/images/dots.jpg")] bg-cover bg-center px-8 py-20 text-center md:p-20'>
              <div className="mx-auto max-w-screen-md">
                <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
                  Start building your websites faster
                </h1>
                <p className="text-muted-foreground md:text-lg">
                  Try our tools and services to build your website faster. Start
                  with a 14-day free trial. No credit card required. No setup
                  fees. Cancel anytime.
                </p>
                <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
                  <Button size="lg">Get Started</Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
