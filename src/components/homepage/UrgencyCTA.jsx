import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarClock, Users, ArrowRight } from "lucide-react";

export default function UrgencyCTA() {
  return (
    <section className="bg-primary px-5 py-16 md:py-24" id="urgency">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-md px-3 py-1.5 mb-6">
          <CalendarClock className="w-4 h-4 text-white" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">Limited Spots Available</span>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
          Next CPR Class: This Saturday
        </h2>
        <p className="text-white/75 text-base mb-8 leading-relaxed max-w-md mx-auto">
          Weekend classes fill up fast. Reserve your seat now and walk out certified before the end of the week.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-primary font-bold text-base h-13 px-8 rounded-md shadow-lg"
          >
            Book Your Spot
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 text-base h-13 px-8 rounded-md font-semibold"
          >
            <Users className="w-4 h-4 mr-2" />
            Contact for Group Training
          </Button>
        </div>

        <p className="text-white/50 text-xs mt-6">
          From $65 · AHA certification included · Same-day card issued
        </p>
      </div>
    </section>
  );
}