import type { Metadata } from "next";
import { GreekKeyDivider } from "@/components/ui/GreekKeyDivider";
import { EmailCapture } from "@/components/ui/EmailCapture";

export const metadata: Metadata = {
  title: "Newsletter - Join the Crew",
  description:
    "Get early news, exclusive content, and launch announcements from the Ulysses Universe. No spam, ever.",
};

const benefits = [
  {
    title: "Launch updates",
    description: "Be the first to know when each book drops - including early access and pre-order deals.",
  },
  {
    title: "Exclusive content",
    description: "Deleted scenes, character backstories, and world-building details that don't appear in the books.",
  },
  {
    title: "Behind the scenes",
    description: "How the Odyssey became a space opera. Writing process, mythology deep dives, and the occasional disaster story.",
  },
  {
    title: "Free Chapter 1",
    description: "New subscribers get Chapter 1 of The Blinding delivered straight to their inbox.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="font-ui text-sm uppercase tracking-[0.2em] text-gold/80 mb-4">
            Stay Connected
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary tracking-wide mb-6">
            Join the Crew
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            The Odyssey's crew roster is open. Sign up for updates from the
            Ulysses Universe - no spam, no filler, just the good stuff.
          </p>
        </div>
      </section>

      <GreekKeyDivider />

      {/* Benefits + Form */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <div>
              <h2 className="font-display text-2xl text-text-primary tracking-wide mb-8">
                What you'll get
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-void-dark border border-gold/30 flex items-center justify-center mt-0.5">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-gold"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-text-primary tracking-wide mb-1">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-sm text-text-secondary leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-void-dark border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl text-text-primary tracking-wide mb-4 text-center">
                Board the Odyssey
              </h2>
              <p className="font-body text-text-secondary text-sm text-center mb-8">
                One email when it matters. Unsubscribe any time.
              </p>
              <EmailCapture />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
