import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Large 404 Number */}
        <div className="relative">
          <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none text-primary/10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Looks like this roof caved in
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                The page you're looking for has fallen through the rafters.
                Let's get you back on solid ground.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button asChild size="lg" className="min-w-[200px]">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[200px] bg-transparent"
          >
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Additional Info */}
        <div className="pt-12 border-t border-border mt-12">
          <p className="text-sm text-muted-foreground">
            Need help? Contact us at{" "}
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
