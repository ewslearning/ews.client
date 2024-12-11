
import ContactUs from "@app/home/components/contact-us/contact-us";
import type { Metadata } from 'next'
import Hero from "./components/hero/hero";
import Packages from "./components/packages/packages";


export default function Services() {
  return (
    <>
    <Hero/>
    <Packages/>
    <ContactUs/>
    </>
  );
}
  

export const metadata: Metadata = {
  metadataBase:  new URL('https://ewslearning.com/services'),
  title: 'EWS Learning | Services',
  description: "Empowering Sustainable Futures through Environmental Education & Corporate Sustainability",
  keywords: "ews learning, ewslearning, ews resources, EWS Learning, ews learn"
}