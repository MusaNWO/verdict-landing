import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import Mechanics from "@/components/Mechanics";
import ProSplit from "@/components/ProSplit";
import Teams from "@/components/Teams";
import Pricing from "@/components/Pricing";
import Quotes from "@/components/Quotes";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import LandingEffects from "@/components/LandingEffects";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Mechanics />
      <ProSplit />
      <Teams />
      <Pricing />
      <Quotes />
      <FinalCta />
      <Footer />
      <LandingEffects />
    </>
  );
}
