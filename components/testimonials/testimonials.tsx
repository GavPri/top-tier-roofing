import { MapPinHouse, Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: "testimonial-1",
    text: "Top Tier Roofing replaced our entire roof last year. The team was professional, arrived on time every day, and the quality of work is outstanding. A year later and not a single issue. Highly recommend!",
    name: "Michael Chen",
    company: "Homeowner, Hackney",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-2",
    text: "Emergency roof repair on a Sunday evening - they came out within 2 hours and fixed our leak. No call-out charge and very fair pricing. Exceptional service!",
    name: "Jennifer Williams",
    company: "Homeowner, Islington",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
  },
  {
    id: "testimonial-3",
    text: "We've used Top Tier Roofing for three of our rental properties. Always reliable, competitive quotes, and quality workmanship. They're now our go-to roofers for all our buildings.",
    name: "David Thompson",
    company: "Property Manager, Camden",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
  },
  {
    id: "testimonial-4",
    text: "Brilliant service from start to finish. Free quote was detailed and transparent. No hidden costs. The 10-year guarantee gives us complete peace of mind.",
    name: "Sarah Mitchell",
    company: "Homeowner, Greenwich",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
  },
  {
    id: "testimonial-5",
    text: "Had our flat roof replaced with EPDM rubber. The team cleaned up perfectly every day and the finished result looks fantastic. Very impressed with the professionalism.",
    name: "James Patterson",
    company: "Homeowner, Dulwich",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
  },
  {
    id: "testimonial-6",
    text: "After storm damage, we needed urgent repairs. Top Tier responded quickly, provided temporary fixes immediately, and completed permanent repairs within a week. Couldn't ask for better service.",
    name: "Emma Richardson",
    company: "Homeowner, Brixton",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
  },
  {
    id: "testimonial-7",
    text: "They installed three VELUX windows in our loft conversion. Perfect installation, completely watertight, and great value for money. Would definitely use them again.",
    name: "Robert Davies",
    company: "Homeowner, Clapham",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
  {
    id: "testimonial-8",
    text: "25 years in business and it shows. Experienced team who knew exactly what they were doing. Our new slate roof looks beautiful and we had no deposit to pay upfront.",
    name: "Linda Baker",
    company: "Homeowner, Wimbledon",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
  },
  {
    id: "testimonial-9",
    text: "Excellent communication throughout. They explained everything clearly, arrived when they said they would, and finished on schedule. Can't fault them at all.",
    name: "Paul Anderson",
    company: "Homeowner, Lewisham",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
  },
];

const Testimonial11 = () => {
  return (
    <section className="relative p-4 rounded-2xl shadow-secondary-foreground shadow-2xl my-4">
      <div className="container py-4">
        <div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-32">
          <div className="flex flex-1 flex-col items-start text-left">
            <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl text-foreground">
              What Our Customers Say
            </h2>
            <p className="max-w-3xl text-muted-foreground lg:text-xl">
              Don't just take our word for it. See what London homeowners and property managers have to say about our roofing services. Over 500 satisfied customers since 1995.
            </p>
          </div>
          <div className="block shrink-0 flex-row gap-12 sm:flex sm:flex-col lg:flex-row lg:gap-24">
            <div className="mr-8 mb-8 inline-block sm:mr-0 sm:mb-0">
              <svg
                fill="#1877F2"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4 h-6 w-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                </g>
              </svg>
              <div className="flex items-center">
                <div className="mr-4 shrink-0 text-sm font-semibold text-foreground">
                  4.8 / 5
                </div>
                <div className="flex items-center gap-0.5">
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                </div>
              </div>
            </div>
            <div className="mr-8 mb-8 inline-block sm:mr-0 sm:mb-0">
              <svg
                viewBox="-3 0 262 262"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
                className="mb-4 h-6 w-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  ></path>
                </g>
              </svg>
              <div className="flex items-center">
                <div className="mr-4 shrink-0 text-sm font-semibold text-foreground">
                  4.8 / 5
                </div>
                <div className="flex items-center gap-0.5">
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-16 sm:mt-0">
        <div className="w-full columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6 [&>div:nth-child(n+5)]:hidden sm:[&>div:nth-child(n+5)]:inline-block sm:[&>div:nth-child(n+9)]:hidden lg:[&>div:nth-child(n+9)]:inline-block">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mb-4 inline-block w-full rounded-lg border border-border bg-background p-6 lg:mb-6"
            >
              <div className="flex flex-col">
                <p className="mb-4 text-md text-foreground font-serif italic tracking-wide">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-1 md:gap-2">
                  <Avatar className="size-8 md:size-10">
                    <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
                    <AvatarFallback>{testimonial.name}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-xs font-medium text-muted-foreground">{testimonial.name}</p>
                    <p className="flex justify-evenly items-center text-foreground text-sm"><MapPinHouse size={12} className="text-primary"/>London</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 hidden w-full sm:block sm:h-[16.875rem] sm:bg-[linear-gradient(transparent_0%,hsl(var(--accent))_100%)] lg:h-56"></div>
    </section>
  );
};

export { Testimonial11 };
