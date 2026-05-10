import React from "react";
import { HeartPulse, ShieldCheck, Dumbbell, Users } from "lucide-react";
const movementImage = `${
  import.meta.env.BASE_URL
}assets/images/placeholders/training-motion.jpg`;
export default function MovementStrip() {
  const items = [
    { icon: HeartPulse, label: "CPR" },
    { icon: ShieldCheck, label: "BLS + AED" },
    { icon: Dumbbell, label: "Self-Defense" },
    { icon: Users, label: "Group Training" },
  ];
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30
  motion-parallax"
        style={{ backgroundImage: `url(${movementImage})` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-3xl reveal-on-scroll">
          <p className="text-sm font-bold uppercase tracking-wide text-red-400">
            Training in Motion
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
            Hands-on. Practical. Ready.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            BetterBodies is built around movement, repetition, coaching, and
            confidence. The goal is not just to pass a class — it is to be ready
            when the moment calls for action.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key="{item.label}"
                className="reveal-on-scroll rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur"
              >
                <Icon className="h-7 w-7 text-red-400" />
                <p className="mt-4 text-xl font-extrabold">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
