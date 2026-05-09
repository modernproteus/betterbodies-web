import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function FooterCTA() {
  return (
    <footer className="bg-[#0f0f0f]">
      {/* Final CTA band */}
      <div className="border-b border-white/8 px-5 py-14 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-10 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-3">
            Ready to Get Certified?
          </h2>
          <p className="text-white/50 text-sm mb-7 max-w-sm mx-auto">
            Join 1,200+ Austin residents certified through Better Bodies TX. Book your class today.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold text-base h-13 px-8 rounded-md shadow-lg shadow-primary/20 inline-flex items-center gap-2"
          >
            Book Your CPR Class
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Footer links */}
      <div className="px-5 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <BrandLogo size="sm" />
            <p className="text-white/40 text-xs mt-1.5">CPR & BLS Certification · Austin, Texas</p>
          </div>
          <div className="flex flex-col gap-2 text-xs text-white/40">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Austin, TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <span>(512) 555-0123</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>info@betterbodies.tx</span>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-6 pt-5 border-t border-white/6 text-center text-xs text-white/25">
          © {new Date().getFullYear()} Better Bodies TX · American Heart Association Training Site · Austin, TX
        </div>
      </div>
    </footer>
  );
}