"use client";

import classes from "./hero.module.css";
import CenterImage from "../../assets/images/photo (1).png";
import RightImage from "../../assets/images/photo.png";
import Image from "next/image";
import PopupForm from "../register/register";
import { useFormContext } from "../ui/form/form-provider";

const Hero: React.FC = () => {
 

  const { showForm, closeForm, openForm } = useFormContext();

  return (
    <>
      <main className={classes.heroContainer}>
        <Image src={RightImage} alt="" className={classes.floatingSvg} />

        <div className={classes.leftSection}>
          <div className={classes.roundedBackground}></div>

          <div className={classes.leftText}>
            <h1>Young Guardians of the Planet</h1>
            <p>A Sustainability Learning Experience for Teens (Ages 14–17) and Young Adults (Ages 18-22)</p>
          </div>
        </div>

        <div className={classes.rightSection}>
          <Image src={CenterImage} alt="" className={classes.rightSvg} />

          <div className={classes.rightText}>
            <h2>Start now, at home.</h2>
            <p>
              Empowering the next generation of change makers to build a
              cleaner, greener, and more resilient world.
            </p>
            <button onClick={openForm}>Register</button>
          </div>
        </div>
      </main>

      {/* POPUP form */}
      { showForm && <PopupForm isOpen={showForm} onClose={closeForm} />}
    </>
  );
};

export default Hero;
