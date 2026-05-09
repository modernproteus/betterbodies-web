import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, AlertTriangle, Shield, Heart, ArrowRight, RotateCcw } from "lucide-react";

const classes = [
  {
    icon: Eye,
    title: "Self Awareness",
    tag: "Foundational",
    front: "Recognize danger before it reaches you. This class builds the mental framework to read environments, people, and situations with clarity and calm.",
    back: "Learn threat recognition, situational awareness principles, and how to make faster, smarter decisions under pressure. Practical. Real-world. No fluff.",
    audience: "Individuals, professionals, community members",
  },
  {
    icon: AlertTriangle,
    title: "Crisis Management & Nonviolent De-escalation",
    tag: "Professional",
    front: "Stay in control when things get tense. This course equips you to manage high-stress situations without escalating to violence.",
    back: "De-escalation language, body language tactics, conflict resolution frameworks, and safe exit strategies. Built for workplaces, educators, and community leaders.",
    audience: "Educators, healthcare workers, social workers, managers",
  },
  {
    icon: Shield,
    title: "Self Defense",
    tag: "Hands-On",
    front: "Practical self-defense for real life — not sport. Build confidence and capability to protect yourself and those around you.",
    back: "Technique-based instruction covering awareness, avoidance, and physical response. Every skill is taught in context, not just in isolation.",
    audience: "All fitness levels welcome",
  },
];

function FlipCard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-72 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-lg border border-white/10 bg-[#1a1a1a] p-6 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-11 h-11 rounded-md bg-primary/15 flex items-center justify-center mb-4 flex-shrink-0">
            <card.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">{card.tag}</span>
          <h3 className="font-heading text-white font-bold text-lg leading-snug mb-3">{card.title}</h3>
          <p className="text-white/55 text-sm leading-relaxed flex-1">{card.front}</p>
          <div className="flex items-center gap-1.5 mt-4 text-white/30 text-xs">
            <RotateCcw className="w-3 h-3" />
            <span>Tap to learn more</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-lg border border-primary/40 bg-[#1e1212] p-6 flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2">{card.title}</span>
          <p className="text-white/80 text-sm leading-relaxed flex-1">{card.back}</p>
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-white/35 text-xs">{card.audience}</p>
          </div>
          <div className="flex items-center gap-1.5 mt-3 text-white/30 text-xs">
            <RotateCcw className="w-3 h-3" />
            <span>Tap to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesCards() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#111111] px-5 py-16 md:py-24" id="services">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">What We Teach</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
            Classes Built for Real Life
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-md mx-auto">
            Tap any card to see what's inside each class. Every course is hands-on, practical, and taught by a certified instructor.
          </p>
        </div>

        {/* Flip cards */}
        <div className="grid gap-5 md:grid-cols-3 mb-8">
          {classes.map((c) => (
            <FlipCard key={c.title} card={c} />
          ))}
        </div>

        {/* CPR/BLS supporting strip */}
        <div className="flex items-center gap-4 bg-[#181818] border border-white/8 rounded-lg px-5 py-4 mb-10">
          <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">CPR / BLS Certification</p>
            <p className="text-white/45 text-xs mt-0.5">
              AHA-certified CPR and Basic Life Support — available for individuals, healthcare workers, and groups.
            </p>
          </div>
          <span className="text-primary text-xs font-bold uppercase tracking-wider hidden sm:block">AHA Certified</span>
        </div>

        {/* Single CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white font-bold text-base px-10 h-13 rounded-md shadow-lg shadow-primary/20 inline-flex items-center gap-2"
          >
            Inquire or Book a Class
            <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="text-white/35 text-xs mt-3">No pressure. We'll help you find the right class.</p>
        </div>
      </div>
    </section>
  );
}