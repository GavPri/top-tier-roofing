import Link from "next/link";
import { Logo } from "../ui/logo";

const sitemap = [
  {
    title: "Navigation",
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Gallery",
        href: "/gallery",
      },
      {
        title: "Testimonials",
        href: "/testimonials",
      },
      {
        title: "FAQs",
        href: "/faqs",
      },
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "Service Areas",
        href: "/service-areas",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        title: "Flat Roofing",
        href: "/services/flat-roofing",
      },
      {
        title: "New Roof Installation",
        href: "/services/new-roof-installation",
      },
      {
        title: "Roof Repairs",
        href: "/services/roof-repairs",
      },
      {
        title: "Skylight Installation",
        href: "/services/sky-light-installation",
      },
      {
        title: "Guttering Services",
        href: "/services/guttering-services",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className="pt-16 max-w-4/5 mx-auto">
      <div className="container">
        <footer>
          <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0">
            <div className="max-w-96">
              <div className="mb-6 flex items-center gap-3">
                <Logo />
              </div>
              <p className="text-muted-foreground text-base font-medium">
                Professional roofing services you can trust.
              </p>
            </div>
            <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
              <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
                {sitemap.map((section) => (
                  <div key={section.title} className="h-fit w-min">
                    <h4 className="mb-6 whitespace-nowrap text-base font-semibold text-primary-foreground">
                      {section.title}
                    </h4>
                    <ul className="text-muted-foreground space-y-3 text-base font-medium">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <a
                            href={link.href}
                            className="hover:text-accent-foreground whitespace-nowrap text-base"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-border flex flex-col items-baseline justify-between gap-8 border-t pt-8 md:flex-row md:gap-16">
            <div className="text-muted-foreground text-xs sm:text-sm">
              &copy; Top Tier Roofing 2025
            </div>
            <div className="text-muted-foreground flex flex-col items-start gap-4 text-xs sm:text-sm md:flex-row lg:items-center">
              <a href="#" className="hover:text-accent-foreground">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-accent-foreground">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
