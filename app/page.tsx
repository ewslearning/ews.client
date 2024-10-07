import React from "react";
import Hero from "@lib/components/hero/hero";
import AboutUs from "@lib/components/about-us/about-us";
import ContactUs from "@lib/components/contact-us/contact-us";
import KeyServices from "@lib/components/key-services/key-services";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyServices />
      <ContactUs />
      <AboutUs />
    </>
  );
}
