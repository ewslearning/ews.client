
import type { Metadata } from 'next'
import Hero from "./components/hero/hero";
import Packages from "./components/packages/packages";
import WasteAuditServices from "./components/waste-audit-services/waste-audit-services";
import WasteAuditProcess from "./components/waste-audit-process/waste-audit-process";
import Benefits from "./components/benefits/benefits";
import WhyChooseUs from "./components/why-choose-us/why-choose-us";
import ContactForPricing from "./components/contact-for-pricing/contact-for-pricing";


export default function Services() {
  return (
    <>
    <Hero/>
    <Packages/>
    <WasteAuditServices/>
    <WasteAuditProcess/>
    <Benefits/>
    <WhyChooseUs/>
    <ContactForPricing/>
    </>
  );
}
  

export const metadata: Metadata = {
  metadataBase:  new URL('https://ewslearning.com/services'),
  title: 'EWS Learning | Services',
  description: "Empowering Sustainable Futures through Environmental Education & Corporate Sustainability",
  keywords: "ews learning, ewslearning, ews resources, EWS Learning, ews learn"
}