import Hero from './components/hero/hero';
import ContactUs from "@app/home/components/contact-us/contact-us";
import OfferedCourses from './components/courses/offered-courses';

export default function Programs() {
  return (
    <>
    <Hero/>
      <OfferedCourses/>
      <ContactUs/>
    </>
  );
}
