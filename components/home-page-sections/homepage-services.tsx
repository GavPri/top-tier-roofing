import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type ServiceProps = {
  title: string;
  image: string;
  url: string;
};

const services: ServiceProps[] = [
  {
    title: "Flat Roofing",
    image: "/images/flat-roof-services.jpg",
    url: "/flat-roofing",
  },
  {
    title: "New Roof Installation",
    image: "/images/new-roof-services.jpg",
    url: "/new-roof-installation",
  },
];

const Services11 = () => {
  return (
    <section className="max-w-4/5 lg:min-w-4/5 mx-auto">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h2 className="text-foreground mb-4 text-4xl font-medium md:text-6xl">
              Our Services
            </h2>
            <p className="text-muted-foreground w-72 text-base tracking-tight">
              From flat roofing to complete roof replacements, we provide expert
              roofing services across London. With 25+ years of experience, we
              deliver quality workmanship that stands the test of time.
            </p>
          </div>
          <Button variant="secondary" className="mt-8 w-fit" asChild>
            <Link href={"/services"}>
              View all services <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.url}
              className="group block overflow-hidden rounded-xl hover:opacity-80 transition-opacity"
            >
              <Card className="bg-muted relative aspect-[3/4] overflow-hidden border-none p-0">
                <Image
                  loading="lazy"
                  fill
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <CardContent className="absolute inset-0 flex flex-col justify-start p-6">
                  <div className="pr-4 font-semibold text-white">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-110" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services11 };
