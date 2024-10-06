import React from "react";
import Hero from "@lib/components/hero/hero";
import AboutUs from "@lib/components/about-us/about-us";
import ContactUs from "@lib/components/contact-us/contact-us";

export default function Home() {
  return (
    <>
      <Hero />
      <ContactUs />
      <AboutUs />
    </>
  );
}
