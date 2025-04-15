
import type { Metadata } from 'next';
import OurPartners from '@app/home/components/our-partners/our-partners';

import ContactForPricing from '@app/services/components/contact-for-pricing/contact-for-pricing';
import Hero from './components/hero/hero';
import WhatIsProgram from './components/what-is-this-program/what-is-this-program';
import WhatYoullLearn from './components/what-youll-learn/what-youll-learn';

import Accordion from './components/ui/accord';
import Deliverables from './components/real-world-deliverables/real-world-deliverables';
import DeliverablesCapsules from './components/impact-who-can-use-this';
import ActivitiesImpact from './components/sample-activities-and-impact/sample-activities';
import ImpactCloverSection from './components/your-impact/your-impact';


export default function YoungGuardiansOfThePlanet() {
  return (
    <>
    <Hero/>
     <WhatIsProgram/>
    {/* <LottieParallax/> */}
    <WhatYoullLearn/>
    <Accordion/>
    <Deliverables/>
    <DeliverablesCapsules/>
    <ActivitiesImpact/>
    <ImpactCloverSection/>
    <OurPartners />  
    <ContactForPricing/>
    </>
  );
}
  

export const metadata: Metadata = {
  metadataBase:  new URL('https://ewslearning.com/young-guardians-of-the-planet'),
  title: 'EWS Learning | Young Guardians of The Planet',
  description: "Empowering Sustainable Futures through Environmental Education & Corporate Sustainability",
  keywords: "ews learning, ewslearning, ews resources, EWS Learning, ews learn, young guardians of planet"
}