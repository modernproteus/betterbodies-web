import React from "react";
import { Swords, Dumbbell } from "lucide-react";

const items = [
  {
    icon: Swords,
    title: "CPR + Self-Defense",
    text: "Unique combo classes that pair life-saving CPR skills with personal safety basics. Only at Better Bodies TX.",
  },
  {
    icon: Dumbbell,
    title: "CPR + Fitness Integration",
    text: "We teach CPR in a fitness-first environment. High energy, high retention — and you'll actually remember what you learned.",
  },
];

export default function Differentiators() {
  return (
    <section className="bg-[#f7f7f7] px-5 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Only at Better Bodies TX</p>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#111]">
            Something Extra, If You Want It
          </h2>
          <p className="text-[#666] text-sm mt-2 max-w-sm mx-auto">
            CPR certification is our core offer. These are optional add-ons for those who want to go further.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 items-start p-5 bg-white rounded-lg border border-[#e8e8e8] border-l-4 border-l-primary"
            >
              <div className="w-10 h-10 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#111] text-sm mb-1">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}