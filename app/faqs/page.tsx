import { Faq8 } from "@/components/faqs/faqs";
import { Cta10 } from "@/components/ui/cta";
import React from "react";

export default function page() {
  return (
    <div className="max-w-9/10 mx-auto lg:min-w-[90%] flex flex-col items-center justify-evenly">
      <Faq8 />
      <Cta10
        heading="Still Have Questions?"
        description="Get in touch with our team for personalized assistance with your roofing needs."
        buttons={{
          primary: {
            text: "Contact Us",
            url: "/contact"
          }
        }}
      />
    </div>
  );
}
