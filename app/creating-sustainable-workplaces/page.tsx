
import ContactUs from "@app/home/components/contact-us/contact-us";
import type { Metadata } from 'next'
import BlogWidget from "./components/blog/blog";
import Blog1Img from "../resources/assets/images/blog1.png";


export default function CreatingSustainableWorkplaces() {
  return (
    <>
    <BlogWidget imageSrc={Blog1Img} title="Creating Sustainable Workplaces: A Path to 
Environmental Responsibility"/>
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