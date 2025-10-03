"use client";

import type { LucideIcon } from "lucide-react";
import { Home, Wrench, HardHat, Menu, Droplets, Sun, X } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { ThemeToggleSwitch } from "../mode-toggle";


interface Service {
  title: string;
  href: string;
  icon: LucideIcon;
}

const SERVICES: Service[] = [
  {
    title: "Flat Roofing",
    href: "/services/flat-roofing",
    icon: Home,
  },
  {
    title: "New Roof Installation",
    href: "/services/new-roof-installation",
    icon: HardHat,
  },
  {
    title: "Roof Repairs",
    href: "/services/roof-repairs",
    icon: Wrench,
  },
  {
    title: "Sky Light Installation",
    href: "/services/sky-light-installation",
    icon: Sun,
  },
  {
    title: "Guttering Services",
    href: "/services/guttering-services",
    icon: Droplets,
  },
];

const Navbar7 = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-background sticky inset-x-0 top-0 z-20 rounded-b-2xl">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <NavigationMenu className="min-w-full">
          <div className="flex w-full items-center justify-between gap-12 py-4">
            <Logo />

            <NavigationMenuList className="hidden lg:flex">
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                  <Button variant="ghost">Home</Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[400px] p-4 right-0">
                  <div className="grid gap-3">
                    {SERVICES.map((service, index) => (
                      <NavigationMenuLink
                        key={index}
                        href={service.href}
                        className="group flex flex-row items-center hover:bg-muted rounded-lg p-2"
                      >
                        <div className="bg-muted mr-3 rounded-lg p-2 shadow-sm">
                          <service.icon className="text-muted-foreground fade-in group-hover:text-foreground size-5 transition-all" />
                        </div>
                        <div className="text-sm font-medium">
                          {service.title}
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about">
                  <Button variant="ghost">About Us</Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/gallery">
                  <Button variant="ghost">Gallery</Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/testimonials">
                  <Button variant="ghost">Testimonials</Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/faqs">
                  <Button variant="ghost">FAQs</Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/service-areas">
                  <Button variant="ghost">Service Areas</Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <ThemeToggleSwitch/>
            </NavigationMenuList>
            <div className="hidden items-center gap-4 lg:flex">
              <Button asChild>
                <a href="/contact">Contact</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 lg:hidden">
              <Button
                className="text-primary border-border"
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu (Root) */}
          {open && (
            <div className="border-border bg-background absolute inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t lg:hidden text-foreground">
              <a
                href="/"
                onClick={() => setOpen(false)}
                className="w-full border-b-2 border-border px-2 py-4 text-left text-sm font-medium"
              >
                Home
              </a>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="services"
                  className="border-b-2 border-dashed"
                >
                  <AccordionTrigger className="px-2 py-4 text-left hover:no-underline border-b-2 border-border text-foreground">
                    Services
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pb-4">
                    <div className="space-y-3 text-foreground">
                      {SERVICES.map((service, index) => (
                        <a
                          key={index}
                          href={service.href}
                          onClick={() => setOpen(false)}
                          className="hover:bg-muted group flex items-center gap-4 rounded-lg p-2"
                        >
                          <div className="bg-muted rounded-lg p-2 shadow-sm">
                            <service.icon className="text-muted-foreground group-hover:text-foreground size-4 transition-all" />
                          </div>
                          <div className="flex-1">
                            <div className="text-foreground text-sm font-medium">
                              {service.title}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="w-full border-b-1 border-border px-2 py-4 text-left text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                onClick={() => setOpen(false)}
                className="w-full border-b-2 border-border  px-2 py-4 text-left text-sm font-medium"
              >
                Gallery
              </Link>
              <Link
                href="/testimonials"
                onClick={() => setOpen(false)}
                className="w-full border-b-2 border-border  px-2 py-4 text-left text-sm font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="/faqs"
                onClick={() => setOpen(false)}
                className="w-full border-b-2 border-border px-2 py-4 text-left text-sm font-medium"
              >
                FAQs
              </Link>
              <Link
                href="/service-areas"
                onClick={() => setOpen(false)}
                className="w-full border-b-2 border-border px-2 py-4 text-left text-sm font-medium"
              >
                Service Area
              </Link>
              <ThemeToggleSwitch/>
              <div className="mx-8 mb-16 mt-auto flex flex-col gap-4 py-12">
                <Button className="relative" size="lg" asChild>
                  <a href="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </a>
                </Button>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar7 };
