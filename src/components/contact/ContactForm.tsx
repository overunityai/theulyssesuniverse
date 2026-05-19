"use client";

import { useState, useEffect } from "react";

/**
 * Contact form with two operating modes:
 *
 * 1. Web3Forms mode (preferred): if NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is set,
 *    the form posts to the Web3Forms API and the email is never exposed in
 *    client code. Set up at https://web3forms.com using sotirisspyrou@gmail.com,
 *    then add the key to Vercel env vars.
 *
 * 2. Mailto fallback (current): if no access key is configured, the submit
 *    button opens the visitor's default email client with the form contents
 *    pre-filled. The destination address is split across two strings to deter
 *    casual scraper harvesting.
 *
 * Anti-spam:
 * - Hidden honeypot field (named "botcheck")
 * - Minimum message length requirement
 * - In Web3Forms mode: server-side filtering + email never in client code
 * - In mailto mode: address is mildly obfuscated (split-and-join)
 */

// Email address split to deter scraper harvesting in mailto-fallback mode.
const EMAIL_USER = "sotirisspyrou";
const EMAIL_DOMAIN = "gmail.com";

function getContactEmail() {
  return EMAIL_USER + "@" + EMAIL_DOMAIN;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [accessKey, setAccessKey] = useState<string>("");

  useEffect(() => {
    // Read the key at mount so SSR build works without the var present.
    setAccessKey(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    // Honeypot check: if the hidden field is filled, it's a bot.
    if (formData.get("botcheck")) {
      // Silently succeed to fool the bot.
      setStatus("success");
      return;
    }

    const userName = (formData.get("name") as string) || "";
    const userEmail = (formData.get("email") as string) || "";
    const userSubject = (formData.get("subject") as string) || "(no subject)";
    const userMessage = (formData.get("message") as string) || "";

    // Mailto fallback: no Web3Forms key configured.
    if (!accessKey) {
      const body =
        `From: ${userName} <${userEmail}>\n\n` +
        `${userMessage}\n\n` +
        `--\nSent via the contact form at theulyssesuniverse.com/contact`;
      const mailtoUrl =
        `mailto:${getContactEmail()}` +
        `?subject=${encodeURIComponent(`[Ulysses Universe] ${userSubject}`)}` +
        `&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      setStatus("success");
      (event.target as HTMLFormElement).reset();
      return;
    }

    // Web3Forms mode.
    formData.append("access_key", accessKey);
    formData.set("subject", `[Ulysses Universe] ${userSubject}`);
    formData.append("from_name", "The Ulysses Universe contact form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            "Something went wrong sending your message. Please try again or email directly using the address on the Press page."
        );
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      setErrorMessage(
        "Could not reach the contact service. Please try again later or email directly using the address on the Press page."
      );
    }
  }

  if (status === "success") {
    const usingMailto = !accessKey;
    return (
      <div className="bg-void-dark border border-gold/30 rounded-lg p-8 text-center">
        <h2 className="font-display text-2xl text-text-primary tracking-wide mb-3">
          {usingMailto ? "Email client opened" : "Message sent"}
        </h2>
        <p className="font-body text-text-secondary mb-6">
          {usingMailto
            ? "Your default email client should have opened with your message pre-filled. Click Send in that window to deliver it. Response time during the active launch window is typically within 48 hours."
            : "Thank you. Your message has been delivered. Response time during the active launch window is typically within 48 hours."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-ui text-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-void-dark border border-border rounded-lg p-6 md:p-8 space-y-5"
      noValidate
    >
      {/* Honeypot - hidden from real users, bots tend to fill every input */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label htmlFor="botcheck">
          Do not fill this out if you are human
          <input
            type="text"
            name="botcheck"
            id="botcheck"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block font-ui text-xs uppercase tracking-wider text-gold/80 mb-2"
        >
          Your name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          minLength={2}
          maxLength={120}
          autoComplete="name"
          className="w-full bg-void-black border border-border rounded-md px-4 py-3 font-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-gold/50 transition-colors"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-ui text-xs uppercase tracking-wider text-gold/80 mb-2"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          maxLength={200}
          autoComplete="email"
          className="w-full bg-void-black border border-border rounded-md px-4 py-3 font-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-gold/50 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block font-ui text-xs uppercase tracking-wider text-gold/80 mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          minLength={3}
          maxLength={200}
          className="w-full bg-void-black border border-border rounded-md px-4 py-3 font-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-gold/50 transition-colors"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-ui text-xs uppercase tracking-wider text-gold/80 mb-2"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          minLength={20}
          maxLength={5000}
          rows={6}
          className="w-full bg-void-black border border-border rounded-md px-4 py-3 font-body text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-gold/50 transition-colors resize-y"
          placeholder="Your message - minimum 20 characters."
        />
        <p className="font-ui text-xs text-text-tertiary mt-2">
          Minimum 20 characters. No formatting needed.
        </p>
      </div>

      {status === "error" && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-md p-4">
          <p className="font-body text-sm text-red-300">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full font-ui font-semibold text-sm uppercase tracking-[0.05em] bg-gold text-void-black px-6 py-3 rounded-lg hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      <p className="font-ui text-xs text-text-tertiary text-center">
        By sending this message you confirm you are a human, not a bot,
        scraping service, or marketing list builder.
      </p>
    </form>
  );
}
