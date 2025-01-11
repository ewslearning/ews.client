import classes from "./about-us.module.css";
import OurCommitment from "@assets/icons/our-commitment.svg";
import TailoredSolutions from "@assets/icons/tailored-solutions.svg";
import Collab from "@assets/icons/collaborative-partnerships.svg";
import Button from "../common/button/button";

const AboutUs: React.FC = () => {
  return (
    <section className={classes.aboutUsContainer}>
      <div className={classes.headerContainer}>
        <Button className={classes.aboutUsHeader}>About Us</Button>
        <h2 className={classes.aboutUsSubTitle}>
        Leading the Way in Sustainability
        </h2>
      </div>
      <div className={classes.aboutUsContentContainer}>
        <div className={classes.aboutUsContent}>
          <div className={classes.textIcon}>
          <OurCommitment />
          </div>
          <p className={classes.aboutUstext}>Our Commitment</p>
          <p className={classes.aboutUsDescription}>
          We empower businesses to adopt sustainable practices through innovative training and solutions.
          </p>
        </div>
        <div className={classes.aboutUsContent}>
        <div className={classes.textIcon}>
          <TailoredSolutions />
          </div>
          <p className={classes.aboutUstext}>Collaborative Partnerships</p>
          <p className={classes.aboutUsDescription}>
          Partnering with industries and global organizations, we ensure best practices and compliance with sustainability standards.
          </p>
        </div>
        <div className={classes.aboutUsContent}>
        <div className={classes.textIcon}>
          <Collab />
          </div>
          <p className={classes.aboutUstext}>Tailored Solutions</p>
          <p className={classes.aboutUsDescription}>
          Our expertise in waste management and green space development provides customized programs for lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
