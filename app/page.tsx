import AboutUs from "@/components/Sections/AboutUs";
import Hero from "@/components/Sections/Hero";
import Price from "@/components/Sections/Price";
import Sell from "@/components/Sections/Sell";
import Video from "@/components/Sections/Video";
import React from "react";
import { FooterSection } from "@/components/Sections/Footer";

const page = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Sell />
      <Price />
      <Video />
      <FooterSection />
    </main>
  );
};

export default page;
