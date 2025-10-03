import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ServicesGallery } from "@/components/gallery/services-gallery";

export const metadata = {
  title: "Our Work Gallery - Roofing Projects in London",
  description:
    "View our portfolio of completed roofing projects. See the quality and craftsmanship that sets us apart.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background max-w-9/10 mx-auto lg:min-w-4/5 flex flex-col items-center justify-evenly">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-4 md:py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light text-foreground text-balance leading-tight">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of exceptional roofing projects across
            residential, commercial, and specialty installations.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-6 pb-20">
        <ServicesGallery />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-sans text-foreground text-balance">
            Ready to start your project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can bring your roofing vision to life with our
            expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base hidden md:flex md:justify-center" asChild>
              <Link href={"/contact"} className="hidden md:block">
                Contact Us
              </Link>
            </Button>
            <Button asChild className="md:hidden flex items-center justify-center" variant={'default'} size={'lg'}>
              <Link href={"tel:+12345678"}>
                Call Us
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent"
              asChild
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Top Tier Roofing. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
