
import ContactUs from "@app/home/components/contact-us/contact-us";
import type { Metadata } from 'next'
import BlogWidget from "./components/blog/blog";
import Blog2Img from "../resources/assets/images/blog2.png";


export default function RecyclingAtWorkplace() {
  return (
    <>
    <BlogWidget imageSrc={Blog2Img} title="Recycling at the Workplace: A Small Step Toward 
a Big Change"/>
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