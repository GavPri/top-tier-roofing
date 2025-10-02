import { Hero21 } from "@/components/home-page-sections/hero-section";
import { Cta10 } from "@/components/home-page-sections/homepage-cta";
import { Logos2 } from "@/components/home-page-sections/homepage-trust-banners";
import { Services11 } from "@/components/home-page-sections/homepage-services";
import { Testimonial6 } from "@/components/home-page-sections/homepage-testimonials";

export default function Home() {
  return (
    <div className="bg-background flex flex-col items-start justify-evenly w-screen gap-20">
      <Hero21 />
      <Testimonial6 />
      <Logos2 />
      <Services11 />
      <Cta10/>
    </div>
  );
}
