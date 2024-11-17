import styles from "./contact-form.module.css";
import Turbine from "../assets/images/turbine.png";
import Solar from "../assets/images/solar.png";
import Turbines from "../assets/images/turbines.png";
import Image from "next/image";
import Form from "./form/form";
import NewsLetter from "./newsletter/newsletter";


const    ContactForm: React.FC = () => {
 
    
   return (<div className={styles.parentContainer}>
      <div className={styles.topImageContainer}>
         <Image src={Turbine} alt="Wind Turbine" className={styles.topImage1}/>
         <Image src={Solar} alt="Solar panels" className={styles.topImage2}/>
         <Image src={Turbines} alt="Wind Turbines" className={styles.topImage3}/>
      </div>

      <div className={styles.contactFormContainer}>
         <div className={styles.headerSectionContainer}>
            <h3 className={styles.heading}>Contact</h3>
            <div className={styles.divider}/>
               <div className={styles.subHeaderContainer}>
                  <div className={styles.usOrContainer}>
                  <h1 className={styles.usText}>US</h1>
                  <div className={styles.orContainer}>OR</div>
                  </div>
                  <div className={styles.emailColumn}>
                      <div className={styles.reachOutText}>reach out vie email</div>
                      <div className={styles.emailText}>alma.lawson@example.com</div>
                  </div>
               </div>
               <div className={styles.divider}/>
               <p className={styles.message}>We&apos;re excited to hear from you! Whether you have questions about our programs, 
               certifications, or potential collaborations, please fill out the form below, and we&apos;ll get back to you as soon as possible.</p>
         </div>
      </div>
      <Form/>
      <NewsLetter/>
   </div>)
};

export default ContactForm;