import { Navbar } from "../components";
import { AboutUsSection, BetterStrategySection, HeroSection, PricingSection, WhatClientSaySection } from "../components/pages/home";

export const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <BetterStrategySection/>
    <WhatClientSaySection/>
    <AboutUsSection/>
    <PricingSection/>
    </>
  );
};