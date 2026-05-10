import React from "react";
import { BadgeCheck, Shield, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/useUpcomingClasses";

const sheldonImage = `${
  import.meta.env.BASE_URL
}assets/images/sheldon/Sheldon.png`;

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative reveal-on-scroll">
            <div className="absolute -inset-4 rounded-[2rem] bg-red-600/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl">
              <img
                src={sheldonImage}
                alt="Sheldon Williams, BetterBodies TX instructor"
                className="h-full min-h-[420px] w-full object-cover"
                loading="lazy"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-red-300">
                  Meet Sheldon
                </p>
                <p className="mt-1 text-xl font-extrabold text-white">
                  The man with the plan behind BetterBodies.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll">
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">
              Founder-Led Training
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
              Practical training from an instructor who knows how to keep people
              engaged.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              BetterBodies is built around hands-on instruction, real-world
              confidence, and community-centered preparedness. Sheldon brings
              energy, clarity, and practical coaching to every class so people
              leave knowing what to do when it matters.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <BadgeCheck className="h-6 w-6 text-red-600" />
                <p className="mt-3 font-extrabold text-slate-950">Certified</p>
                <p className="mt-1 text-sm text-slate-600">
                  CPR, BLS, AED, and safety-focused instruction.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Shield className="h-6 w-6 text-red-600" />
                <p className="mt-3 font-extrabold text-slate-950">Prepared</p>
                <p className="mt-1 text-sm text-slate-600">
                  Skills people can use in real emergencies.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Users className="h-6 w-6 text-red-600" />
                <p className="mt-3 font-extrabold text-slate-950">Community</p>
                <p className="mt-1 text-sm text-slate-600">
                  Training for individuals, teams, schools, and groups.
                </p>
              </div>
            </div>

            <Button
              className="mt-8 bg-red-600 hover:bg-red-700"
              onClick={() => scrollToSection("#contact")}
            >
              Request Class Info
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
