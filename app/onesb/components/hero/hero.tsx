
import Image from "next/image";
import GridLines from "../../assets/icons/gridlines.svg";
import HeroIcon from "../../assets/icons/hero.svg";
import OnesbIcon from "../../assets/images/onesbicon.png";
import styles from "./hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={styles.contentContainer}>
      <GridLines className={styles.grids} />
      <div className={styles.topRightIcon}>
        <Image className={styles.onesbIcon} src={OnesbIcon} alt="One School of Business Icon" />
      </div>
      <div className={styles.textContainer}>
        <h2>
          One School of Business: Sustainability <br />
          Leadership Training for<br/>MBA Graduates
        </h2>
      </div>
      <div className={styles.descriptionContainer}>
        <p>Equip future leaders with the skills to drive 
sustainability. In partnership with One School of 
Business, our program offers MBA graduates the 
tools and coaching needed to excel in sustainability
roles and managerial success across industries.</p>
       
      </div> 
      <HeroIcon className={styles.heroIcon}/>
    </div>
  );
};

export default Hero;
