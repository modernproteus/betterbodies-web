import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Registered Nurse",
    text: "Best BLS renewal I've done. Small group, real practice time, and I was out in under 4 hours. Will be back.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Gym Owner, East Austin",
    text: "They came to our gym and trained our whole staff on-site. Professional, flexible, and the team actually enjoyed it.",
    rating: 5,
  },
  {
    name: "Linda K.",
    role: "Elementary School Teacher",
    text: "Easy to book, close to home, and the instructor was great. I finally feel confident I could help in an emergency.",
    rating: 5,
  },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-white/15"}`} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#111111] px-5 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Real Reviews</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white">
            What Austin Says
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col bg-[#1a1a1a] border border-white/8 rounded-lg p-6"
            >
              <Stars rating={t.rating} />
              <p className="text-white/70 text-sm leading-relaxed mt-4 mb-5 flex-1">
                "{t.text}"
              </p>
              <div className="pt-4 border-t border-white/8">
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          Reviews sourced from Google · 5.0 average rating
        </p>
      </div>
    </section>
  );
}