import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'About Us - 30 Years of Roofing Excellence',
  description: 'Learn about our 30 years serving London. Our team of certified roofers delivers exceptional roofing services.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-foreground mb-8 text-balance leading-tight">
            Building excellence, one roof at a time
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            Top Tier Roofing delivers exceptional craftsmanship and unwavering
            commitment to protecting what matters most.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden relative">
            <Image
              fill
              src="/images/about/about-us.jpg"
              alt="Top Tier Roofing team at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm uppercase tracking-wider text-primary font-medium">
              Our Story
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              Founded in 2010, Top Tier Roofing has grown from a small family
              operation to one of the region's most trusted roofing contractors.
              Our journey began with a simple philosophy: treat every roof as if
              it were protecting our own family.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Over the years, we've completed thousands of projects, from
              residential homes to commercial buildings. Each project reinforces
              our commitment to quality, safety, and customer satisfaction. We
              don't just install roofs—we build lasting relationships with our
              clients and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm uppercase tracking-wider text-primary font-medium">
              Our Values
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-light mb-3 text-foreground">
                  Quality Craftsmanship
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We use only premium materials and employ skilled craftsmen who
                  take pride in their work. Every installation meets the highest
                  industry standards.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-foreground">
                  Transparent Communication
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  From initial consultation to project completion, we keep you
                  informed every step of the way. No surprises, no hidden costs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-3 text-foreground">
                  Customer First
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Your satisfaction is our priority. We stand behind our work
                  with comprehensive warranties and responsive after-service
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl text-foreground text-balance">
            Ready to protect your investment?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-base" asChild>
              <Link href={"/contact"}>Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-transparent lg:hidden"
            >
              <Link href={'tel:+123456789'}>Call (123) 456-7890</Link>
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
