
import type { Metadata } from 'next';
import OurPartners from '@app/home/components/our-partners/our-partners';

import ContactForPricing from '@app/services/components/contact-for-pricing/contact-for-pricing';
import LottieAnim from './components/lottie';
import Hero from './components/hero/hero';
import WhatIsProgram from './components/what-is-this-program/what-is-this-program';
import WhatYoullLearn from './components/what-youll-learn/what-youll-learn';


export default function YoungGuardiansOfThePlanet() {
  return (
    <>
    <Hero/>
     <WhatIsProgram/>
    {/* <LottieAnim/> */}
    <WhatYoullLearn/>
    
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