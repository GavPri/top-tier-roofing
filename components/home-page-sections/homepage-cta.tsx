import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Cta10Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Cta10 = ({
  heading = "Need a Roofing Expert? Get Your Free Quote Today",
  description = "With over 25 years of experience serving London, we provide reliable roofing solutions backed by a 10-year guarantee. No deposit required, and emergency call-outs available.",
  buttons = {
    primary: {
      text: "Get Free Quote",
      url: "/contact",
    },
    secondary: {
      text: "Call Now",
      url: "tel:02012345678",
    },
  },
}: Cta10Props) => {
  return (
    <section className="max-w-4/5 lg:min-w-4/5 mx-auto">
      <div className="container">
        <div className="bg-card flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-card-foreground">
              {heading}
            </h3>
            <p className="text-muted-foreground max-w-xl lg:text-lg">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" asChild>
                <Link href={buttons.secondary.url}>{buttons.secondary.text}</Link>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild variant="default" size="lg">
                <Link href={buttons.primary.url}>{buttons.primary.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta10 };
