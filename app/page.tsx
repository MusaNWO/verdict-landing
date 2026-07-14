import Nav from "@/components/Nav";
import Drifters from "@/components/Drifters";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Mechanics from "@/components/Mechanics";
import ProSplit from "@/components/ProSplit";
import Teams from "@/components/Teams";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Quotes from "@/components/Quotes";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import LandingEffects from "@/components/LandingEffects";

export default function Page() {
  return (
    <>
      <Drifters />
      <div className="grain" aria-hidden />
      <Nav />
      <Hero />
      <StatsBar />
      <Marquee />
      <HowItWorks />
      <Mechanics />
      <ProSplit />
      <Teams />
      <Pricing />
      <Comparison />
      <Quotes />
      <Faq />
      <FinalCta />
      <Footer />
      <LandingEffects />
    </>
  );
}
