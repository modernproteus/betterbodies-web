import React from "react";
import { ShieldCheck, MapPin, Users } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Certified CPR / BLS Training" },
  { icon: MapPin, label: "Local Austin Provider" },
  { icon: Users, label: "Group Training Available" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#1a1a1a] border-y border-white/8">
      <div className="max-w-4xl mx-auto px-5 py-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {items.map((item, i) => (
            <React.Fragment key={item.label}>
              <div className="flex items-center gap-2.5">
                <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-white/80 whitespace-nowrap">{item.label}</span>
              </div>
              {i < items.length - 1 && (
                <span className="hidden md:block text-white/15 select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}