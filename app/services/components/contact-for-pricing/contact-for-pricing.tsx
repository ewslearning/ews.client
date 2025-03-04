import styles from "./contact-for-pricing.module.css";
import {
    ArrowRight,
  } from "lucide-react"

const ContactForPricing: React.FC = () => {
   return (
   <div>
    <section id="contact" className={styles.contactSection}>
   <div className={styles.container}>
      <div className={styles.grid}>
         <div className="space-y-4">
            <h2 className={styles.heading}>
               Ready to Optimize Your Waste Management?
            </h2>
            <p className={styles.description}>
               Contact us today to discuss your waste audit needs and receive a customized quote.
            </p>
         </div>
         <div className={styles.buttonContainer}>
            <button className={styles.button}>
               Contact for Pricing <ArrowRight className="h-4 w-4" />
            </button>
         </div>
      </div>
   </div>
</section>
</div>);
}



export default ContactForPricing;