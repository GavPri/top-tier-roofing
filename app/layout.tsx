import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar7 } from "@/components/navigation/navbar7";
import { Footer } from "@/components/navigation/footer";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toptierroofing.com"),
  title: {
    default: "Top Tier Roofing - Expert Roofing Services in London",
    template: "%s | Top Tier Roofing",
  },
  description:
    "Top Tier Roofing provides professional roofing services in London including flat roofing, new roof installation, roof repairs, skylight installation, and guttering services. Call +123 456 7890 for a free quote.",
  keywords: [
    "roofing London",
    "flat roofing",
    "roof installation",
    "roof repairs",
    "skylight installation",
    "guttering services",
    "London roofers",
  ],
  authors: [{ name: "Top Tier Roofing" }],
  creator: "Top Tier Roofing",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://toptierroofing.com",
    siteName: "Top Tier Roofing",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Tier Roofing - Expert Roofing Services in London",
    description:
      "Professional roofing services in London including flat roofing, new roof installation, roof repairs, skylight installation, and guttering services.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${lora.variable} ${ibmPlexMono.variable} antialiased bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar7 />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
