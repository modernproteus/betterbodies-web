import React from "react";
import { Stethoscope, GraduationCap, Baby, Dumbbell, Building2, Church } from "lucide-react";

const audiences = [
  { icon: Stethoscope, label: "Healthcare Professionals" },
  { icon: GraduationCap, label: "Teachers & Schools" },
  { icon: Baby, label: "Childcare Providers" },
  { icon: Dumbbell, label: "Gyms & Fitness Studios" },
  { icon: Building2, label: "Businesses & Offices" },
  { icon: Church, label: "Churches & Community Orgs" },
];

export default function WhoWeServe() {
  return (
    <section className="bg-[#f7f7f7] px-5 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Who We Serve</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#111]">
            Built for Austin's Community
          </h2>
          <p className="text-[#666] text-sm mt-3 max-w-md mx-auto">
            Whether you need a single certification or training for your entire team, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {audiences.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#e8e8e8] hover:border-primary/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-semibold text-[#222] leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}