// app/services/guttering-services/page.js
import { Service4 } from "@/components/services-components/individual-service-page-component";

// Metadata for SEO
export const metadata = {
  title: "Guttering Services London - Installation, Repair & Cleaning | Top Tier Roofing",
  description:
    "Expert guttering services in London. Gutter installation, repairs, cleaning, and replacement. UPVC, cast iron & aluminum gutters. Free quote!",
  keywords: [
    "guttering services London",
    "gutter installation London",
    "gutter repairs",
    "gutter cleaning",
    "UPVC gutters",
    "fascia and soffit",
    "downpipe repair",
  ],
  openGraph: {
    title: "Professional Guttering Services in London | Top Tier Roofing",
    description:
      "Professional gutter installation, repair, cleaning, and maintenance. All gutter types. 10-year guarantee. Free quote.",
    type: "website",
    url: "https://toptierroofing.com/services/guttering-services",
    images: [
      {
        url: "https://toptierroofing.com/images/guttering-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Guttering Services in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guttering Services London | Top Tier Roofing",
    description:
      "Expert gutter installation, repair & cleaning. 10-year guarantee. Free quote.",
    images: ["https://toptierroofing.com/images/guttering-twitter.jpg"],
  },
  alternates: {
    canonical: "https://toptierroofing.com/services/guttering-services",
  },
};

export default function GutteringServicesPage() {
  // Structured data for Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Guttering Services",
    serviceType: "Guttering Services",
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
      name: "Guttering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gutter Installation",
            description:
              "Professional installation of UPVC, aluminum, and cast iron gutters",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gutter Repairs",
            description:
              "Expert repairs for leaking, sagging, or damaged gutters",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gutter Cleaning",
            description: "Professional gutter and downpipe cleaning services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fascia and Soffit",
            description:
              "Installation and replacement of fascia boards and soffits",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gutter Maintenance",
            description:
              "Regular maintenance to prevent blockages and water damage",
          },
        },
      ],
    },
    description:
      "Professional guttering services including installation, repairs, cleaning, and maintenance for London properties. All gutter types including UPVC, aluminum, and cast iron. 10-year guarantee on installations.",
    url: "https://toptierroofing.com/services/guttering-services",
    image: "https://toptierroofing.com/images/guttering-service.jpg",
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
        name: "Guttering Services",
        item: "https://toptierroofing.com/services/guttering-services",
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
        heroIconAlt="Professional Guttering Services in London"
        title="Guttering Services in London"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Guttering Services", url: "/services/guttering-services" },
        ]}
        serviceItems={[]}
        content={[
          {
            heading: "Expert Guttering Solutions for London Properties",
            paragraphs: [
              "At Top Tier Roofing, we provide comprehensive guttering services across London and surrounding areas. Whether you need new gutter installation, repairs to existing gutters, professional cleaning, or complete replacement, our experienced team delivers exceptional results using premium materials and proven installation techniques.",
              "Properly functioning gutters are essential for protecting your property from water damage. With over 30 years of experience serving London properties, we understand the importance of efficient rainwater management and provide guttering solutions designed to keep your home dry and protected for decades.",
            ],
          },
          {
            heading: "Comprehensive Guttering Services",
            paragraphs: [
              "We offer a complete range of guttering solutions for both residential and commercial properties throughout London. From modern UPVC guttering systems to traditional cast iron and aluminum gutters, we work with all major gutter types to suit your property's style and budget.",
              "Our services include new gutter installations, complete gutter replacements, repairs to leaking or damaged gutters, professional gutter cleaning, downpipe repairs and replacement, fascia and soffit installation, and ongoing maintenance contracts. Every project begins with a free inspection and detailed quotation.",
            ],
          },
          {
            heading: "Premium Materials and Guaranteed Workmanship",
            paragraphs: [
              "Every guttering installation comes with our comprehensive 10-year workmanship guarantee, giving you complete peace of mind. We use only premium-grade guttering materials from trusted manufacturers including FloPlast, Marley, and Lindab, ensuring your gutters remain functional and watertight for many years.",
              "Our team consists of fully qualified roofers and guttering specialists, all trained in proper installation techniques to ensure correct falls, secure fixings, and effective water flow. We complete most residential guttering projects within 1-2 days with minimal disruption to your home.",
            ],
          },
          {
            heading: "Professional Gutter Cleaning and Maintenance",
            paragraphs: [
              "Regular gutter cleaning is essential to prevent blockages that can lead to overflowing gutters, water damage to walls and foundations, and costly repairs. Our professional gutter cleaning service removes all debris including leaves, moss, and silt from gutters and downpipes.",
              "We recommend having your gutters professionally cleaned at least twice a year - typically in late autumn after leaf fall and in spring. Our cleaning service includes clearing all gutters and downpipes, checking for damage or wear, minor repairs if needed, and a full report on the condition of your guttering system.",
            ],
          },
          {
            heading: "Why Choose Top Tier Roofing for Guttering Services?",
            paragraphs: [
              "With over 30 years serving London homeowners and businesses, we've built our reputation on quality workmanship, honest advice, and exceptional customer service. We're fully insured with £10 million public liability coverage, and all our work complies with current building regulations.",
              "We offer free site surveys and written quotations, transparent pricing with no hidden costs, a choice of UPVC, aluminum, or cast iron guttering, color-matched to your property, and flexible payment options. Our customer reviews speak for themselves - check our 5-star ratings on Checkatrade, Trustpilot, and Google Reviews. Contact us today for your free guttering assessment.",
            ],
          },
        ]}
      />
    </>
  );
}
