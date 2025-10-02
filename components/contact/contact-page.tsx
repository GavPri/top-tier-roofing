
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const formFields = [
  {
    label: "Full name",
    name: "fullName",
    placeholder: "First and last name",
    type: "text",
  },
  {
    label: "Email address",
    name: "email",
    placeholder: "your.email@example.com",
    type: "email",
  },
  {
    label: "Phone number",
    name: "phone",
    placeholder: "(555) 123-4567",
    type: "tel",
  },
  {
    label: "Service area",
    name: "area",
    placeholder: "City or zip code",
    type: "text",
    optional: true,
  },
  {
    label: "Your message",
    name: "message",
    placeholder: "Tell us about your roofing needs...",
    type: "textarea",
  },
];

const Contact11 = () => {
  return (
    <section className="py-4">
      <div className="container lg:min-w-6xl">
        <h1 className="text-left text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-left text-muted-foreground">
          Ready to protect your home? Contact us today for a free estimate.
        </p>

        <div className="mt-8 flex gap-10 lg:gap-30 max-md:flex-col md:mt-12 md:divide-x">
          {/* Contact Information */}
          <div className="space-y-10 pr-10 md:gap-20">
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
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground">Request a Free Estimate</h2>
            <form className="mt-5 space-y-5">
              {formFields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <Label className="text-foreground">
                    {field.label}
                    {field.optional && (
                      <span className="text-muted-foreground">
                        {" "}
                        (optional)
                      </span>
                    )}
                  </Label>
                  {field.type === "textarea" ? (
                    <Textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      className="min-h-[120px] resize-none"
                    />
                  ) : (
                    <Input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-end">
                <Button type="submit" size="lg" className="w-full">
                  Submit Request
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
