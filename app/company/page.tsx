import CompanyAboutUs from "@app/company/components/about-us/about-us";
import OurTeam from "@app/company/components/our-team/our-team";
import Certifications from "@app/company/components/certifications/certifications";
import ContactUs from "@app/home/components/contact-us/contact-us";
import OurPartners from "@app/home/components/our-partners/our-partners";


export default function Company() {
  return (
    <>
    <CompanyAboutUs/>
    <OurTeam/>
    <Certifications/>
    <OurPartners/>
    <ContactUs/>
    </>
  );
}
