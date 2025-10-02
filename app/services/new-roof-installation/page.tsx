// app/services/new-roof-installations/page.js
import { Service4 } from "@/components/services-components/individual-service-page-component";

// Metadata for SEO
export const metadata = {
  title:
    "New Roof Installation London - Tile, Slate & Felt | Top Tier Roofing",
  description:
    "Expert new roof installation in London. Tile roofs, slate roofs, flat roofs, and felt systems. 30+ years experience. 10-year guarantee. Free quote today!",
  keywords: [
    "new roof installation London",
    "roof installation",
    "tile roof London",
    "slate roof installation",
    "new roof cost",
    "roof replacement London",
    "pitched roof installation",
  ],
  openGraph: {
    title: "Professional New Roof Installation in London | Top Tier Roofing",
    description:
      "Professional new roof installation for residential properties. Tile, slate, and flat roofs. 30+ years experience. 10-year guarantee.",
    type: "website",
    url: "https://toptierroofing.com/services/new-roof-installations",
    images: [
      {
        url: "https://toptierroofing.com/images/new-roof-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional New Roof Installation in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Roof Installation London | Top Tier Roofing",
    description:
      "Expert new roof installation. Tile, slate & flat roofs. 10-year guarantee. Free quote.",
    images: ["https://toptierroofing.com/images/new-roof-twitter.jpg"],
  },
  alternates: {
    canonical: "https://toptierroofing.com/services/new-roof-installations",
  },
};

export default function NewRoofInstallationPage() {
  // Structured data for Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "New Roof Installation",
    serviceType: "New Roof Installation",
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
      name: "New Roof Installation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pitched Roof Installation",
            description:
              "Complete installation of pitched roofs with tiles or slates",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flat Roof Installation",
            description:
              "New flat roof installations with modern materials",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tile Roof Installation",
            description: "Professional clay and concrete tile roof installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Slate Roof Installation",
            description:
              "Premium natural and synthetic slate roof installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Complete Re-Roofing",
            description:
              "Full roof replacement including timber work and insulation",
          },
        },
      ],
    },
    description:
      "Professional new roof installation services for London properties including pitched roofs, flat roofs, tile and slate installations. 30+ years experience, 10-year workmanship guarantee, and full compliance with UK building regulations.",
    url: "https://toptierroofing.com/services/new-roof-installations",
    image: "https://toptierroofing.com/images/new-roof-service.jpg",
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
        name: "New Roof Installation",
        item: "https://toptierroofing.com/services/new-roof-installations",
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
        heroIconAlt="Professional New Roof Installation in London"
        title="New Roof Installation in London"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "New Roof Installation", url: "/services/new-roof-installations" },
        ]}
        serviceItems={[]}
        content={[
          {
            heading: "Expert New Roof Installation for London Properties",
            paragraphs: [
              "At Top Tier Roofing, we specialize in professional new roof installations across London and surrounding areas. Whether you're building a new extension, replacing an aging roof, or upgrading to a more durable roofing system, our experienced team delivers exceptional results using premium materials and proven installation techniques that fully comply with UK building regulations.",
              "A new roof is a significant investment that requires expert planning, quality materials, and precise installation. With over 30 years of experience installing roofs throughout London, we understand the structural, weatherproofing, and aesthetic requirements of every roof type, ensuring your new roof provides decades of reliable protection.",
            ],
          },
          {
            heading: "Comprehensive New Roof Installation Services",
            paragraphs: [
              "We offer complete new roof installations for both residential and commercial properties throughout London. From traditional pitched tile and slate roofs to modern flat roofing systems, we work with all major roofing materials to match your property's architectural style, budget, and performance requirements.",
              "Our new roof installations include complete structural surveys, design and planning support, all necessary building regulation approvals, removal and disposal of old roofing materials (if applicable), new timber work including rafters and battens, breathable roofing membrane and insulation, installation of new tiles, slates, or flat roofing systems, fascia, soffit, and guttering, and comprehensive cleanup. Every project includes a detailed written quotation with no hidden costs.",
            ],
          },
          {
            heading: "Premium Materials and 10-Year Guarantee",
            paragraphs: [
              "Every new roof installation comes with our comprehensive 10-year workmanship guarantee, giving you complete peace of mind for your investment. We work exclusively with premium-grade roofing materials from trusted British and European manufacturers including Redland, Marley, Sandtoft (tiles), Burlington (slate), and IKO (flat roofing), ensuring your new roof provides exceptional durability and weather protection.",
              "Our team consists of fully qualified and time-served roofers with extensive experience in all aspects of roof construction. We're members of the Confederation of Roofing Contractors and all our installations comply with current building regulations including Part L (insulation and energy efficiency). Most residential new roof installations are completed within 5-10 working days, weather permitting.",
            ],
          },
          {
            heading: "Tile and Slate Roof Installation",
            paragraphs: [
              "We install both traditional clay tiles and modern concrete tiles in a wide range of profiles, colors, and finishes to complement any property style. Whether you're looking for classic plain tiles, interlocking pantiles, or premium slate tiles, we'll help you choose the perfect roofing material for your budget and aesthetic preferences.",
              "For properties requiring authentic slate roofing, we install natural Welsh slate as well as modern synthetic slate alternatives that offer the classic appearance of slate with improved durability and reduced weight. All our pitched roof installations include proper ventilation, breathable membranes, and high-performance insulation to meet modern building standards while preventing condensation and heat loss.",
            ],
          },
          {
            heading: "Why Choose Top Tier Roofing for Your New Roof?",
            paragraphs: [
              "With over 30 years serving London homeowners and businesses, we've built our reputation on delivering quality new roof installations on time and on budget. We're fully insured with £10 million public liability coverage, Building Regulation compliant, and all our roofers are CITB trained and certified.",
              "We provide free site surveys and detailed written quotations, transparent pricing with itemized costs, project management from start to finish, flexible payment options, and assistance with building regulation applications. Our work speaks for itself - check our 5-star ratings on Checkatrade, Trustpilot, and Google Reviews. Contact us today for your free new roof consultation and discover why London property owners trust Top Tier Roofing for their new roof installations.",
            ],
          },
        ]}
      />
    </>
  );
}
