// app/services/roof-repair/page.tsx
import { Service4 } from "@/components/services-components/individual-service-page-component";

// Metadata for SEO
export const metadata = {
  title: "Roof Repair London - Emergency & Planned Repairs | Top Tier Roofing",
  description:
    "Expert roof repair services in London. Emergency leak repairs, tile replacement, storm damage, chimney repairs. 24/7 emergency callout. 10-year guarantee. Fast response!",
  keywords: [
    "roof repair London",
    "emergency roof repair",
    "leaking roof repair",
    "roof leak repair London",
    "tile replacement",
    "storm damage repair",
    "chimney repair London",
    "roof maintenance London",
  ],
  openGraph: {
    title: "Professional Roof Repair Services in London | Top Tier Roofing",
    description:
      "Fast, reliable roof repairs across London. Emergency leak repairs, tile replacement, storm damage. 30+ years experience. 10-year guarantee on all repairs.",
    type: "website",
    url: "https://toptierroofing.com/services/roof-repair",
    images: [
      {
        url: "https://toptierroofing.com/images/roof-repair-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Roof Repair Services in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Repair London | Top Tier Roofing",
    description:
      "Emergency roof repairs, leak fixes, tile replacement. 24/7 callout. 10-year guarantee. Free assessment.",
    images: ["https://toptierroofing.com/images/roof-repair-twitter.jpg"],
  },
  alternates: {
    canonical: "https://toptierroofing.com/services/roof-repair",
  },
};

export default function RoofRepairPage() {
  // Structured data for Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roof Repair",
    serviceType: "Roof Repair and Maintenance",
    provider: {
      "@type": "LocalBusiness",
      name: "Top Tier Roofing",
      "@id": "https://toptierroofing.com/#organization",
      url: "https://toptierroofing.com",
      telephone: "+123 456 7890",
      priceRange: "££",
      image: "https://toptierroofing.com/logo.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "Greater London",
        addressCountry: "GB",
      },
    },
    areaServed: {
      "@type": "City",
      name: "London",
      "@id": "https://en.wikipedia.org/wiki/London",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roof Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Roof Repairs",
            description:
              "24/7 emergency callout for urgent roof leaks and storm damage",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Leak Detection and Repair",
            description: "Professional leak detection and permanent repair solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tile and Slate Replacement",
            description:
              "Replacement of damaged, slipped, or missing tiles and slates",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Storm Damage Repair",
            description:
              "Complete repairs following storm and weather damage",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Chimney Repairs",
            description:
              "Chimney stack repairs, repointing, and lead flashing replacement",
          },
        },
      ],
    },
    description:
      "Professional roof repair services across London including emergency leak repairs, tile replacement, storm damage repairs, and chimney repairs. 24/7 emergency callout, 30+ years experience, and 10-year guarantee on all repair work.",
    url: "https://toptierroofing.com/services/roof-repair",
    image: "https://toptierroofing.com/images/roof-repair-service.jpg",
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://toptierroofing.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://toptierroofing.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Roof Repair",
        item: "https://toptierroofing.com/services/roof-repair",
      },
    ],
  };

  return (
    <>
      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Breadcrumb Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Service4
        heroIcon="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/symbols/ux.svg"
        heroIconAlt="Professional Roof Repair Services in London"
        title="Roof Repair Services in London"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          {
            name: "Roof Repair",
            url: "/services/roof-repair",
          },
        ]}
        serviceItems={[]}
        content={[
          {
            heading: "Fast, Reliable Roof Repairs Across London",
            paragraphs: [
              "At Top Tier Roofing, we provide comprehensive roof repair services throughout London and surrounding areas. From emergency leak repairs to planned maintenance work, our experienced team responds quickly to protect your property from water damage and further deterioration. We repair all types of roofs including pitched tile and slate roofs, flat roofs, and commercial roofing systems.",
              "A small roof problem can quickly escalate into costly structural damage if not addressed promptly. With over 30 years of experience repairing roofs across London, we accurately diagnose the root cause of roof problems and provide permanent repair solutions backed by our 10-year workmanship guarantee. Whether you need emergency storm damage repairs or routine tile replacement, we deliver quality repairs that last.",
            ],
          },
          {
            heading: "Comprehensive Roof Repair Services",
            paragraphs: [
              "We handle all types of roof repairs for residential and commercial properties. Our services include emergency leak repairs with 24/7 callout availability, missing or slipped tile and slate replacement, storm and wind damage repairs, ridge and hip tile repointing and replacement, chimney stack repairs and repointing, lead flashing replacement and repairs, flat roof leak repairs, valley gutter repairs, fascia and soffit repairs, and preventative roof maintenance inspections.",
              "Every repair begins with a thorough inspection to identify all issues, not just the visible symptoms. We provide detailed written quotations with no hidden costs, and all our repair work is guaranteed for 10 years, giving you complete peace of mind.",
            ],
          },
          {
            heading: "Emergency Roof Repairs - 24/7 Callout Service",
            paragraphs: [
              "We understand that roof emergencies don't wait for business hours. That's why we offer 24/7 emergency callout for urgent roof repairs including severe leaks, storm damage, and structural damage that requires immediate attention to prevent further water ingress or damage to your property.",
              "Our emergency service includes rapid response to secure your property, temporary weatherproofing to prevent further damage, full damage assessment and repair quotation, and permanent repairs scheduled at your earliest convenience. We work directly with insurance companies and can provide detailed reports and photographs to support your claim if the damage is covered by insurance.",
            ],
          },
          {
            heading: "Tile, Slate, and Chimney Repairs",
            paragraphs: [
              "Missing, slipped, or damaged tiles and slates are among the most common causes of roof leaks. We carry extensive stocks of tiles and slates to match existing roofing materials, allowing us to complete most repairs during the first visit. We repair all types including clay plain tiles, concrete interlocking tiles, natural slate, and synthetic slate alternatives.",
              "Chimney problems are another frequent source of roof leaks and structural concerns. Our chimney repair services include repointing brickwork, replacing damaged lead flashings, rebuilding deteriorated chimney stacks, installing chimney caps and cowls, and repairing or replacing chimney pots. All chimney work is carried out by experienced bricklayers and roofers to ensure structural integrity and proper weatherproofing.",
            ],
          },
          {
            heading: "Why Choose Top Tier Roofing for Roof Repairs?",
            paragraphs: [
              "With over 30 years serving London property owners, we've built our reputation on delivering fast, reliable roof repairs at fair prices. We're fully insured with £10 million public liability coverage, and all our roofers are CITB trained and certified with extensive experience diagnosing and repairing all types of roof problems.",
              "We provide free roof inspections and written quotations, same-day or next-day service for urgent repairs, 24/7 emergency callout availability, 10-year guarantee on all repair work, and transparent pricing with no hidden costs. Our work speaks for itself - check our 5-star ratings on Checkatrade, Trustpilot, and Google Reviews. Contact us today for your free roof inspection and discover why London property owners trust Top Tier Roofing for professional roof repairs.",
            ],
          },
        ]}
      />
    </>
  );
}
