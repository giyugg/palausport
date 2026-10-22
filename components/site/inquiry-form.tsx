"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { destinations } from "@/content/destinations";
import { site } from "@/content/site";
import {
  prepareInquiryEmail,
  validateInquiry,
  type Inquiry,
} from "@/lib/inquiry";

export function InquiryForm() {
  const searchParams = useSearchParams();
  const destination = destinations.find(
    (item) => item.slug === searchParams.get("destination"),
  );
  const topic = (
    searchParams.get("topic") ||
    (destination
      ? `${destination.title} trip inquiry`
      : "Liveaboard trip inquiry")
  ).slice(0, 120);
  const [errors, setErrors] = useState<Partial<Record<keyof Inquiry, string>>>(
    {},
  );
  const [prepared, setPrepared] = useState<ReturnType<
    typeof prepareInquiryEmail
  > | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const inquiry = Object.fromEntries(
      [
        "name",
        "email",
        "topic",
        "destination",
        "guests",
        "startDate",
        "endDate",
        "message",
      ].map((key) => [key, String(formData.get(key) || "").trim()]),
    ) as Inquiry;
    const nextErrors = validateInquiry(inquiry);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setPrepared(null);
      const first = Object.keys(nextErrors)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setPrepared(prepareInquiryEmail(inquiry));
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  const fieldError = (field: keyof Inquiry) =>
    errors[field] ? (
      <p className="field-error" id={`${field}-error`}>
        {errors[field]}
      </p>
    ) : null;
  const errorProps = (field: keyof Inquiry) => ({
    "aria-invalid": errors[field] ? (true as const) : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form
      className="inquiry-form"
      onSubmit={handleSubmit}
      onChange={() => {
        if (prepared) setPrepared(null);
      }}
      noValidate
    >
      <h2>Tell us what you’re dreaming of.</h2>
      <p className="inquiry-form-intro">
        Prepare your inquiry below, then review and send it in your own email
        app.
      </p>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Full name"
            {...errorProps("name")}
          />
          {fieldError("name")}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
            {...errorProps("email")}
          />
          {fieldError("email")}
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="topic">What would you like to ask?</label>
          <input
            id="topic"
            name="topic"
            required
            maxLength={120}
            defaultValue={topic}
            {...errorProps("topic")}
          />
          {fieldError("topic")}
        </div>
        <div className="form-field">
          <label htmlFor="destination">
            Destination <span>(optional)</span>
          </label>
          <select
            id="destination"
            name="destination"
            defaultValue={destination?.title || ""}
          >
            <option value="">Open to suggestions</option>
            {destinations.map((item) => (
              <option key={item.slug} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="guests">
            Guests <span>(optional)</span>
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={99}
            step={1}
            inputMode="numeric"
            placeholder="Number of guests"
            {...errorProps("guests")}
          />
          {fieldError("guests")}
        </div>
        <div className="form-field">
          <label htmlFor="startDate">
            Travel window from <span>(optional)</span>
          </label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            {...errorProps("startDate")}
          />
          {fieldError("startDate")}
        </div>
        <div className="form-field">
          <label htmlFor="endDate">
            Travel window to <span>(optional)</span>
          </label>
          <input
            id="endDate"
            name="endDate"
            type="date"
            {...errorProps("endDate")}
          />
          {fieldError("endDate")}
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={1200}
            rows={4}
            placeholder="Your diving interests, experience, cabin preferences, or anything you’d like to know…"
            {...errorProps("message")}
          />
          {fieldError("message")}
        </div>
      </div>
      <p className="form-notice">
        Online submission is not available in this draft. This form prepares an
        email; nothing is sent from the website. You can also{" "}
        <a href={`mailto:${site.email}`}>email the team directly</a>.
      </p>
      <div className="form-actions">
        <button type="submit" className="button button-primary">
          Prepare email inquiry
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <p className="form-privacy">
          Your details stay in this page until you choose to email them. Read
          our <Link href="/privacy">draft privacy notice</Link>. Please don’t
          include payment details or identity documents.
        </p>
      </div>
      {prepared && (
        <div
          className="prepared-email"
          ref={resultRef}
          tabIndex={-1}
          role="status"
        >
          <p>
            <strong>Your email draft is ready.</strong> Open your email app to
            review and send it. Nothing has been sent yet.
          </p>
          <a href={prepared.href} className="button button-primary">
            Open email app
            <Mail size={16} aria-hidden="true" />
          </a>
          <details className="email-preview">
            <summary>Preview or copy your message</summary>
            <pre>{prepared.body}</pre>
          </details>
          <p className="small-note" style={{ marginTop: 12 }}>
            If no email app opens, copy your message and send it to {site.email}
            .
          </p>
        </div>
      )}
    </form>
  );
}
