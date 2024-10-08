import classes from "./about-us.module.css";
import TextIcon from "@assets/icons/text-icon.svg";

const AboutUs: React.FC = () => {
  return (
    <section className={classes.aboutUsContainer}>
      <div className={classes.headerContainer}>
        <h3 className={classes.aboutUsHeader}>About Us</h3>
        <h3 className={classes.aboutUsDescription}>
          Short Title about What We Do
        </h3>
      </div>
      <div className={classes.aboutUsContentContainer}>
        <div className={classes.aboutUsContent}>
          <div className={classes.textIcon}>
          <TextIcon />
          </div>
          <p className={classes.aboutUstext}>Lorem ipsum ( Title )</p>
          <p className={classes.aboutUsDescription}>
            Short Description of Title
          </p>
        </div>
        <div className={classes.aboutUsContent}>
        <div className={classes.textIcon}>
          <TextIcon />
          </div>
          <p className={classes.aboutUstext}>Lorem ipsum ( Title )</p>
          <p className={classes.aboutUsDescription}>
            Short Description of Title
          </p>
        </div>
        <div className={classes.aboutUsContent}>
        <div className={classes.textIcon}>
          <TextIcon />
          </div>
          <p className={classes.aboutUstext}>Lorem ipsum ( Title )</p>
          <p className={classes.aboutUsDescription}>
            Short Description of Title
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
