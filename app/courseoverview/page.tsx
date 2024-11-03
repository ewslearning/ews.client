
import ContactUs from "@app/home/components/contact-us/contact-us";
import CourseDescription from "./components/course-description";
import Hero from "./components/hero/hero";
import { Suspense } from "react";

export default function Courseoverview() {
  return (
    <>
      <Hero/>
      <Suspense fallback={<div>Loading...</div>}>
    <CourseDescription />
  </Suspense>
      <ContactUs/>
    </>
  );
}
