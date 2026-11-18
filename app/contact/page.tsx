"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { SITE } from "@/lib/site-config";
import { createInquiryWhatsAppUrl } from "@/lib/utils";
import { FacebookIcon } from "@/components/Icons";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMsg = subject ? `[${subject}] ${message}` : message;
    const url = createInquiryWhatsAppUrl(name, email, fullMsg);
    setSubmitted(true);
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Get In Touch</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal">
          We&apos;d Love to Hear From You
        </h1>
        <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
          Have questions about shade matching, product authenticity, or bulk orders? Reach out via WhatsApp or visit our Comilla location.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards (Left 5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Card: Phone & WhatsApp */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-primary/15 shadow-soft flex items-start gap-4 hover:shadow-hover transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-charcoal text-base">WhatsApp / Phone</h3>
              <p className="text-xs text-gray-500 mb-2">Instant ordering & customer care</p>
              <div className="space-y-1">
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#128C7E] hover:underline block"
                >
                  {SITE.phone} (WhatsApp Chat)
                </a>
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-xs text-charcoal/70 hover:text-primary block"
                >
                  Direct Call: {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Card: Email */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-primary/15 shadow-soft flex items-start gap-4 hover:shadow-hover transition-all">
            <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-charcoal text-base">Email Support</h3>
              <p className="text-xs text-gray-500 mb-2">For business inquiries & collaborations</p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm font-semibold text-secondary hover:underline"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Card: Address */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-primary/15 shadow-soft flex items-start gap-4 hover:shadow-hover transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blush-200 text-secondary flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-charcoal text-base">Comilla Store</h3>
              <p className="text-xs text-gray-500 mb-2">Our official location</p>
              <p className="text-sm text-charcoal/80 font-medium">
                {SITE.address}
              </p>
            </div>
          </div>

          {/* Card: Social & Hours */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-primary/15 shadow-soft space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <span className="text-xs font-bold text-charcoal block">Business Hours</span>
                <span className="text-xs text-gray-500">
                  Everyday: 9:00 AM &ndash; 10:00 PM (WhatsApp 24/7)
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-charcoal">Follow Our Updates:</span>
              <div className="flex gap-2">
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (Right 7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-primary/15 shadow-soft">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-charcoal/70 mb-6">
              Fill out this form and click send &mdash; it will instantly generate your message and open WhatsApp for an immediate response.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Thank you! WhatsApp has been opened with your inquiry. We will reply to you shortly.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Farhana Ahmed"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-primary text-charcoal"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. farhana@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-primary text-charcoal"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Shade consultation for Foundation / Delivery inquiry"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-primary text-charcoal"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you're looking for or how we can assist you..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm focus:outline-none focus:border-primary text-charcoal resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Open WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
