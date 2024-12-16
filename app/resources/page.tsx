
import ContactUs from "@app/home/components/contact-us/contact-us";
import Brochures from "./components/brochures/brochures";
import Blogs from "./components/blogs/blogs";
import type { Metadata } from 'next'


export default function Resources() {
  return (
    <>
    <Blogs/>
    <Brochures/>
    <ContactUs/>
    </>
  );
}
  

export const metadata: Metadata = {
  metadataBase:  new URL('https://ewslearning.com'),
  title: 'EWS Learning | Resources',
  description: "Empowering Sustainable Futures through Environmental Education & Corporate Sustainability",
  keywords: "ews learning, ewslearning, ews resources, EWS Learning, ews learn"
}