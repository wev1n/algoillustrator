"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "./_components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./_components/ui/tabs";
import { ArrowRight, Code, Eye, Zap } from "lucide-react";
import { Button } from "./_components/ui/button";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Visualize, Learn, Master Algorithms
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  AlgoIllustrator brings algorithms to life. Interact with
                  visualizations, understand complex concepts, and enhance your
                  problem-solving skills.
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <Eye className="mb-2 h-8 w-8" />
                <h3 className="text-center text-xl font-bold">
                  Interactive Visualizations
                </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Watch algorithms come to life with dynamic, step-by-step
                  visual representations. Adjust inputs and see real-time
                  changes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <Code className="mb-2 h-8 w-8" />
                <h3 className="text-xl font-bold">Code Integration</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  See the code alongside visualizations to understand
                  implementation details.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
                <Zap className="mb-2 h-8 w-8" />
                <h3 className="text-xl font-bold">Performance Analysis</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Compare algorithm efficiency with real-time performance
                  metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Experience AlgoIllustrator
            </h2>
            <Tabs
              defaultValue="visualization"
              className="mx-auto w-full max-w-3xl"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="visualization">Visualization</TabsTrigger>
                <TabsTrigger value="code">Code View</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
              </TabsList>
              <TabsContent value="visualization" className="mt-4">
                <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 dark:bg-gray-800">
                  <Image
                    alt="Algorithm Visualization"
                    className="h-full w-full object-cover"
                    height="400"
                    src="/placeholder.svg"
                    width="600"
                  />
                </div>
              </TabsContent>
              <TabsContent value="code" className="mt-4">
                <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 p-4 dark:bg-gray-800">
                  <pre className="text-sm">
                    <code>
                      {`function quickSort(arr) {
                      if (arr.length <= 1) {
                        return arr;
                      }

                      const pivot = arr[arr.length - 1];
                      const left = [];
                      const right = [];

                      for (let i = 0; i < arr.length - 1; i++) {
                        if (arr[i] < pivot) {
                          left.push(arr[i]);
                        } else {
                          right.push(arr[i]);
                        }
                      }

                      return [...quickSort(left), pivot, ...quickSort(right)];
                    }`}
                    </code>
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="analysis" className="mt-4">
                <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 p-4 dark:bg-gray-800">
                  <h3 className="mb-2 text-lg font-bold">
                    Quick Sort Analysis
                  </h3>
                  <ul className="list-inside list-disc space-y-2">
                    <li>Average Time Complexity: O(n log n)</li>
                    <li>Worst Case Time Complexity: O(n²)</li>
                    <li>Space Complexity: O(log n)</li>
                    <li>Stability: Not stable</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-8 text-center">
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                The code above is just an example. To experience more, check out
                our full visualizer!
              </p>
              <Button asChild>
                <Link href="/visualizer">Try Our Visualizer</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Master Algorithms?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Join thousands of students and professionals who are enhancing
                  their algorithmic thinking with AlgoIllustrator.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
