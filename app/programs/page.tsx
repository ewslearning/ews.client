import Hero from './components/hero/hero';
import ContactUs from "@app/home/components/contact-us/contact-us";
import OfferedCourses from './components/courses/offered-courses';
import FeedBack from './components/feedback/feedback';

export default function Programs() {
  return (
    <>
    <Hero/>
      <OfferedCourses/>
      <FeedBack/>
      <ContactUs/>
    
    </>
  );
}
