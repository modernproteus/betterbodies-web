import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function StickyBookingBar() {
  const scrollTo = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-[#111111]/97 backdrop-blur-md border-t border-white/10 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-bold text-white">CPR Class — From $65</p>
            <p className="text-xs text-white/40">Next class this Saturday</p>
          </div>
          <Button
            onClick={scrollTo}
            className="bg-primary hover:bg-primary/90 text-white rounded-md font-bold px-5 h-11 shadow-lg shadow-primary/25 flex-shrink-0 flex items-center gap-2"
          >
            Book Now
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}