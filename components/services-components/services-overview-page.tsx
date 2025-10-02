"use client";

import {
  ArrowRight,
  CheckCircle,
  Home,
  Hammer,
  Droplets,
  Sun,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Services10 = () => {
  const services = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Flat Roofing",
      description:
        "Expert flat roofing solutions for residential and commercial properties. We use premium materials and proven techniques to ensure long-lasting, weatherproof results.",
      items: [
        "EPDM Rubber Roofing",
        "GRP Fibreglass Roofing",
        "Felt Roofing Systems",
        "Flat Roof Repairs & Maintenance",
      ],
      deliverables: [
        "10-Year Guarantee",
        "Material Warranty",
        "Completion Certificate",
      ],
      duration: "1-3 days",
      price: "Free Quote Available",
      featured: true,
      url: "flat-roofing",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "New Roof Installation",
      description:
        "Complete roof replacement services using high-quality materials. Our experienced team ensures your new roof is built to last with meticulous attention to detail.",
      items: [
        "Slate & Tile Roofing",
        "Pitched Roof Installation",
        "Full Roof Replacement",
        "Structural Assessment",
      ],
      deliverables: [
        "10-Year Workmanship Guarantee",
        "Building Regulations Compliance",
        "Insurance Documentation",
      ],
      duration: "3-7 days",
      price: "Free Quote Available",
      featured: true,
      url: "new-roof-installation",
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      title: "Roof Repairs",
      description:
        "Fast, reliable roof repair services across London. From minor leaks to major storm damage, we respond quickly to protect your property.",
      items: [
        "Emergency Leak Repairs",
        "Tile & Slate Replacement",
        "Storm Damage Repairs",
        "Chimney & Flashing Repairs",
      ],
      deliverables: [
        "Same-Day Emergency Service",
        "2-Year Repair Warranty",
        "Photo Documentation",
      ],
      duration: "Same-day available",
      price: "No Call-Out Charges",
      featured: false,
      url: "roof-repairs",
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Skylight Installation",
      description:
        "Professional skylight and roof window installation to bring natural light into your home. We install all major brands with full waterproofing guarantees.",
      items: [
        "VELUX Window Installation",
        "Flat Roof Skylights",
        "Sun Tunnel Installation",
        "Waterproofing & Flashing",
      ],
      deliverables: [
        "Manufacturer Warranty",
        "Building Regs Approval",
        "Weatherproof Installation",
      ],
      duration: "1-2 days",
      price: "Free Quote Available",
      featured: false,
      url: "sky-light-installation",
    },
  ];

  return (
    <section className="bg-muted/30 my-4 md:my-8 p-8 rounded-2xl shadow-accent-foreground shadow-2xl">
      <div className="container ">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="space-y-4 text-center">
            <Badge variant="outline" className="bg-background text-primary shadow-2xl ">
              Our Services
            </Badge>
            <h2 className="text-3xl font-semibold tracking-wide md:text-4xl lg:text-5xl text-card-foreground text-left md:text-center">
              Professional Roofing Services Across London
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl text-left md:text-center">
              Expert roofing solutions with transparent pricing, 10-year guarantees, and no deposit required. Trusted by over 500 London customers since 1995.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mx-auto w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col ${
                  service.featured
                    ? "border-primary/20 bg-background shadow-lg"
                    : "border-border bg-background/80 hover:bg-background backdrop-blur-sm"
                }`}
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`rounded-lg p-3 ${
                          service.featured
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {service.title}
                        </h3>
                        <div className="text-muted-foreground mt-1 text-sm">
                          {service.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-6 leading-relaxed min-h-[80px]">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-4 flex-1">
                    <div className="min-h-[140px]">
                      <h4 className="mb-3 text-sm font-medium text-muted-foreground">
                        What's included:
                      </h4>
                      <ul className="space-y-2 text-primary-foreground">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center gap-3 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 min-h-[100px]">
                      <h4 className="mb-2 text-sm font-medium text-secondary-foreground">
                        Deliverables:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliverable, delivIndex) => (
                          <Badge
                            key={delivIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-border mt-8 border-t pt-6 min-h-[80px]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Learn more about
                        </div>
                        <div className="font-semibold text-foreground text-xs md:text-base">
                          {service.title}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={service.featured ? "default" : "outline"}
                        className="transition-all group-hover:shadow-md"
                        asChild
                      >
                        <a href={`/services/${service.url}`}>
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-xl border p-8 text-left">
            <h3 className="mb-2 text-xl font-semibold text-primary-foreground">
              Need a custom roofing solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer bespoke roofing packages combining multiple services for complete property protection. Emergency call-outs available 24/7.
            </p>
            <Button
              size="lg"
              className="from-primary to-primary/80 bg-gradient-to-r"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services10 };
