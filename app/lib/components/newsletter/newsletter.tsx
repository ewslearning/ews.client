import Button from "@components/common/button/button";
import classes from "./newsletter.module.css";

export const Newsletter = () => {
  return (
    <article className={classes.newsletterContainer}>
      <h1 className={classes.header}>Stay Updated with Our Newsletter</h1>
      <p className={classes.description}>
        Sign up to receive the latest news, updates, and exclusive insights from
        our team. Be the first to know about our programs, certifications, and
        collaborations!
      </p>
      <form>
        <p>Form Here</p>
      </form>

      <p className={classes.disclamer}>
        By Clicking Submit you agree I agree to receive email communications
        from [Your Organization Name].I understand that I can unsubscribe at any
        time.
      </p>

      <Button variant="secondary">Submit</Button>
    </article>
  );
};

export default Newsletter;
