"use client";

import { Camera, LucideIcon, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/breadcrumb";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description?: string;
}

interface ContentSection {
  heading: string;
  paragraphs: string[];
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface Service4Props {
  heroIcon: string;
  heroIconAlt: string;
  title: string;
  serviceItems: ServiceItem[];
  content: ContentSection[];
  breadcrumbs?: BreadcrumbItem[];
}

const Service4 = ({
  title,
  serviceItems,
  content,
  breadcrumbs,
}: Service4Props) => {
  return (
    <section className="py-8 max-w-4/5 lg:min-w-4/5 mx-auto">
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}

      {/* Simple Hero */}
      <div className="h-64 flex justify-between items-center bg-card rounded-2xl shadow-2xl">
        <div className="container">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-4xl text-foreground p-2">
              <span className="italic text-primary mr-4 tracking-wide text-xl lg:text-4xl">
                {title}
              </span>{" "}
              with Top Tier Roofing
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="py-16">
        <div className="container max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Content Section */}
            <div className="lg:col-span-2">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {content.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h2 className="text-foreground text-2xl mb-2">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph, paraIndex) => (
                      <p key={paraIndex} className="text-muted-foreground mb-4 tracking-wide">
                        {paragraph}
                      </p>
                    ))}
                    {sectionIndex === Math.floor(content.length / 2) && (
                      <div className="space-y-3 not-prose">
                        {serviceItems.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-3 mb-6"
                            >
                              <Icon className="text-primary h-5 w-5" />
                              <span className="text-muted-foreground">
                                {service.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-muted/50 rounded-lg p-6 lg:sticky lg:top-24">
                <h3 className="mb-6 text-lg font-semibold text-foreground">
                  Need More Information?
                </h3>
                <div className="space-y-4">
                  <Button className="w-full" asChild>
                    <Link href="/faqs">View FAQs</Link>
                  </Button>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button className="w-full" variant="link" asChild>
                    <Link href="/services">
                      <Undo2/> Back to Services
                    </Link>
                  </Button>
                  <Button className="w-full" variant="link" asChild>
                    <Link href="/gallery">
                      <Camera /> Check Out Our Gallery
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Service4 };
