import styles from "./our-team.module.css";
import CompanyTabComponent from "./tab/tab-component";

const OurTeam: React.FC = () => {

    
   return (<div className={styles.parentContainer}>
    <div className={styles.header}>Our Team</div>
    <p className={styles.description}>Our team is composed of dedicated founders and professionals with 
extensive experience and deep-rooted knowledge in waste management, 
sustainability, corporate governance, and education. Each 
member brings a unique set of skills and 
expertise that drives our initiatives forward.</p>
<CompanyTabComponent/>
   </div>)
};

export default OurTeam;