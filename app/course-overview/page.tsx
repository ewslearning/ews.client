
import ContactUs from "@app/home/components/contact-us/contact-us";
import CourseDescription from "./components/course-description";
import { Suspense } from "react";

export default function Courseoverview() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
    <CourseDescription />
  </Suspense>
  
      <ContactUs variant={"secondary"}/>
    </>
  );
}
