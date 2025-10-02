import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Islington",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content:
      "Top Tier Roofing replaced our entire roof last month and we couldn't be happier. The team was professional, punctual, and left our property spotless. The 10-year guarantee gives us complete peace of mind.",
  },
  {
    name: "David Thompson",
    role: "Property Manager, Camden",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content:
      "We've used Top Tier Roofing for emergency repairs on several of our properties. They respond quickly, quote fairly, and their work is always top quality. They're now our go-to roofers for all our buildings.",
  },
  {
    name: "Emma Richardson",
    role: "Homeowner, Hackney",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "From the free estimate to the final inspection, everything was handled brilliantly. They installed our new skylights and repaired our flat roof. No deposit required made it easy to get started. Highly recommend!",
  },
  {
    name: "Emma Richardson",
    role: "Homeowner, Hackney",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content:
      "From the free estimate to the final inspection, everything was handled brilliantly. They installed our new skylights and repaired our flat roof. No deposit required made it easy to get started. Highly recommend!",
  },
];

const Testimonial6 = () => {
  return (
    <section className="max-w-4/5 mx-auto">
      <div className="container">
        <Carousel className="w-full">
          <div className="mb-8 flex justify-between px-1 lg:mb-12">
            <h2 className="text-2xl font-semibold lg:text-5xl text-foreground">
              Why London Loves Top Tier Roofing
            </h2>
            <div className="flex items-center space-x-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
          <CarouselContent>
            {testimonials.map((testimonial, idx) => (
              <CarouselItem
                key={idx}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <div className="flex h-full flex-col justify-between rounded-lg border p-6 bg-background shadow-2xl">
                    <q className="leading-7 text-foreground/70">
                      {testimonial.content}
                    </q>
                    <div className="mt-6 flex gap-4 leading-5">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium text-card-foreground">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Testimonial6 };
