"use client";

import { useState } from "react";
import ScrollAnimate from "./ScrollAnimate";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formState.name.trim()) e.name = "Full name is required.";
    if (formState.phone.trim() && !/^[\d\s\-()+.]{7,}$/.test(formState.phone))
      e.phone = "Please enter a valid phone number.";
    if (!formState.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      e.email = "Please enter a valid email address.";
    if (!formState.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("success");
        setFormState({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-steel-100/60 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <ScrollAnimate animation="left">
            <div>
              <p className="text-primary-600 font-display text-sm uppercase tracking-[0.2em] font-semibold mb-2">
                Get In Touch
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-steel-900 tracking-tight mb-3">
                Contact Us
              </h2>
              <p className="text-steel-600 text-lg mb-6 max-w-lg">
                We are available to answer any and all questions over the phone
                about prices and products Mon-Fri 9am-3pm EST. For anything else
                please e-mail us and we will get back to you as soon as
                possible.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-steel-900 mb-1">
                      Address
                    </h3>
                    <p className="text-steel-600">
                      3600 Woodpark Blvd. Suite A<br />
                      Charlotte NC, 28206
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-steel-900 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:18005237475"
                      className="text-steel-600 hover:text-primary-600 transition-colors"
                    >
                      1-800-523-7475
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-steel-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@carolinamoldings.com"
                      className="text-steel-600 hover:text-primary-600 transition-colors"
                    >
                      contact@carolinamoldings.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-steel-50 border border-steel-200 rounded-lg">
                <h3 className="font-display text-lg font-semibold text-steel-900 mb-2">
                  Business Hours
                </h3>
                <div className="space-y-2 text-steel-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-steel-900 font-medium">
                      9:00 AM - 3:00 PM EST
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Contact Form */}
          <ScrollAnimate animation="right" delay={200}>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-steel-900 mb-4">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-steel-700 mb-1"
                    >
                      Full Name <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-steel-50 border rounded-lg text-steel-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${errors.name ? "border-accent-500 focus:ring-accent-400" : "border-steel-200 focus:ring-primary-500"}`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-accent-600 flex items-center gap-1">
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-steel-700 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-steel-50 border border-steel-200 rounded-lg text-steel-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Acme Utilities"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-steel-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-steel-50 border rounded-lg text-steel-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${errors.phone ? "border-accent-500 focus:ring-accent-400" : "border-steel-200 focus:ring-primary-500"}`}
                      placeholder="(555) 000-0000"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-accent-600 flex items-center gap-1">
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-steel-700 mb-1"
                    >
                      Email <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-steel-50 border rounded-lg text-steel-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${errors.email ? "border-accent-500 focus:ring-accent-400" : "border-steel-200 focus:ring-primary-500"}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-accent-600 flex items-center gap-1">
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-steel-700 mb-1"
                  >
                    Message <span className="text-accent-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-3 py-2 bg-steel-50 border rounded-lg text-steel-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${errors.message ? "border-accent-500 focus:ring-accent-400" : "border-steel-200 focus:ring-primary-500"}`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-accent-600 flex items-center gap-1">
                      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "success" && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
                    Message sent! We&apos;ll get back to you as soon as
                    possible.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  {status !== "loading" && (
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
