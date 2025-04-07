"use client";

import { useRouter } from "next/navigation";
import classes from "./hero.module.css";
import CenterImage from "../../assets/images/photo (1).png";
import RightImage from "../../assets/images/photo.png";
import Image from "next/image";

const Hero: React.FC = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/programs");
  };

  return (
    <main className={classes.heroContainer}>
       
        <Image src={RightImage} alt="" className={classes.floatingSvg}></Image>
       
       
      {/* Left Rounded Background */}
      <div className={classes.leftSection}>
        <div className={classes.roundedBackground}></div>
      
        <div className={classes.leftText}>
          <h1>Young Guardians of the Planet</h1>
          <p>A Sustainability Learning Experience for Teens (Ages 14–17)</p>
        </div>
       
        </div>
        
      

      {/* Right Section */}
      <div className={classes.rightSection}>
      <Image src={CenterImage} alt="" className={classes.rightSvg}></Image> 

        <div className={classes.rightText}>
          <h2>Start now, at home.</h2>
          <p>Empowering the next generation of change makers to build a cleaner, greener, and more resilient world.</p>
          <button onClick={handleNavigation}>Register</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
