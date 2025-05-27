import { Metadata } from 'next';
import TermsAndCondition from './components/terms-and-conditions';

export default function TermsAndConditions() {
  return (
    <>
      <TermsAndCondition />
    </>
  );
}
  

export const metadata: Metadata = {
  metadataBase:  new URL('https://ewslearning.com/terms-and-conditions'),
  title: 'EWS Learning | Young Guardians of The Planet',
  description: "Empowering Sustainable Futures through Environmental Education & Corporate Sustainability",
  keywords: "ews learning, ewslearning, ews resources, EWS Learning, ews learn, young guardians of planet"
}