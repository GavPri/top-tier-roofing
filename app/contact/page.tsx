import { Contact11 } from "@/components/contact/contact-page";
import React from "react";

export const metadata = {
  title: 'Contact Us - Get Your Free Roofing Quote Today',
  description: 'Contact Top Tier Roofing for a free consultation. Call +123 456 7890, email us, or fill out our form. Fast response guaranteed.',
}

export default function page() {
  return (
    <>
      {/* ContactPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us",
            "url": "https://toptierroofing.com/contact"
          })
        }}
      />

      <div className="max-w-9/10 mx-auto lg:min-w-4/5 flex flex-col items-center justify-evenly">
        <Contact11 />
      </div>
    </>
  );
}
