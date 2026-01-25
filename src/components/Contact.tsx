"use client";

import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-steel-900 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-steel-700/20 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-primary-500 font-display text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Contact Us
            </h2>
            <p className="text-steel-400 text-lg mb-12 max-w-lg">
              We are available to answer any and all questions over the phone
              about prices and products Mon-Fri 8am-3pm EST. For anything else
              please e-mail us and we will get back to you as soon as possible.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-600/10 border border-primary-600/20 rounded-lg flex items-center justify-center shrink-0">
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
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    Address
                  </h3>
                  <p className="text-steel-400">
                    3600 Woodpark Blvd. Suite A<br />
                    Charlotte NC, 28206
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-600/10 border border-primary-600/20 rounded-lg flex items-center justify-center shrink-0">
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
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:18005237475"
                    className="text-steel-400 hover:text-primary-500 transition-colors"
                  >
                    1-800-523-7475
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-600/10 border border-primary-600/20 rounded-lg flex items-center justify-center shrink-0">
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
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:Contact@CarolinaMoldings.com"
                    className="text-steel-400 hover:text-primary-500 transition-colors"
                  >
                    contact@carolinamoldings.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 p-6 bg-steel-800/50 border border-steel-700/50 rounded-lg">
              <h3 className="font-display text-lg font-semibold text-white mb-3">
                Business Hours
              </h3>
              <div className="space-y-2 text-steel-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">9:00 AM - 3:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 lg:p-10 shadow-xl">
            <h3 className="font-display text-2xl font-bold text-steel-900 mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-steel-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded-lg text-steel-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-steel-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded-lg text-steel-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-steel-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded-lg text-steel-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-steel-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded-lg text-steel-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Product inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-steel-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded-lg text-steel-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                Send Message
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
