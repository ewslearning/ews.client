
import ContactUs from "@app/home/components/contact-us/contact-us";
import type { Metadata } from 'next'
import Hero from "./components/hero/hero";
import Overview from "./components/program-overview/overview";


export default function Services() {
  return (
    <>
    <Hero/>
    <Overview/>
    <ContactUs/>
    </>
  );
}
  

export const metadata: Metadata = {
  metadataBase:  new URL('https://ewslearning.com/onesb'),
  title: 'EWS Learning | One Sb',
  description: "Empowering Sustainable Futures through Environmental Education & Corporate Sustainability",
  keywords: "ews learning, ewslearning, ews resources, EWS Learning, ews learn"
}