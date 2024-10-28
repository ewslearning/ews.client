import React from "react";
import Hero from "@home/components/hero/hero";
import AboutUs from "@home/components/about-us/about-us";
import ContactUs from "@home/components/contact-us/contact-us";
import KeyServices from "@home/components/key-services/key-services";
import OurPartners from "@home/components/our-partners/our-partners";
import Testimonials from "@home/components/testimonials/testimonials";
import Newsletter from "@home/components/newsletter/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <KeyServices />
      <Testimonials />
      <ContactUs />
      <Newsletter />
      <OurPartners />
    </>
  );
}
