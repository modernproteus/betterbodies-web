import React from "react";
import { CheckCircle2, CalendarCheck, MapPin, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Hands-On Instruction",
    text: "You practice on real manikins with a certified instructor — not watching videos on a screen.",
  },
  {
    icon: Clock,
    title: "Certified in One Session",
    text: "Most classes run under 4 hours. Walk in without a certification, walk out ready to save a life.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Online Booking",
    text: "See available dates, pick your spot, and pay online in minutes. No back-and-forth, no phone tag.",
  },
  {
    icon: MapPin,
    title: "Local Austin Support",
    text: "We're based in Austin. Real people answer your questions before and after class.",
  },
  {
    icon: Users,
    title: "Group & Team Training",
    text: "We bring training to your workplace, school, or facility. Custom scheduling for any group size.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f7f7f7] px-5 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Why Better Bodies TX</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#111] mb-4">
            Austin's Most Trusted CPR Training
          </h2>
          <p className="text-[#555] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            We keep it simple: practical skills, real instructors, and a booking process that respects your time. No fluff, no filler.
          </p>
        </div>

        <div className="space-y-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-4 items-start p-5 bg-white rounded-lg border border-[#e8e8e8] hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#111] text-sm mb-0.5">{b.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}