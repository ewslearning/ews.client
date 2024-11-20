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
  function addProductJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "EWS Learning",
      "image": [],
      "description": "Empowering Sustainable Futures through Environmental Education & Corporate Sustainability.",
      "sku": "0446310786",
      "mpn": "925872",
      "brand": {
        "@type": "Brand",
        "name": "ACME"
      },
    }
  `,
    };
  }
  return (
    <>
    <Head>
      <title>EWS Learning</title>
      <meta name="keywords" content="ews, ewsLearning, ews learning, ews learn" />
      <meta   name="title"  key="title"  property="og:title" content="My Amazing Website" />
        <meta  name="description"  key="desc" property="og:description" content="Empowering Sustainable Futures through Environmental Education & Corporate Sustainability." />
        <meta property="og:url" content="https://ewslearning.com" />
        <meta property="og:type" content="website" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
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
