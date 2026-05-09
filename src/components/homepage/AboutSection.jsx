import React from "react";
import { BadgeCheck, Shield, Users } from "lucide-react";

const credentials = [
  "American Heart Association CPR / BLS Instructor",
  "Executive Protection Specialist — Executive Security LLC",
  "Crisis Management & De-escalation Certified",
  "Self-Defense Instructor — [Certification Placeholder]",
  "Background in Community Safety & Education",
];

export default function AboutSection() {
  return (
    <section className="bg-[#111111] px-5 py-16 md:py-24" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left — Text */}
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">About Your Instructor</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
              Meet Sheldon
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Sheldon is a certified CPR/BLS instructor, executive security professional, and community safety educator based in Austin, Texas. Through Better Bodies TX, he brings practical, no-nonsense training to individuals, families, and organizations who want to be genuinely prepared — not just certified on paper.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              With experience in executive protection through <span className="text-white font-semibold">Executive Security LLC</span> and years of hands-on instruction, Sheldon's approach is direct, competency-focused, and built for real-world situations. His goal is simple: leave every student more aware, more capable, and more confident.
            </p>

            {/* Executive Security badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-md px-4 py-2.5">
              <Shield className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-white/70 text-xs font-semibold">Executive Security LLC</span>
            </div>
          </div>

          {/* Right — Credentials */}
          <div>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-2.5 mb-5">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-white font-bold text-sm uppercase tracking-wider">Credentials & Certifications</span>
              </div>

              <ul className="space-y-3">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/65 text-sm leading-snug">{c}</span>
                  </li>
                ))}
              </ul>

              {/* Placeholder for cert badge images */}
              <div className="mt-6 pt-5 border-t border-white/8">
                <p className="text-white/30 text-xs mb-3 uppercase tracking-wider font-medium">Certification Badges</p>
                <div className="flex gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-14 h-14 rounded-md border border-white/10 bg-white/5 flex items-center justify-center"
                    >
                      <BadgeCheck className="w-5 h-5 text-white/20" />
                    </div>
                  ))}
                </div>
                <p className="text-white/20 text-xs mt-2">Certification badge images — add when available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}