import React from "react";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
const DEBT_RELIEF_URL =
  "https://www.sm.phpdebtsolutions.com/links/1360541/11931";
export default function CommunityResource() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 lg:p-10 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
              <HeartHandshake className="h-7 w-7" aria-hidden="true" />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-red-600">
                Community Resource
              </p>

              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950">
                Debt relief support for people looking for a fresh start
              </h2>

              <p className="mt-3 max-w-3xl text-slate-700">
                Sheldon is also currently working with PHP Agency, in
                partnership with Mediator Debt Solutions. Together, we assist
                individuals in resolving credit card, student loan, medical, and
                other forms of unsecured debt.
              </p>

              <p className="mt-3 max-w-3xl text-sm text-slate-500">
                This is a third-party referral resource and is separate from
                BetterBodies CPR, BLS, and safety training services. Sheldon may
                receive a referral benefit if someone uses the link.
              </p>
            </div>

            <div className="mt-6">
              <a
                href={DEBT_RELIEF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
              >
                <span>Explore Debt Relief Support</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
