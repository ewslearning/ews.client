import CompanyAboutUs from "@app/company/components/about-us/about-us";
import OurTeam from "@app/company/components/our-team/our-team";
import Certifications from "@app/company/components/certifications/certifications";
import ContactUs from "@app/lib/components/contact-us/contact-us";


export default function Company() {
  return (
    <>
    <CompanyAboutUs/>
    <OurTeam/>
    <Certifications/>
    <ContactUs/>
    </>
  );
}
