import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const metadata = {
  title: 'Thank You - Top Tier Roofing',
  description: 'Thank you for contacting Top Tier Roofing. We will get back to you shortly.',
};

export default function ThankYouPage() {
  return (
    <main className="bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/60 mb-4">
          <svg
            className="w-10 h-10 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-foreground text-balance leading-tight">
          Thank you
        </h1>

        {/* Message */}
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
          We've received your message and will get back to you shortly. Our team
          is excited to help with your roofing needs.
        </p>

        {/* Home Button */}
        <div className="pt-4">
          <Button asChild size="lg" className="text-base">
            <Link href="/" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Social Media Icons */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Follow us on social media
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors text-primary"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors text-primary"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors text-primary"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
