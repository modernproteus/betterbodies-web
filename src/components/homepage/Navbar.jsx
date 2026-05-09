import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import BrandLogo from "./BrandLogo";

const navLinks = [
  { label: "Classes", href: "#services" },
  { label: "Group Training", href: "#urgency" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b border-white/10">
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("#hero")}>
          <BrandLogo size="sm" />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            onClick={() => scrollTo("#services")}
            className="bg-primary hover:bg-primary/90 text-white rounded-md font-semibold px-5 h-9"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <a href="tel:5125550123" className="p-2 text-white/60 hover:text-white">
            <Phone className="w-5 h-5" />
          </a>
          <button onClick={() => setOpen(!open)} className="p-2 text-white">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111111] border-t border-white/10 overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left text-white/70 hover:text-white py-3 text-base font-medium border-b border-white/5 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("#services")}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-md font-semibold mt-3 h-12"
              >
                Book Your CPR Class
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}