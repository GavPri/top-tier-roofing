import { ChevronRight, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero21 = () => {
  return (
    <section className="border-b pt-12 mx-8 lg:mx-auto lg:min-w-4/5 bg-card rounded-lg shadow-2xl">
      <div className="container">
        <div className="relative pb-16">
          <div className="absolute inset-x-0 top-0 -z-10 flex h-full w-full items-center justify-start  opacity-100" />
          <Link
            href="#"
            className="mx-auto flex w-fit items-center gap-2 rounded-lg bg-muted p-3 sm:rounded-full sm:py-1 sm:pr-3 sm:pl-1"
          >
            <Badge className="hidden sm:block">25+ Years Experience</Badge>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              Read our customer reviews here
              <ChevronRight className="mt-0.5 size-4 shrink-0" />
            </p>
          </Link>
          <h1 className="pl-4 mx-auto my-5 max-w-5xl text-left text-3xl text-balance md:text-5xl text-card-foreground">
            Trusted Roofers Serving London Since 1995
          </h1>
          <p className="pl-4 mx-auto max-w-3xl text-left text-sm text-muted-foreground md:text-base">
            A family-owned, fully insured roofing company with over 500 happy
            customers. We offer free estimates, a 10-year guarantee, and require
            no deposit. Trading Standards approved with emergency call-outs
            available.
          </p>
          <div className="ml-5 mt-8 flex flex-col md:flex-row items-start justify-center gap-3">
            <Button className="w-full md:w-fit">
              Call Now <ChevronRight className="ml-2 size-4" />
            </Button>
            <Button className="w-full md:w-fit" variant="outline">
              <Play className="mr-2 size-4" />
              Services
            </Button>
          </div>
        </div>
        <div className="rounded-lg border-x border-t px-1 pt-1">
          <Image
            height={300}
            width={500}
            priority
            src="/images/hero-section.jpg"
            alt="black tiles on a roof in London"
            className="max-h-80 w-full rounded-lg object-cover md:max-h-[430px]"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero21 };
