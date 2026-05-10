import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarClock, Users, ArrowRight } from "lucide-react";
import useUpcomingClasses, {
  buildEventTimeRange,
  formatEventDate,
  scrollToContactWithClass,
  scrollToSection,
} from "@/lib/useUpcomingClasses";

export default function UrgencyCTA() {
  const { nextClass, status } = useUpcomingClasses();

  const hasNextClass = status === "ready" && Boolean(nextClass);

  return (
    <section id="urgency" className="py-16 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-red-400">
                Class Availability
              </p>

              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                {hasNextClass
                  ? `Next ${nextClass.classType || "Training"} Class`
                  : "Upcoming classes are being scheduled"}
              </h2>

              <p className="mt-4 max-w-2xl text-white/70">
                {hasNextClass
                  ? `${
                      nextClass.title || "BetterBodies Training Class"
                    } is scheduled for ${formatEventDate(nextClass.date, {
                      weekday: "long",
                      year: "numeric",
                    })} at ${buildEventTimeRange(nextClass)}.`
                  : "Need CPR, BLS, or group training soon? Send a request and Sheldon will follow up with available class options."}
              </p>

              {hasNextClass && nextClass.locationLabel && (
                <p className="mt-3 text-sm font-semibold text-white/60">
                  Location: {nextClass.locationLabel}
                </p>
              )}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {hasNextClass ? (
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => scrollToContactWithClass(nextClass)}
                >
                  Request This Class
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => scrollToSection("#contact")}
                >
                  Request Class Info
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}

              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => scrollToSection("#schedule")}
              >
                <CalendarClock className="mr-2 h-4 w-4" />
                View Schedule
              </Button>

              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => scrollToSection("#contact")}
              >
                <Users className="mr-2 h-4 w-4" />
                Request Group Training
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
