import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Self Awareness Class",
  "Crisis Management & Nonviolent De-escalation",
  "Self Defense",
  "CPR / BLS Certification",
  "Group Training / On-Site Training",
  "Not Sure — Help Me Choose",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — wire up to backend or form service when ready
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-[#111111] px-5 py-16 md:py-24" id="contact">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-heading text-2xl font-extrabold text-white mb-2">We Got Your Message</h2>
          <p className="text-white/55 text-sm">Sheldon will be in touch shortly to help you find the right class.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#111111] px-5 py-16 md:py-24" id="contact">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
            Inquire or Book a Class
          </h2>
          <p className="text-white/50 text-sm mt-3">
            Fill out the form and Sheldon will reach out to confirm details and get you registered.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-primary/60 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-primary/60 transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
              Phone (optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(512) 555-0000"
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-primary/60 transition-colors"
            />
          </div>

          {/* Service dropdown */}
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
              I'm Interested In <span className="text-primary">*</span>
            </label>
            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/60 transition-colors appearance-none cursor-pointer"
              style={{ colorScheme: "dark" }}
            >
              <option value="" disabled>Select a class or service…</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
              Questions or Notes
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Group size, scheduling questions, anything else…"
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-primary/60 transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-base h-13 rounded-md shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-2"
          >
            Send Inquiry
            <ArrowRight className="w-4 h-4" />
          </Button>

          <p className="text-white/25 text-xs text-center">
            No spam. We'll only contact you about your inquiry.
          </p>
        </form>
      </div>
    </section>
  );
}