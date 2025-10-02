// app/services/page.tsx
import { Services10 } from "@/components/services-components/services-overview-page";
import Breadcrumbs from "@/components/ui/breadcrumb";
import React from "react";

export const metadata = {
  title: "Our Roofing Services London - Expert Roofers | Top Tier Roofing",
  description:
    "Professional roofing services in London: flat roofing, new installations, repairs, skylights & guttering. 25+ years experience. 10-year guarantee. Free quotes. Call today!",
  keywords: [
    "roofing services London",
    "roofers London",
    "flat roofing",
    "roof repairs",
    "new roof installation",
    "skylight installation",
    "guttering services",
    "emergency roof repair",
  ],
  openGraph: {
    title: "Professional Roofing Services in London | Top Tier Roofing",
    description:
      "Comprehensive roofing solutions for London homes and businesses. 25+ years experience, fully insured, 10-year guarantee.",
    type: "website",
    url: "https://toptierroofing.com/services",
    images: [
      {
        url: "https://toptierroofing.com/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Top Tier Roofing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Services London | Top Tier Roofing",
    description:
      "Expert roofing services: installations, repairs, flat roofing & more. 25+ years experience.",
    images: ["https://toptierroofing.com/images/services-twitter.jpg"],
  },
  alternates: {
    canonical: "https://toptierroofing.com/services",
  },
};

export default function Page() {
  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];

  // Enhanced Service List Schema with more details
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Tier Roofing Services",
    description: "Comprehensive roofing services for London properties",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Flat Roofing",
        description:
          "Professional flat roofing installation and repair services including EPDM, GRP fibreglass, and felt systems",
        url: "https://toptierroofing.com/services/flat-roofing",
        provider: {
          "@type": "LocalBusiness",
          name: "Top Tier Roofing",
        },
        areaServed: {
          "@type": "City",
          name: "London",
        },
      },
      {
        "@type": "Service",
        position: 2,
        name: "New Roof Installation",
        description:
          "Complete new roof installation for residential properties using premium materials with 10-year guarantee",
        url: "https://toptierroofing.com/services/new-roof-installation",
        provider: {
          "@type": "LocalBusiness",
          name: "Top Tier Roofing",
        },
        areaServed: {
          "@type": "City",
          name: "London",
        },
      },
      {
        "@type": "Service",
        position: 3,
        name: "Roof Repairs",
        description:
          "Expert roof repair services for all types of roofing with 24/7 emergency response available",
        url: "https://toptierroofing.com/services/roof-repairs",
        provider: {
          "@type": "LocalBusiness",
          name: "Top Tier Roofing",
        },
        areaServed: {
          "@type": "City",
          name: "London",
        },
      },
      {
        "@type": "Service",
        position: 4,
        name: "Skylight Installation",
        description:
          "Professional skylight installation and replacement services for natural light and ventilation",
        url: "https://toptierroofing.com/services/skylight-installation",
        provider: {
          "@type": "LocalBusiness",
          name: "Top Tier Roofing",
        },
        areaServed: {
          "@type": "City",
          name: "London",
        },
      },
      {
        "@type": "Service",
        position: 5,
        name: "Guttering Services",
        description:
          "Complete guttering installation, repair, and maintenance to protect your property from water damage",
        url: "https://toptierroofing.com/services/guttering-services",
        provider: {
          "@type": "LocalBusiness",
          name: "Top Tier Roofing",
        },
        areaServed: {
          "@type": "City",
          name: "London",
        },
      },
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://toptierroofing.com${item.url}`,
    })),
  };

  // Organization Schema (helps Google understand your business)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Top Tier Roofing",
    "@id": "https://toptierroofing.com/#organization",
    url: "https://toptierroofing.com",
    logo: "https://toptierroofing.com/logo.jpg",
    image: "https://toptierroofing.com/images/company-photo.jpg",
    description:
      "Professional roofing contractor serving London for over 25 years with comprehensive roofing services",
    telephone: "+44-XXX-XXX-XXXX",
    email: "info@toptierroofing.com",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "London",
      addressRegion: "Greater London",
      postalCode: "Your Postcode",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.5074",
      longitude: "-0.1278",
    },
    areaServed: [
      {
        "@type": "City",
        name: "London",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flat Roofing",
            description: "Professional flat roofing installation and repairs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "New Roof Installation",
            description: "Complete new roof installations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Repairs",
            description: "Emergency and scheduled roof repairs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Skylight Installation",
            description: "Skylight installation and replacement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Guttering Services",
            description: "Gutter installation and maintenance",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/toptierroofing",
      "https://twitter.com/toptierroofing",
      "https://www.instagram.com/toptierroofing",
      "https://www.linkedin.com/company/toptierroofing",
    ],
  };

  return (
    <>
      {/* Service List Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <div className="max-w-[95%] lg:min-w-4/5 mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="pt-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Main Services Component */}
        <Services10 />
      </div>
    </>
  );
}
