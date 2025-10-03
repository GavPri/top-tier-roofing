import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = {
  general: [
    {
      question: "How long have you been in business?",
      answer:
        "Top Tier Roofing has been serving London since 1995, with over 25 years of experience in residential and commercial roofing. We've completed over 500 projects across London.",
    },
    {
      question: "Are you insured and licensed?",
      answer:
        "Yes, we are fully insured and Trading Standards approved. All our work is covered by comprehensive public liability insurance, and we provide all necessary certifications and documentation.",
    },
    {
      question: "Do you offer free quotes?",
      answer:
        "Yes, we provide free, no-obligation quotes for all roofing projects. We'll visit your property, assess the work required, and provide a detailed written quote with transparent pricing.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We cover all areas of London and surrounding boroughs including Hackney, Islington, Camden, Greenwich, Clapham, Brixton, and many more. Contact us to check if we service your area.",
    },
    {
      question: "Do you offer emergency roofing services?",
      answer:
        "Yes, we provide 24/7 emergency roofing services across London with no call-out charges. If you have a roof leak or storm damage, call us immediately and we'll respond as quickly as possible.",
    },
  ],
  services: [
    {
      question: "What roofing services do you offer?",
      answer:
        "We offer a comprehensive range of roofing services including flat roofing (EPDM, GRP, felt), new roof installations, roof repairs, skylight installations, guttering services, and regular maintenance.",
    },
    {
      question: "How long does a typical roof installation take?",
      answer:
        "Most new roof installations take 3-7 days depending on the size and complexity. Flat roof installations typically take 1-3 days. We'll provide a detailed timeline during the quote process.",
    },
    {
      question: "What types of flat roofing materials do you use?",
      answer:
        "We work with all major flat roofing materials including EPDM rubber (durable and flexible), GRP fibreglass (seamless finish), and traditional felt systems. We'll recommend the best option for your property and budget.",
    },
    {
      question: "Do you install VELUX windows?",
      answer:
        "Yes, we are experienced in installing all major skylight brands including VELUX, flat roof skylights, and sun tunnels. All installations come with full weatherproofing guarantees and Building Regulations approval.",
    },
  ],
  pricing: [
    {
      question: "Do I need to pay a deposit?",
      answer:
        "No, we don't require any deposit upfront. You only pay once the work is completed to your satisfaction. This policy demonstrates our confidence in our workmanship and eliminates financial risk for you.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, cash, and most major credit/debit cards. Payment is only required upon completion of the work and your full satisfaction with the results.",
    },
    {
      question: "Are there any hidden costs?",
      answer:
        "No, we provide transparent, detailed quotes with all costs clearly itemized. The price we quote is the price you pay, with no hidden charges or surprise fees.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "For larger projects, we can discuss flexible payment arrangements. Contact us to discuss options that suit your budget and requirements.",
    },
  ],
  guarantees: [
    {
      question: "What guarantee do you offer on your work?",
      answer:
        "All our roof installations come with a comprehensive 10-year workmanship guarantee. This covers any issues arising from our installation work. Additionally, materials come with manufacturer warranties.",
    },
    {
      question: "What does your guarantee cover?",
      answer:
        "Our 10-year guarantee covers all workmanship defects including leaks, installation issues, and structural problems arising from our work. Material warranties are provided separately by manufacturers.",
    },
    {
      question: "What's the warranty on emergency repairs?",
      answer:
        "Emergency repairs and general roof repairs come with a 2-year warranty, covering the specific repair work carried out. We stand behind all our repairs with full documentation provided.",
    },
    {
      question: "Do you provide completion certificates?",
      answer:
        "Yes, we provide completion certificates for all projects, along with Building Regulations compliance certificates where applicable, and all relevant insurance documentation for your records.",
    },
  ],
};

const Faq8 = () => {
  return (
    <section className="my-4 md:my-8 bg-background">
      <div className="container">
        <h2 className="mb-8 text-3xl font-semibold md:mb-11 md:text-5xl text-foreground">
          Frequently asked questions at{" "}
          <span className="text-primary">Top Tier Roofing</span>
        </h2>
        <div className="grid gap-4 border-t pt-4 md:grid-cols-3 md:gap-10">
          <h3 className="text-2xl font-medium text-foreground">General</h3>
          <Accordion type="multiple" className="md:col-span-2">
            {faqs.general.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 grid gap-4 border-t pt-4 md:grid-cols-3 md:gap-10">
          <h3 className="text-2xl font-medium text-foreground">Services</h3>
          <Accordion type="multiple" className="md:col-span-2">
            {faqs.services.map((faq, index) => (
              <AccordionItem key={index} value={`services-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 grid gap-4 border-t pt-4 md:grid-cols-3 md:gap-10">
          <h3 className="text-2xl font-medium text-foreground">
            Pricing & Payment
          </h3>
          <Accordion type="multiple" className="md:col-span-2">
            {faqs.pricing.map((faq, index) => (
              <AccordionItem key={index} value={`pricing-${index}`}>
                <AccordionTrigger className="text-foreground text-left borber-b border-border">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-10 grid gap-4 border-t pt-4 md:grid-cols-3 md:gap-10">
          <h3 className="text-xl font-medium text-foreground">
            Guarantees & Warranties
          </h3>
          <Accordion type="multiple" className="md:col-span-2">
            {faqs.guarantees.map((faq, index) => (
              <AccordionItem key={index} value={`guarantees-${index}`}>
                <AccordionTrigger className=" text-foreground text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq8 };
