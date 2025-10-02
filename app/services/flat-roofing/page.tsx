// app/services/flat-roofing/page.js
import { Service4 } from "@/components/services-components/individual-service-page-component";

// Metadata for SEO
export const metadata = {
  title: "Flat Roofing Services London - EPDM, GRP & Felt | Top Tier Roofing",
  description:
    "Expert flat roofing services in London. EPDM rubber roofing, GRP fibreglass, felt systems, and 24/7 emergency repairs. 10-year guarantee. Free quote!",
  keywords: [
    "flat roofing London",
    "EPDM roofing",
    "GRP fibreglass roofing",
    "felt roofing",
    "flat roof repair London",
    "emergency roof repair",
  ],
  openGraph: {
    title: "Professional Flat Roofing Services in London | Top Tier Roofing",
    description:
      "Professional flat roofing installation, repair, and maintenance. EPDM, GRP, and felt systems. 10-year guarantee. 24/7 emergency service.",
    type: "website",
    url: "https://yourdomain.com/services/flat-roofing",
    images: [
      {
        url: "https://yourdomain.com/images/flat-roofing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Flat Roofing Services in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flat Roofing Services London | Top Tier Roofing",
    description:
      "Expert EPDM, GRP & felt flat roofing. 10-year guarantee. 24/7 emergency repairs.",
    images: ["https://yourdomain.com/images/flat-roofing-twitter.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com/services/flat-roofing",
  },
};

export default function FlatRoofingPage() {
  // Structured data for Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Flat Roofing Services",
    serviceType: "Flat Roofing",
    provider: {
      "@type": "LocalBusiness",
      name: "Top Tier Roofing",
      "@id": "https://yourdomain.com/#organization",
      url: "https://yourdomain.com",
      telephone: "+44-XXX-XXX-XXXX",
      priceRange: "££",
      image: "https://yourdomain.com/logo.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Street Address",
        addressLocality: "London",
        addressRegion: "Greater London",
        postalCode: "Your Postcode",
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
      name: "Flat Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "EPDM Rubber Roofing",
            description:
              "Durable, flexible, and weatherproof EPDM rubber roofing installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GRP Fibreglass Roofing",
            description:
              "Seamless and long-lasting GRP fibreglass roofing systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Felt Roofing Systems",
            description: "Traditional and reliable felt roofing protection",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flat Roof Repairs",
            description:
              "Quick fixes for leaks and damage with 24/7 emergency service",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flat Roof Maintenance",
            description:
              "Regular inspections and preventative maintenance services",
          },
        },
      ],
    },
    description:
      "Professional flat roofing services including EPDM rubber roofing, GRP fibreglass roofing, felt roofing systems, flat roof repairs, and maintenance services for London properties. 10-year workmanship guarantee and 24/7 emergency service available.",
    url: "https://yourdomain.com/services/flat-roofing",
    image: "https://yourdomain.com/images/flat-roofing-service.jpg",
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
        item: "https://yourdomain.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://yourdomain.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Flat Roofing",
        item: "https://yourdomain.com/services/flat-roofing",
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
        heroIconAlt="Professional Flat Roofing Services in London"
        title="Flat Roofing Services in London"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Flat Roofing", url: "/services/flat-roofing" },
        ]}
        serviceItems={[]}
        content={[
          {
            heading: "Expert Flat Roofing Solutions for London Properties",
            paragraphs: [
              "At Top Tier Roofing, we specialize in professional flat roofing services across London and surrounding areas. Whether you need a new flat roof installation, urgent repair, or complete replacement, our experienced team delivers exceptional results using premium materials and proven techniques that comply with all UK building regulations.",
              "Flat roofs require specific expertise to ensure proper weatherproofing, drainage, and longevity. With over 25 years of experience serving London properties, we understand the unique challenges of the British climate and provide solutions designed to withstand heavy rain, temperature fluctuations, and harsh weather conditions for decades to come.",
            ],
          },
          {
            heading: "Comprehensive Flat Roofing Services",
            paragraphs: [
              "We offer a complete range of flat roofing solutions tailored to both residential and commercial properties throughout London. From modern EPDM rubber roofing and advanced GRP fibreglass systems to traditional three-layer felt roofing, we work with all major flat roofing materials to suit your specific requirements and budget.",
              "Our services include new installations, complete re-roofing, repairs to existing flat roofs, emergency leak fixes, gutter repairs, fascia and soffit work, and ongoing maintenance contracts. Every project begins with a free, no-obligation survey and detailed written quotation, ensuring complete transparency and no hidden costs.",
            ],
          },
          {
            heading: "Premium Materials and Guaranteed Workmanship",
            paragraphs: [
              "Every flat roof we install comes with our comprehensive 10-year workmanship guarantee, giving you complete peace of mind and protection for your investment. We exclusively use premium-grade materials from trusted British and European manufacturers including Firestone, PermaRoof, and IKO, ensuring your roof remains completely watertight and structurally sound for many years.",
              "Our team consists of fully qualified and time-served roofers, all trained and certified in the latest flat roofing installation techniques. This includes hot-applied felt systems, cold-applied felt, EPDM rubber membrane installation, GRP fibreglass lamination, and liquid waterproofing systems. We complete most residential flat roof projects within 1-3 days with minimal disruption to your daily routine.",
            ],
          },
          {
            heading: "24/7 Emergency Flat Roof Repair Service",
            paragraphs: [
              "Flat roof leaks require urgent professional attention to prevent serious water damage, structural issues, and costly interior repairs. Our emergency flat roof repair service operates 24 hours a day, 7 days a week across all London boroughs, with absolutely no call-out charges. We aim to respond within 2-4 hours of your call, bringing all necessary materials and equipment to complete effective repairs on the first visit.",
              "Whether you're dealing with a minor leak, ponding water, blistering, cracking, storm damage, or complete system failure, our experienced emergency roofers have the expertise and materials on hand to diagnose the problem and provide long-lasting repairs quickly. All emergency repairs are covered by our standard 2-year warranty, and we provide detailed photographic reports of all work completed for your records and insurance purposes.",
            ],
          },
          {
            heading: "Why Choose Top Tier Roofing for Flat Roofing?",
            paragraphs: [
              "With over 25 years serving London homeowners and businesses, we've built our reputation on quality workmanship, honest advice, and exceptional customer service. We're fully insured with £10 million public liability coverage, all our work complies with current building regulations, and we're proud members of the Confederation of Roofing Contractors and TrustMark approved.",
              "We offer free site surveys and written quotations, transparent pricing with no hidden costs, flexible payment options, and we can work with your insurance company for storm damage claims. Our customer reviews speak for themselves - check our 5-star ratings on Checkatrade, Trustpilot, and Google Reviews. Contact us today for your free flat roofing assessment and discover why London property owners trust Top Tier Roofing.",
            ],
          },
        ]}
      />
    </>
  );
}
