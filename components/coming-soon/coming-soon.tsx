import { Button } from "@/components/ui/button";
import { Home, Mail } from "lucide-react";
import Link from "next/link";

interface ComingSoonProps {
  title?: string;
  description?: string;
  showEmailSignup?: boolean;
}

export function ComingSoon({
  title = "Under Construction",
  description = "We're building something amazing. This section is currently under construction and will be ready soon.",
  showEmailSignup = false,
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Large Coming Soon Text */}
        <div className="relative">
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold leading-none text-primary/10 select-none">
            SOON
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Email Signup Form (Optional) */}
        {showEmailSignup && (
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <Button type="submit" size="lg" className="whitespace-nowrap">
                <Mail className="mr-2 h-5 w-5" />
                Notify Me
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">
              We'll let you know when this feature is ready
            </p>
          </div>
        )}

        {/* Call to Action Button */}
        <div className="flex justify-center pt-8">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[200px] bg-transparent"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Additional Info */}
        <div className="pt-12 border-t border-border mt-12">
          <p className="text-sm text-muted-foreground">
            Questions? Contact us at{" "}
            <a
              href="tel:555-ROOF-TOP"
              className="text-accent hover:underline font-medium"
            >
              555-ROOF-TOP
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
