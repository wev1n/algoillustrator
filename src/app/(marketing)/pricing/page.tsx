import { Badge } from "../../_components/ui/badge";
import { Button } from "../../_components/ui/button";
import { Label } from "../../_components/ui/label";
import { Switch } from "../../_components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../_components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../_components/ui/table";
import { CheckIcon, ChevronDown, MinusIcon } from "lucide-react";
import Footer from "../../_components/footer";
import Navbar from "../../_components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../_components/ui/accordion";

interface PlanFeature {
  type: string;
  features: {
    name: string;
    free: boolean;
    startup: boolean;
    team: boolean;
    enterprise: boolean;
  }[];
}

const planFeatures: PlanFeature[] = [
  {
    type: "Financial data",
    features: [
      {
        name: "Open/High/Low/Close",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "Price-volume difference indicator	",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    type: "On-chain data",
    features: [
      {
        name: "Network growth",
        free: true,
        startup: false,
        team: true,
        enterprise: true,
      },
      {
        name: "Average token age consumed",
        free: true,
        startup: false,
        team: true,
        enterprise: true,
      },
      {
        name: "Exchange flow",
        free: false,
        startup: false,
        team: true,
        enterprise: true,
      },
      {
        name: "Total ERC20 exchange funds flow",
        free: false,
        startup: false,
        team: true,
        enterprise: true,
      },
    ],
  },
  {
    type: "Social data",
    features: [
      {
        name: "Dev activity",
        free: false,
        startup: true,
        team: false,
        enterprise: true,
      },
      {
        name: "Topic search",
        free: true,
        startup: true,
        team: true,
        enterprise: true,
      },
      {
        name: "Relative social dominance",
        free: true,
        startup: true,
        team: false,
        enterprise: true,
      },
    ],
  },
];

const faqs = [
  {
    question: "What is a FAQ?",
    answer:
      "A FAQ is a list of frequently asked questions and answers on a particular topic.",
  },
  {
    question: "What is the purpose of a FAQ?",
    answer:
      "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
  },
  {
    question: "How do I create a FAQ?",
    answer:
      "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
  },
  {
    question: "What are the benefits of a FAQ?",
    answer:
      "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <div className="container py-24 lg:py-32">
          <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Pricing
            </h2>
            <p className="mt-1 text-muted-foreground">
              Whatever your status, our offers evolve according to your needs.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Label htmlFor="payment-schedule" className="me-3">
              Monthly
            </Label>
            <Switch id="payment-schedule" />
            <Label htmlFor="payment-schedule" className="relative ms-3">
              Annual
              <span className="absolute -end-28 -top-10 start-auto">
                <span className="flex items-center">
                  <svg
                    className="-me-6 h-8 w-14"
                    width={45}
                    height={25}
                    viewBox="0 0 45 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                      fill="currentColor"
                      className="text-muted-foreground"
                    />
                  </svg>
                  <Badge className="mt-3 uppercase">Save up to 10%</Badge>
                </span>
              </span>
            </Label>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
            <Card>
              <CardHeader className="pb-2 text-center">
                <CardTitle className="mb-7">Free</CardTitle>
                <span className="text-5xl font-bold">Free</span>
              </CardHeader>
              <CardDescription className="text-center">
                Forever free
              </CardDescription>
              <CardContent>
                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">1 user</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">Plan features</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Product support
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={"outline"}>
                  Sign up
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-primary">
              <CardHeader className="pb-2 text-center">
                <Badge className="mb-3 w-max self-center uppercase">
                  Most popular
                </Badge>
                <CardTitle className="!mb-7">Startup</CardTitle>
                <span className="text-5xl font-bold">$39</span>
              </CardHeader>
              <CardDescription className="mx-auto w-11/12 text-center">
                All the basics for starting a new business
              </CardDescription>
              <CardContent>
                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">2 user</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">Plan features</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Product support
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Sign up</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2 text-center">
                <CardTitle className="mb-7">Team</CardTitle>
                <span className="text-5xl font-bold">$89</span>
              </CardHeader>
              <CardDescription className="mx-auto w-11/12 text-center">
                Everything you need for a growing business
              </CardDescription>
              <CardContent>
                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">5 user</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">Plan features</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Product support
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={"outline"}>
                  Sign up
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2 text-center">
                <CardTitle className="mb-7">Enterprise</CardTitle>
                <span className="text-5xl font-bold">$149</span>
              </CardHeader>
              <CardDescription className="mx-auto w-11/12 text-center">
                Advanced features for scaling your business
              </CardDescription>
              <CardContent>
                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">10 user</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">Plan features</span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Product support
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={"outline"}>
                  Sign up
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-20 lg:mt-32">
            <div className="mb-10 lg:mb-20 lg:text-center">
              <h3 className="flex items-center justify-center text-2xl font-semibold dark:text-primary">
                Compare plans
                <ChevronDown className="ml-2 h-5 w-5" />
              </h3>
            </div>
            <Table className="hidden lg:table">
              <TableHeader>
                <TableRow className="bg-muted hover:bg-muted">
                  <TableHead className="w-3/12 text-primary">Plans</TableHead>
                  <TableHead className="w-2/12 text-center text-lg font-medium text-primary">
                    Free
                  </TableHead>
                  <TableHead className="w-2/12 text-center text-lg font-medium text-primary">
                    Startup
                  </TableHead>
                  <TableHead className="w-2/12 text-center text-lg font-medium text-primary">
                    Team
                  </TableHead>
                  <TableHead className="w-2/12 text-center text-lg font-medium text-primary">
                    Enterprise
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {planFeatures.map((featureType) => (
                  <>
                    <TableRow className="bg-muted/50" key={featureType.type}>
                      <TableCell colSpan={5} className="font-bold">
                        {featureType.type}
                      </TableCell>
                    </TableRow>
                    {featureType.features.map((feature) => (
                      <TableRow
                        key={feature.name}
                        className="text-muted-foreground"
                      >
                        <TableCell>{feature.name}</TableCell>
                        <TableCell>
                          <div className="mx-auto w-min">
                            {feature.free ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="mx-auto w-min">
                            {feature.startup ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="mx-auto w-min">
                            {feature.team ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="mx-auto w-min">
                            {feature.enterprise ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
              </TableBody>
            </Table>

            <div className="space-y-24 lg:hidden">
              <section>
                <div className="mb-4">
                  <h4 className="text-xl font-medium">Free</h4>
                </div>
                <Table>
                  {planFeatures.map((featureType) => (
                    <>
                      <TableRow
                        key={featureType.type}
                        className="bg-muted hover:bg-muted"
                      >
                        <TableCell
                          colSpan={2}
                          className="w-10/12 font-bold text-primary"
                        >
                          {featureType.type}
                        </TableCell>
                      </TableRow>
                      {featureType.features.map((feature) => (
                        <TableRow
                          className="text-muted-foreground"
                          key={feature.name}
                        >
                          <TableCell className="w-11/12">
                            {feature.name}
                          </TableCell>
                          <TableCell className="text-right">
                            {feature.enterprise ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  ))}
                </Table>
              </section>
              <section>
                <div className="mb-4">
                  <h4 className="text-xl font-medium">Startup</h4>
                </div>
                <Table>
                  {planFeatures.map((featureType) => (
                    <>
                      <TableRow
                        key={featureType.type}
                        className="bg-muted hover:bg-muted"
                      >
                        <TableCell
                          colSpan={2}
                          className="w-10/12 font-bold text-primary"
                        >
                          {featureType.type}
                        </TableCell>
                      </TableRow>
                      {featureType.features.map((feature) => (
                        <TableRow
                          className="text-muted-foreground"
                          key={feature.name}
                        >
                          <TableCell className="w-11/12">
                            {feature.name}
                          </TableCell>
                          <TableCell className="text-right">
                            {feature.startup ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  ))}
                </Table>
              </section>
              <section>
                <div className="mb-4">
                  <h4 className="text-xl font-medium">Team</h4>
                </div>
                <Table>
                  {planFeatures.map((featureType) => (
                    <>
                      <TableRow
                        key={featureType.type}
                        className="bg-muted hover:bg-muted"
                      >
                        <TableCell
                          colSpan={2}
                          className="w-10/12 font-bold text-primary"
                        >
                          {featureType.type}
                        </TableCell>
                      </TableRow>
                      {featureType.features.map((feature) => (
                        <TableRow
                          className="text-muted-foreground"
                          key={feature.name}
                        >
                          <TableCell className="w-11/12">
                            {feature.name}
                          </TableCell>
                          <TableCell className="text-right">
                            {feature.team ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  ))}
                </Table>
              </section>
              <section>
                <div className="mb-4">
                  <h4 className="text-xl font-medium">Enterprise</h4>
                </div>
                <Table>
                  {planFeatures.map((featureType) => (
                    <>
                      <TableRow
                        key={featureType.type}
                        className="bg-muted hover:bg-muted"
                      >
                        <TableCell
                          colSpan={2}
                          className="w-10/12 font-bold text-primary"
                        >
                          {featureType.type}
                        </TableCell>
                      </TableRow>
                      {featureType.features.map((feature) => (
                        <TableRow
                          className="text-muted-foreground"
                          key={feature.name}
                        >
                          <TableCell className="w-11/12">
                            {feature.name}
                          </TableCell>
                          <TableCell className="text-right">
                            {feature.enterprise ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  ))}
                </Table>
              </section>
            </div>
          </div>
        </div>

        <section className="flex w-full justify-center pb-32">
          <div className="container">
            <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
              Frequently asked questions
            </h1>
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
