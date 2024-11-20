import React from "react";
import Hero from "@home/components/hero/hero";
import AboutUs from "@home/components/about-us/about-us";
import ContactUs from "@home/components/contact-us/contact-us";
import KeyServices from "@home/components/key-services/key-services";
import OurPartners from "@home/components/our-partners/our-partners";
import Testimonials from "@home/components/testimonials/testimonials";
import Newsletter from "@home/components/newsletter/newsletter";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>EWS Learning</title>
      <meta name="keywords" content="ews, ewsLearning, ews learning, ews learn" />
      <meta property="og:title" content="My Amazing Website" />
        <meta property="og:description" content="Empowering Sustainable Futures through Environmental Education & Corporate Sustainability." />
        <meta property="og:url" content="https://ewslearning.com" />
        <meta property="og:type" content="website" />

       
      </Head>
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
