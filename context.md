# Complete SEO Optimization Guide for Your Next.js Multi-Page Site

Let me walk you through a comprehensive SEO strategy from foundation to advanced optimization.

## 1. Foundation: Site Structure & Technical Setup

Company Name: Top Tier Roofing
Location: London
Ph No: +123 456 7890
Company type: Roofing 
30 years of service


SERVICE TYPES
- Flat Roofing
- New Roof Installation
- Roof repairs
- Sky light installation
- Guttering services


### Configure Next.js Metadata API

Next.js 13+ has a powerful metadata system. Start with a root layout:

```javascript
// app/layout.js
export const metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Your Business Name - Main Service Keywords',
    template: '%s | Your Business Name'
  },
  description: 'Your compelling 150-160 character description with primary keywords',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Business Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Your Business Name',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Business Name',
    description: 'Your description',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

```

### Add robots.txt

```javascript
// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}

```

### Generate XML Sitemap

```javascript
// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://yourdomain.com';
  
  // Your service pages
  const services = ['service-1', 'service-2', 'service-3']; // replace with actual slugs
  
  const serviceUrls = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    ...serviceUrls,
  ];
}

```

## 2. Page-by-Page Optimization

### Home Page ("/")

```javascript
// app/page.js
export const metadata = {
  title: 'Your Business Name - Primary Service in City Name',
  description: 'Leading provider of [main service] in [location]. Expert [service type] with [unique value prop]. Call us at [phone].',
  openGraph: {
    title: 'Your Business Name - Primary Service',
    description: 'Your description',
    images: ['/og-home.jpg'],
  },
}

export default function Home() {
  return (
    <>
      {/* H1 - Only ONE per page */}
      <h1>Professional [Service] in [City] - Your Business Name</h1>
      
      {/* Schema markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Your Business Name",
            "image": "https://yourdomain.com/logo.jpg",
            "description": "Your business description",
            "@id": "https://yourdomain.com",
            "url": "https://yourdomain.com",
            "telephone": "+1234567890",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main St",
              "addressLocality": "City",
              "addressRegion": "State",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://facebook.com/yourpage",
              "https://twitter.com/yourhandle",
              "https://instagram.com/yourhandle"
            ]
          })
        }}
      />
      
      {/* Your content with semantic HTML */}
      {/* ... */}
    </>
  )
}

```

### Services Landing Page ("/services")

```javascript
// app/services/page.js
export const metadata = {
  title: 'Our Services - Comprehensive [Service Type] Solutions',
  description: 'Explore our full range of [service type] including [service 1], [service 2], and [service 3]. Expert solutions for [target audience].',
}

export default function Services() {
  return (
    <>
      <h1>Our Professional Services</h1>
      
      {/* Service List with schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Service 1",
                "description": "Description of service 1",
                "url": "https://yourdomain.com/services/service-1"
              },
              // Add more services
            ]
          })
        }}
      />
      
      {/* Service cards with internal links */}
      {/* ... */}
    </>
  )
}

```

### Individual Service Pages ("/services/[slug]")

```javascript
// app/services/[slug]/page.js
export async function generateMetadata({ params }) {
  const service = await getServiceData(params.slug); // your data fetching
  
  return {
    title: `${service.name} - Professional ${service.category} Service`,
    description: `Expert ${service.name} in [City]. ${service.shortDescription}. Get a free quote today!`,
    openGraph: {
      title: service.name,
      description: service.shortDescription,
      images: [service.image],
    },
  }
}

export default function ServicePage({ params }) {
  return (
    <>
      <h1>{service.name} in [City Name]</h1>
      
      {/* Schema for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.name,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Your Business Name"
            },
            "areaServed": {
              "@type": "City",
              "name": "Your City"
            },
            "description": service.description
          })
        }}
      />
      
      {/* Include: Benefits, Process, FAQ, CTA */}
      {/* ... */}
    </>
  )
}

```

### About Page ("/about")

```javascript
// app/about/page.js
export const metadata = {
  title: 'About Us - [Years] Years of [Service] Excellence',
  description: 'Learn about our [X] years serving [City]. Our team of certified [profession] delivers exceptional [service type].',
}

```

### Gallery Page ("/gallery")

```javascript
// app/gallery/page.js
export const metadata = {
  title: 'Our Work Gallery - [Service] Projects in [City]',
  description: 'View our portfolio of completed [service] projects. See the quality and craftsmanship that sets us apart.',
}

// Make sure all images have proper alt text
<Image 
  src="/path/to/image.jpg" 
  alt="Descriptive text about what's in the image - include keywords naturally"
  width={800}
  height={600}
/>

```

### Testimonials Page ("/testimonials")

```javascript
// app/testimonials/page.js
export const metadata = {
  title: 'Customer Reviews & Testimonials - Rated 5 Stars',
  description: 'Read what our satisfied customers say about our [service]. Over [X] 5-star reviews from [City] area clients.',
}

// Add Review schema for each testimonial
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Your Business Name"
      },
      "author": {
        "@type": "Person",
        "name": "Customer Name"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The review text"
    })
  }}
/>

```

### Service Areas Page ("/service-areas")

```javascript
// app/service-areas/page.js
export const metadata = {
  title: 'Service Areas - [Service] Across [Region Name]',
  description: 'We proudly serve [City 1], [City 2], [City 3] and surrounding areas with professional [service type].',
}

// Consider creating individual pages for major service areas
// e.g., /service-areas/city-name for better local SEO

```

### Contact Page ("/contact")

```javascript
// app/contact/page.js
export const metadata = {
  title: 'Contact Us - Get Your Free [Service] Quote Today',
  description: 'Contact [Business Name] for a free consultation. Call [phone], email us, or fill out our form. Fast response guaranteed.',
}

// Add ContactPage schema
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Us",
      "url": "https://yourdomain.com/contact"
    })
  }}
/>

```

## 3. Technical SEO Optimizations

### Image Optimization

```javascript
// Use Next.js Image component everywhere
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Descriptive alt text with keywords"
  width={800}
  height={600}
  loading="lazy" // or "eager" for above-the-fold images
  quality={85}
/>

```

### Performance Optimization

```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // Enable compression
  compress: true,
}

```

### Implement Breadcrumbs

```javascript
// components/Breadcrumbs.js
export default function Breadcrumbs({ items }) {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ol>
      </nav>
      
      {/* BreadcrumbList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": `https://yourdomain.com${item.url}`
            }))
          })
        }}
      />
    </>
  )
}

```

## 4. Content Strategy for Each Page

### Key Principles:

-   **Word count**: Aim for 800-1500+ words on main pages
-   **Keyword density**: 1-2% (natural usage)
-   **Headers**: Use H2s and H3s to structure content
-   **Internal linking**: Link between related pages (services to service areas, testimonials to services, etc.)
-   **CTAs**: Every page should have clear calls-to-action

### Content Structure Example (Service Page):

1.  H1: Main keyword-rich title
2.  Introduction (150-200 words)
3.  H2: What is [Service]? (explain the service)
4.  H2: Benefits of [Service] (bullet points or paragraphs)
5.  H2: Our Process (step-by-step)
6.  H2: Why Choose Us? (unique value propositions)
7.  H2: Service Areas (link to service areas page)
8.  H2: FAQ Section (great for featured snippets)
9.  H2: Get Started Today (CTA section)

## 5. Local SEO (Critical for Service Businesses)

### Google Business Profile

-   Claim and optimize your Google Business Profile
-   Add all services
-   Post regular updates
-   Collect and respond to reviews

### NAP Consistency

Ensure your Name, Address, Phone are identical everywhere:

-   Website footer
-   Contact page
-   Google Business Profile
-   Social media
-   Online directories

### Local Schema Markup

Already covered in the home page example above.

## 6. Monitoring & Ongoing Optimization

### Install Analytics

```javascript
// app/layout.js - Add Google Analytics
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>

```

### Set Up Search Console

-   Submit your sitemap to Google Search Console
-   Monitor indexing status
-   Check for crawl errors
-   Track keyword performance

### Regular Tasks:

-   **Weekly**: Check Search Console for errors
-   **Monthly**: Review analytics, update content, add blog posts
-   **Quarterly**: Audit all metadata, refresh old content
-   **Ongoing**: Collect customer reviews, build backlinks

## 7. Quick Wins Checklist

✅ Unique, descriptive titles for every page (50-60 characters)  
✅ Compelling meta descriptions (150-160 characters)  
✅ One H1 per page with primary keyword  
✅ Logical H2/H3 structure  
✅ Alt text on all images  
✅ Internal linking between related pages  
✅ Fast page load times (under 3 seconds)  
✅ Mobile responsive design  
✅ HTTPS enabled  
✅ XML sitemap submitted  
✅ Schema markup on all pages  
✅ Contact information in footer of every page  
✅ Social media links  
✅ Clear CTAs on every page

----------

This is a comprehensive foundation. Start with the technical setup, then optimize each page's content, and finally focus on ongoing monitoring and improvement. SEO is a marathon, not a sprint—you'll see improvements within 3-6 months with consistent effort.