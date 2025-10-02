import { Testimonial11 } from '@/components/testimonials/testimonials'
import { Cta10 } from '@/components/ui/cta'

import React from 'react'

export const metadata = {
  title: 'Customer Reviews & Testimonials - Rated 5 Stars',
  description: 'Read what our satisfied customers say about our roofing services. Over 500 5-star reviews from London area clients.',
}

export default function page() {
  return (
    <>
      {/* Review schema - aggregate rating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Tier Roofing",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "500"
            }
          })
        }}
      />

      <div className='max-w-9/10 lg:min-w-4/5 mx-auto'>
        <Testimonial11/>
        <Cta10
          heading="Ready to Work With London's Trusted Roofers?"
          description="Join over 500 satisfied customers. Get your free, no-obligation quote today. No deposit required, 10-year guarantee on all work."
          buttons={{
            primary: {
              text: "Contact Us",
              url: "/contact"
            },
            secondary: {
              text: "Call Us Now",
              url: "tel:02012345678"
            }
          }}
        />
      </div>
    </>
  )
}
