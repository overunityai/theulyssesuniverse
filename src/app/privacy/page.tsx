import type { Metadata } from "next";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for theulyssesuniverse.com. How we handle your data, your rights under GDPR and UK DPA 2018.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Privacy Policy
          </h1>
          <p className="font-body text-text-secondary">
            Last updated: 1 March 2026
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-invert prose-gold max-w-none space-y-8">

            <div>
              <h2 className="font-display text-xl text-text-primary tracking-wide mb-3">
                Who we are
              </h2>
              <p className="font-body text-text-secondary leading-relaxed">
                This website is operated by Sotiri Spyrou ("we," "us," "our") for
                the purpose of promoting the Ulysses Universe book series. Our
                website address is https://theulyssesuniverse.com.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-primary tracking-wide mb-3">
                What data we collect
              </h2>
              <div className="space-y-3 font-body text-text-secondary leading-relaxed">
                <p>
                  <strong className="text-text-primary">Email address:</strong>{" "}
                  When you subscribe to our newsletter or download free content, we
                  collect your email address. This is processed by MailerLite
                  (our email service provider) under our data processing agreement.
                </p>
                <p>
                  <strong className="text-text-primary">Analytics:</strong>{" "}
                  We may use privacy-respecting analytics to understand how visitors
                  use our site. No personally identifiable information is collected
                  through analytics.
                </p>
                <p>
                  <strong className="text-text-primary">Cookies:</strong>{" "}
                  This site uses only essential cookies required for the website to
                  function. We don't use advertising or tracking cookies.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-primary tracking-wide mb-3">
                Why we collect it
              </h2>
              <ul className="list-disc pl-5 space-y-1 font-body text-text-secondary">
                <li>To send you the newsletter you signed up for</li>
                <li>To deliver free content (e.g., Chapter 1 PDF)</li>
                <li>To notify you about book releases and updates</li>
                <li>To understand which content resonates with readers</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-primary tracking-wide mb-3">
                Legal basis
              </h2>
              <p className="font-body text-text-secondary leading-relaxed">
                We process your data based on your consent (GDPR Article 6(1)(a)).
                You can withdraw consent at any time by unsubscribing from our
                emails or contacting us directly.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-primary tracking-wide mb-3">
                Who has access to your data
              </h2>
              <div className="space-y-3 font-body text-text-secondary leading-relaxed">
                <p>
                  Your email address is stored by MailerLite (based in Lithuania, EU)
                  under their GDPR-compliant data processing agreement. We don't
                  sell, rent, or share your data with anyone else.
                </p>
                <p>
                  Our website is hosted on Vercel (based in the US) under their
                  data processing addendum. No personal data is stored on our
                  hosting servers.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-primary tracking-wide mb-3">
                How long we keep it
              </h2>
              <p className="font-body text-text-secondary leading-relaxed">
                We retain your email address for as long as you remain subscribed.
                When you unsubscribe, your data is deleted from our mailing list
                within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-primary tracking-wide mb-3">
                Your rights
              </h2>
              <p className="font-body text-text-secondary leading-relaxed mb-3">
                Under GDPR and the UK Data Protection Act 2018, you have the right
                to:
              </p>
              <ul className="list-disc pl-5 space-y-1 font-body text-text-secondary">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="font-body text-text-secondary leading-relaxed mt-3">
                To exercise any of these rights, email us at{" "}
                <a
                  href="mailto:privacy@theulyssesuniverse.com"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  privacy@theulyssesuniverse.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-primary tracking-wide mb-3">
                Children's privacy
              </h2>
              <p className="font-body text-text-secondary leading-relaxed">
                This website is not directed at children under 13. We don't
                knowingly collect data from children.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-primary tracking-wide mb-3">
                Changes to this policy
              </h2>
              <p className="font-body text-text-secondary leading-relaxed">
                We may update this policy from time to time. Significant changes
                will be communicated via our newsletter.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-text-primary tracking-wide mb-3">
                Contact
              </h2>
              <p className="font-body text-text-secondary leading-relaxed">
                For any privacy-related questions, contact{" "}
                <a
                  href="mailto:privacy@theulyssesuniverse.com"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  privacy@theulyssesuniverse.com
                </a>
                .
              </p>
              <p className="font-body text-text-secondary leading-relaxed mt-3">
                If you're not satisfied with our response, you have the right to
                lodge a complaint with the Information Commissioner's Office (ICO)
                at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
