import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Metadata for SEO
export const metadata = {
  title: 'Service Areas - Roofing Across East London | Top Tier Roofing',
  description: 'We proudly serve Hackney, Tower Hamlets, Newham, Waltham Forest, Redbridge, Greenwich, Lewisham and surrounding areas with professional roofing services. Same-day emergency callouts available.',
  keywords: [
    'roofing East London',
    'roofers Hackney',
    'roofing Tower Hamlets',
    'roofers Newham',
    'roofing Waltham Forest',
    'roofers Greenwich',
    'roofing service areas London',
  ],
  openGraph: {
    title: 'Roofing Service Areas - East London | Top Tier Roofing',
    description: 'Professional roofing services across East London boroughs. Fast response times and 10-year guarantee.',
    type: 'website',
    url: 'https://toptierroofing.com/service-areas',
    images: [
      {
        url: 'https://toptierroofing.com/images/service-areas-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Top Tier Roofing Service Areas in East London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Areas - East London Roofing | Top Tier Roofing',
    description: 'Professional roofing across East London. Same-day emergency callouts.',
    images: ['https://toptierroofing.com/images/service-areas-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://toptierroofing.com/service-areas',
  },
};

const serviceAreas = [
  { name: "Hackney", postcode: "E5, E8, E9" },
  { name: "Tower Hamlets", postcode: "E1, E2, E3, E14" },
  { name: "Newham", postcode: "E6, E7, E12, E13, E15, E16" },
  { name: "Waltham Forest", postcode: "E4, E10, E11, E17" },
  { name: "Redbridge", postcode: "E18, IG1-IG6" },
  { name: "Barking & Dagenham", postcode: "IG11, RM8-RM10" },
  { name: "Havering", postcode: "RM1-RM7, RM11-RM14" },
  { name: "Greenwich", postcode: "SE3, SE7, SE10, SE18" },
  { name: "Lewisham", postcode: "SE4, SE6, SE8, SE13, SE14, SE23" },
  { name: "Bexley", postcode: "DA5-DA8, DA14-DA18" },
  { name: "Bromley (East)", postcode: "BR1, BR2, SE9, SE19, SE20" },
  { name: "Stratford", postcode: "E15, E20" },
];

const serviceHighlights = [
  "Same-day emergency callouts",
  "Free, no-obligation quotes",
  "10-year workmanship guarantee",
  "Fully insured & certified",
];

export default function ServicesArea() {
  // Service Areas Schema
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roofing Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Top Tier Roofing",
      "@id": "https://toptierroofing.com/#organization",
    },
    "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": area.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": area.name,
        "addressRegion": "Greater London",
        "addressCountry": "GB",
      }
    })),
  };

  return (
    <>
      {/* Service Area Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema),
        }}
      />

      <section className="py-16 px-4 bg-background max-w-9/10 mx-auto lg:min-w-4/5 flex flex-col items-center justify-evenly">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4">Service Areas</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Serving East London & Surrounding Areas
            </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional roofing services across East London. Fast response
            times and expert workmanship guaranteed.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Service Areas List */}
          <div className="md:col-span-2">
            <Card className="border-2 border-border shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Areas We Cover
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">
                          {area.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {area.postcode}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent rounded-lg border border-border">
                  <p className="text-sm text-foreground">
                    <strong>Don't see your area?</strong> We may still be able
                    to help. Contact us to check if we can service your
                    location.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Card */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="border-2 border-primary shadow-lg bg-primary">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-foreground">
                  Get A Free Quote
                </h2>
                <p className="mb-6 text-primary-foreground/80">
                  Fast response times across all East London areas
                </p>

                <Button className="w-full bg-background text-foreground hover:bg-muted font-semibold text-lg py-6 mb-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 020 1234 5678
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-2 border-primary-foreground text-foreground hover:cursor-pointer"
                >
                  Request Free Quote
                </Button>

                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Clock className="w-5 h-5" />
                    <div>
                      <p className="font-semibold text-primary-foreground">
                        24/7 Emergency Service
                      </p>
                      <p className="text-sm">Average response: 2 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Highlights */}
            <Card className="border-2 border-border shadow-lg">
              <CardContent className="p-6">
                <h2 className="font-bold text-lg mb-4 text-foreground">
                  Why Choose Us?
                </h2>
                <ul className="space-y-3">
                  {serviceHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Coverage Map Placeholder */}
        <Card className="border-2 border-border shadow-accent shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-card h-64 md:h-80 flex items-center justify-center relative">
              <div className="text-center z-10">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Comprehensive East London Coverage
                </h2>
                <p className="text-card-foreground max-w-md mx-auto px-4">
                  From Hackney to Havering, we provide fast, reliable roofing
                  services across all East London boroughs
                </p>
              </div>

              {/* Decorative circles representing coverage areas */}
              <div className="absolute inset-0 overflow-hidden opacity-20 h-full">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-primary rounded-full blur-2xl"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to get started? We're here to help with all your roofing
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:cursor-pointer text-lg px-8"
              asChild
            >
              <Link href={"/contact"}>Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              asChild
            >
              <Link href={"/gallery"}>View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
