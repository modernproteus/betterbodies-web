import React from "react";
import Navbar from "../components/homepage/Navbar";
import HeroSection from "../components/homepage/HeroSection";
import TrustStrip from "../components/homepage/TrustStrip";
import ServicesCards from "../components/homepage/ServicesCards";
import AboutSection from "../components/homepage/AboutSection";
import CertificationsSection from "../components/homepage/CertificationsSection";
import WhoWeServe from "../components/homepage/WhoWeServe";
import Testimonials from "../components/homepage/Testimonials";
import UrgencyCTA from "../components/homepage/UrgencyCTA";
import FAQSection from "../components/homepage/FAQSection";
import ContactForm from "../components/homepage/ContactForm";
import FooterCTA from "../components/homepage/FooterCTA";
import StickyBookingBar from "../components/homepage/StickyBookingBar";
import CommunityResource from "../components/homepage/CommunityResource";
const HERO_IMAGE = "/images/hero-cpr-training-austin.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] pb-20 md:pb-0">
      <Navbar />

      <div id="hero">
        <HeroSection heroImage={HERO_IMAGE} />
      </div>

      <TrustStrip />

      <div id="services">
        <ServicesCards />
      </div>

      <AboutSection />

      <CertificationsSection />

      <WhoWeServe />

      <Testimonials />

      <div id="urgency">
        <UrgencyCTA />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <CommunityResource />

      <ContactForm />

      <FooterCTA />
      <StickyBookingBar />
    </div>
  );
}
