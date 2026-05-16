import type { Metadata } from "next";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL, SITE_NAME, AUTHOR } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";

const PAGE_TITLE = "Contact | The Ulysses Universe";
const PAGE_DESCRIPTION =
  "Contact Sotiris Spyrou, author of the Ulysses Universe trilogy. Use the form below for reader messages, press enquiries, and reviewer requests.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact`,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/contact`,
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
    about: {
      "@type": "Person",
      name: AUTHOR.name,
    },
  };

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Contact", url: `${SITE_URL}/contact` },
        ])}
      />
      <JsonLd data={contactSchema} />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            Get In Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Contact the Author
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Use the form below to reach Sotiris Spyrou directly. Reader messages,
            press enquiries, podcast bookings, reviewer requests, and adaptation
            enquiries are all welcome.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-6">
          <ContactForm />
          <p className="font-ui text-xs text-text-tertiary text-center mt-8 leading-relaxed">
            Messages go directly to the author. No mailing list signup, no
            tracking, no third-party data sharing beyond the form provider used
            for delivery. Response time during the active launch window
            (May - July 2026) is typically within 48 hours.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Alternative contact paths */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide mb-6 text-center">
            Other ways to reach me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-void-dark border border-border rounded-lg p-6">
              <h3 className="font-display text-lg text-text-primary tracking-wide mb-2">
                Press &amp; Media
              </h3>
              <p className="font-body text-sm text-text-secondary mb-3">
                Interview requests, review copies, podcast bookings.
              </p>
              <a
                href="/press"
                className="font-ui text-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
              >
                Press kit -&gt;
              </a>
            </div>

            <div className="bg-void-dark border border-border rounded-lg p-6">
              <h3 className="font-display text-lg text-text-primary tracking-wide mb-2">
                Book Clubs
              </h3>
              <p className="font-body text-sm text-text-secondary mb-3">
                Discussion questions, themes, reading paths.
              </p>
              <a
                href="/reading-group"
                className="font-ui text-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
              >
                Reading group guide -&gt;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
