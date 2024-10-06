import Link from "next/link";
import classes from "./contact-us.module.css";
import ToLeft from "@assets/icons/to-left.svg";
const ContactUs: React.FC = () => {
  return (
    <section className={classes.contactUsContainer}>
      <div className={classes.contactUsContent}>
        <p className={classes.contactUstext}>
          We&apos;re excited to hear from you! Whether you have questions about
          our programs, certifications, or potential collaborations, please fill
          out the form, and we'll get back to you as soon as possible.
        </p>
        <Link href="#" className={classes.contactUs}>
          <h1 className={classes.contactUsLinkText}>Contact Us</h1>
          <ToLeft className={classes.goToLeftMweb} />
        </Link>
      </div>
      <ToLeft className={classes.goToLeftDesktop} />
    </section>
  );
};

export default ContactUs;
