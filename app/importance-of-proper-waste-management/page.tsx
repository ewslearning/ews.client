
import ContactUs from "@app/home/components/contact-us/contact-us";
import type { Metadata } from 'next'
import BlogWidget from "./components/blog/blog";
import Blog3Img from "../resources/assets/images/blog3.png";


export default function ImportanceOfProperWasteManagement() {
  return (
    <>
    <BlogWidget imageSrc={Blog3Img} title="The Importance of Proper Waste Management: 
Aligning with the Sustainable Development Goals 
(SDGs)"/>
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