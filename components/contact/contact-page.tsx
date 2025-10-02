"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { z } from "zod";

// Validation schema
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, {
      message: "Name can only contain letters, spaces, hyphens, and apostrophes"
    }),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[\d\s()+-]+$/, {
      message: "Phone number can only contain digits, spaces, and symbols ( ) + -"
    }),
  area: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const formFields = [
  {
    label: "Full name",
    name: "fullName" as keyof ContactFormData,
    placeholder: "First and last name",
    type: "text",
  },
  {
    label: "Email address",
    name: "email" as keyof ContactFormData,
    placeholder: "your.email@example.com",
    type: "email",
  },
  {
    label: "Phone number",
    name: "phone" as keyof ContactFormData,
    placeholder: "(555) 123-4567",
    type: "tel",
  },
  {
    label: "Service area",
    name: "area" as keyof ContactFormData,
    placeholder: "City or zip code",
    type: "text",
    optional: true,
  },
  {
    label: "Your message",
    name: "message" as keyof ContactFormData,
    placeholder: "Tell us about your roofing needs...",
    type: "textarea",
  },
];

const Contact11 = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      area: (formData.get("area") as string) || undefined,
      message: formData.get("message") as string,
    };

    // Validate with Zod
    try {
      contactFormSchema.parse(data);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real app, you would send the form data to your backend here
      // For now, just redirect to thank you page
      router.push("/thank-you");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path && issue.path[0]) {
            fieldErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(fieldErrors);
      }
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-4">
      <div className="container lg:min-w-6xl">
        <h1 className="text-left text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-left text-muted-foreground">
          Ready to protect your home? Contact us today for a free estimate.
        </p>

        <div className="mt-8 flex gap-10 lg:gap-30 flex-col md:flex-row md:mt-12 md:divide-x">
          {/* Contact Information */}
          <div className="space-y-10 md:pr-10 md:gap-20 order-1">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Office</h2>
              <p className="mt-3 font-medium tracking-tight text-muted-foreground">
                Top Tier Roofing
                <br />
                Serving Greater London Area
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <div className="mt-3 space-y-2">
                <div>
                  <p className="text-primary">Phone</p>
                  <a
                    href="tel:+15125551234"
                    className="mt-1 tracking-tight text-muted-foreground hover:text-foreground"
                  >
                    (512) 555-1234
                  </a>
                </div>
                <div>
                  <p className="text-primary">Email</p>
                  <a
                    href="mailto:info@toptierroofing.com"
                    className="mt-1 tracking-tight text-muted-foreground hover:text-foreground"
                  >
                    info@toptierroofing.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Hours</h2>
              <p className="mt-3 font-medium tracking-tight text-muted-foreground">
                Monday - Friday: 8am - 6pm
                <br />
                Saturday: 9am - 4pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="flex-1 order-2 md:order-2">
            <h2 className="text-lg font-semibold text-foreground">
              Request a Free Estimate
            </h2>
            <form className="mt-5 space-y-5" onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label className="text-foreground">
                    {field.label}
                    {field.optional && (
                      <span className="text-muted-foreground"> (optional)</span>
                    )}
                  </Label>
                  {field.type === "textarea" ? (
                    <Textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      className={`min-h-[120px] resize-none ${
                        errors[field.name]
                          ? "border-red-500 text-foreground bg-muted"
                          : "text-foreground bg-muted"
                      }`}
                      required={!field.optional}
                    />
                  ) : (
                    <Input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className={
                        errors[field.name]
                          ? "border-red-500 text-foreground bg-muted"
                          : "text-foreground bg-muted"
                      }
                      required={!field.optional}
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-sm text-red-500">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact11 };
