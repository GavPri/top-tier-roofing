import { Hero21 } from "@/components/home-page-sections/hero-section";
import { Cta10 } from "@/components/home-page-sections/homepage-cta";
import { Logos2 } from "@/components/home-page-sections/homepage-trust-banners";
import { Services11 } from "@/components/home-page-sections/homepage-services";
import { Testimonial6 } from "@/components/home-page-sections/homepage-testimonials";

export const metadata = {
  title: 'Professional Roofing Services in London - Top Tier Roofing',
  description: 'Leading provider of roofing services in London. Expert flat roofing, new roof installation, repairs, skylight installation, and guttering. Call +123 456 7890 for a free quote.',
  openGraph: {
    title: 'Top Tier Roofing - Professional Roofing Services in London',
    description: 'Expert roofing services including flat roofing, new installations, repairs, skylights, and guttering in London.',
    images: ['/og-home.jpg'],
  },
}

export default function Home() {
  return (
    <>
      {/* Schema markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Tier Roofing",
            "image": "https://toptierroofing.com/logo.jpg",
            "description": "Professional roofing services in London including flat roofing, new roof installation, roof repairs, skylight installation, and guttering services.",
            "@id": "https://toptierroofing.com",
            "url": "https://toptierroofing.com",
            "telephone": "+123 456 7890",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressCountry": "GB"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          })
        }}
      />

      <div className="bg-background flex flex-col items-start justify-evenly w-screen gap-20">
        <Hero21 />
        <Testimonial6 />
        <Logos2 />
        <Services11 />
        <Cta10/>
      </div>
    </>
  );
}
