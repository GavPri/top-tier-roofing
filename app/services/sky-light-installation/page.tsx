// app/services/skylight-installation/page.tsx
import { Service4 } from "@/components/services-components/individual-service-page-component";

// Metadata for SEO
export const metadata = {
  title: "Skylight Installation London - Velux & Roof Windows | Top Tier Roofing",
  description:
    "Professional skylight and roof window installation in London. Velux windows, sun tunnels, roof lanterns. Expert fitting, 10-year guarantee. Transform your space with natural light!",
  keywords: [
    "skylight installation London",
    "Velux window installation",
    "roof window fitting",
    "sun tunnel installation",
    "roof lantern London",
    "skylight fitting",
    "loft skylight",
    "roof light installation",
  ],
  openGraph: {
    title: "Professional Skylight Installation in London | Top Tier Roofing",
    description:
      "Expert skylight and Velux window installation across London. Bring natural light into your home. 30+ years experience. 10-year guarantee on all installations.",
    type: "website",
    url: "https://toptierroofing.com/services/skylight-installation",
    images: [
      {
        url: "https://toptierroofing.com/images/skylight-og.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Skylight Installation in London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skylight Installation London | Top Tier Roofing",
    description:
      "Transform your space with professional skylight installation. Velux windows, sun tunnels. 10-year guarantee. Free quote.",
    images: ["https://toptierroofing.com/images/skylight-twitter.jpg"],
  },
  alternates: {
    canonical: "https://toptierroofing.com/services/skylight-installation",
  },
};

export default function SkylightInstallationPage() {
  // Structured data for Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Skylight Installation",
    serviceType: "Skylight and Roof Window Installation",
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
      name: "Skylight Installation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Velux Window Installation",
            description:
              "Professional Velux roof window installation for pitched roofs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sun Tunnel Installation",
            description:
              "Sun tunnel fitting to bring natural light into dark spaces",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Lantern Installation",
            description:
              "Glass roof lanterns for flat roofs and extensions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flat Roof Skylight Installation",
            description:
              "Fixed and opening skylights for flat roof applications",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Skylight Repairs and Replacement",
            description:
              "Repair and replacement of existing skylights and roof windows",
          },
        },
      ],
    },
    description:
      "Professional skylight and roof window installation services across London including Velux windows, sun tunnels, roof lanterns, and flat roof skylights. 30+ years experience, 10-year workmanship guarantee, and full Building Regulations compliance.",
    url: "https://toptierroofing.com/services/skylight-installation",
    image: "https://toptierroofing.com/images/skylight-service.jpg",
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
        name: "Skylight Installation",
        item: "https://toptierroofing.com/services/skylight-installation",
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
        heroIconAlt="Professional Skylight Installation in London"
        title="Skylight Installation in London"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          {
            name: "Skylight Installation",
            url: "/services/skylight-installation",
          },
        ]}
        serviceItems={[]}
        content={[
          {
            heading: "Transform Your Home with Natural Light",
            paragraphs: [
              "At Top Tier Roofing, we specialize in professional skylight and roof window installation across London and surrounding areas. Whether you're converting a loft, extending your home, or simply want to brighten up a dark room, skylights and roof windows provide an effective solution to flood your space with natural light while improving ventilation and adding significant value to your property.",
              "Installing a skylight requires expert knowledge of roofing structures, weatherproofing, and Building Regulations compliance. With over 30 years of experience fitting skylights and roof windows throughout London, we ensure every installation is structurally sound, completely watertight, and thermally efficient. From traditional Velux roof windows to modern roof lanterns and sun tunnels, we install all types of roof lighting solutions to suit your property and budget.",
            ],
          },
          {
            heading: "Complete Skylight Installation Services",
            paragraphs: [
              "We offer comprehensive skylight installation for both residential and commercial properties throughout London. Our services include Velux roof window installation for pitched roofs in various sizes and configurations, sun tunnel installation to bring natural light into windowless rooms and corridors, roof lantern installation for flat roofs and extensions, fixed and opening skylights for flat roof applications, electric and solar-powered opening windows with remote controls, and replacement and upgrading of existing skylights.",
              "Every installation includes structural assessment and rafter modifications if required, precise roof opening and waterproofing, professional flashing installation matched to your roof type, internal plastering and finishing around the window frame, and full Building Regulations compliance including energy efficiency requirements. All skylight installations come with our 10-year workmanship guarantee and full manufacturer warranties on windows and components.",
            ],
          },
          {
            heading: "Velux Windows and Roof Window Systems",
            paragraphs: [
              "We are approved installers of Velux roof windows, the UK's leading brand for roof windows and skylights. Velux windows are available in various sizes, opening styles, and glazing options to suit every application. We install center-pivot windows, top-hung windows for easy access, side-hung windows that open like doors, fixed windows for inaccessible roof slopes, and balcony windows that transform into a balcony when opened.",
              "All our Velux installations include high-performance double glazing for thermal efficiency, proper ventilation to prevent condensation, blackout blinds and other accessories if required, and integration with your existing roof structure. We also install electric and solar-powered Velux windows that can be controlled remotely and integrated with smart home systems for maximum convenience.",
            ],
          },
          {
            heading: "Sun Tunnels and Roof Lanterns",
            paragraphs: [
              "For rooms without direct roof access, sun tunnels (also called light tubes) provide an innovative solution to bring natural daylight into dark spaces. These tubular skylights channel sunlight through a reflective tube from your roof to rooms below, perfect for hallways, bathrooms, and internal spaces where traditional windows aren't possible.",
              "For larger openings and contemporary extensions, we install stunning roof lanterns that create a focal point while flooding the space with natural light. Available in aluminum or uPVC frames with high-performance glazing, roof lanterns are ideal for kitchen extensions, orangeries, and flat roof spaces where you want to maximize light and create a sense of openness. All our roof lantern installations meet current Building Regulations for thermal performance and structural loading.",
            ],
          },
          {
            heading: "Why Choose Top Tier Roofing for Skylight Installation?",
            paragraphs: [
              "With over 30 years serving London homeowners and businesses, we've built our reputation on delivering expert skylight installations that enhance properties with natural light while maintaining complete weatherproofing and energy efficiency. We're fully insured with £10 million public liability coverage, Building Regulation compliant, and all our roofers are CITB trained and certified.",
              "We provide free site surveys and detailed written quotations, expert advice on skylight sizing and positioning for optimal light, transparent pricing with itemized costs, Building Regulations approval and certification, and flexible installation scheduling to minimize disruption. Our work speaks for itself - check our 5-star ratings on Checkatrade, Trustpilot, and Google Reviews. Contact us today for your free skylight consultation and discover how we can transform your London property with natural light.",
            ],
          },
        ]}
      />
    </>
  );
}
