
import styles from "./hero.module.css";

const Hero: React.FC = () => {
   return (<div className={styles.parentContainer}>
      <h1 className={styles.heading}>Corporate Waste Management<br/>
      & Recycling Policies</h1>
      <p className={styles.description}>Empower your organization with tailored waste management solutions that align with
your environmental goals. Our packages cater to diverse needs, from foundational setups
 to comprehensive strategies, ensuring sustainable practices and compliance with 
global standards.</p>
   </div>)
};

export default Hero;