import Link from "next/link";
import classes from "./contact-us.module.css";
import ToLeft from "@assets/icons/to-left.svg";


type ContactUsVariants = "primary" | "secondary" ;

interface ContactUsProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: ContactUsVariants;
}
const ContactUs: React.FC<ContactUsProps> = ({
  variant = "primary",
}) => {
  return (
    <section className={  variant === "primary" ? classes.contactUsContainer : classes.contactUsContainerSecondary}>
      <div className={classes.contactUsContent}>
        <p className={classes.contactUstext}>
          We&apos;re excited to hear from you! Whether you have questions about
          our programs, certifications, or potential collaborations, please fill
          out the form, and we&apos;ll get back to you as soon as possible.
        </p>
        <Link href="/contact" className={classes.contactUs}>
          <h1 className={classes.contactUsLinkText}>Contact Us</h1>
          <ToLeft className={classes.goToLeftMweb} />
        </Link>
      </div>
      <Link href="/contact"><ToLeft className={classes.goToLeftDesktop} /></Link>
    </section>
  );
};

export default ContactUs;
