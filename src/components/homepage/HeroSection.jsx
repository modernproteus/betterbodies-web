import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Star, ArrowRight, CalendarDays } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function HeroSection({ heroImage }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#0f0f0f]" id="hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="CPR hands-on training at Better Bodies TX Austin"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/70 via-[#0f0f0f]/60 to-[#0f0f0f]" />
      </div>

      {/* Red accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="relative px-5 pt-28 pb-16 md:pt-36 md:pb-24 max-w-3xl mx-auto">

        {/* Brand mark */}
        <div className="mb-7">
          <BrandLogo size="lg" />
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-md px-3 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Austin, Texas</span>
        </div>

        {/* H1 */}
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-5">
          CPR Certification<br />
          <span className="text-primary">Classes in Austin</span>
        </h1>

        {/* Supporting line */}
        <p className="text-base md:text-lg text-white/65 mb-8 max-w-xl leading-relaxed">
          AHA-certified CPR and BLS training for individuals, healthcare workers, teachers, and childcare providers. Get certified in one session — no experience required.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <Button
            size="lg"
            onClick={() => scrollTo("#services")}
            className="bg-primary hover:bg-primary/90 text-white text-base px-7 h-13 rounded-md font-bold shadow-lg shadow-primary/25 flex items-center gap-2"
          >
            Book Your CPR Class
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#urgency")}
            className="border-white/20 text-white hover:bg-white/8 text-base px-7 h-13 rounded-md font-medium flex items-center gap-2"
          >
            <CalendarDays className="w-4 h-4" />
            View Schedule
          </Button>
        </div>

        {/* Trust micro-bar */}
        <div className="flex flex-wrap gap-x-7 gap-y-2.5 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span>AHA Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>Same-Week Classes</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span>5.0 Google Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}