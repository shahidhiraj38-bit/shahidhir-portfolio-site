"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/shahidhiraj38@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed");
      }

      window.location.href = "/thanks";
    } catch {
      setStatus("error");
    }
  }

  return (
    <form action="https://formsubmit.co/shahidhiraj38@gmail.com" method="POST" acceptCharset="UTF-8" onSubmit={handleSubmit} className="rounded-lg premium-border p-6 shadow-card">
      <input type="hidden" name="_subject" value="New consultation request from shahidhir website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanGlow">Book Consultation</p>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">Start your AI growth plan</h2>
        <p className="mt-3 text-sm leading-7 text-white/62">
          Submit your details below. Your consultation request will be sent directly to shahidhiraj38@gmail.com.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-white/70">Name<input required name="name" className="mt-2 w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanGlow" /></label>
        <label className="text-sm font-medium text-white/70">Email<input required type="email" name="email" className="mt-2 w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanGlow" /></label>
        <label className="text-sm font-medium text-white/70">Phone<input name="phone" className="mt-2 w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanGlow" /></label>
        <label className="text-sm font-medium text-white/70">Service Interest<select name="service_interest" className="mt-2 w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanGlow">
          <option>AI Marketing Strategy</option>
          <option>Business Growth Consulting</option>
          <option>Social Media Marketing</option>
          <option>Personal Branding</option>
          <option>Sales Funnel Strategy</option>
          <option>Mindset and Motivation Coaching</option>
          <option>Digital Transformation Consulting</option>
        </select></label>
      </div>
      <label className="mt-5 block text-sm font-medium text-white/70">Message<textarea required name="message" rows={6} className="mt-2 w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-white outline-none transition focus:border-cyanGlow" /></label>
      {status === "error" && (
        <p className="mt-5 rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          The form could not send. Please check your internet connection and try again.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="mt-6 w-full rounded-md bg-cyanGlow px-6 py-4 font-bold text-ink shadow-glow transition hover:bg-limeGlow disabled:cursor-wait disabled:opacity-70 md:w-auto">
        {status === "sending" ? "Sending..." : "Book Consultation"}
      </button>
    </form>
  );
}
