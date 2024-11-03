
import classes from "./our-partners.module.css";
import Onesb from "@assets/images/onesb.png";
import Hkbk from "@assets/images/hkbk.png";
import Image from "next/image";

const OurPartners: React.FC = () => {
  return (
    <section className={classes.ourPartnersContainer}>
      <div className={classes.headerContainer}>
        <h4 className={classes.subHeaderText}>
        At EWS, we value our collaboration and are 
        committed to driving sustainability together
        </h4>
        <h1 className={classes.headerText}>Our Partners</h1>
      </div>
      <div className={classes.companiesContainer}>
        <div className={classes.image1}>
        <Image src={Onesb} alt="one school of business"  />
        <div className={classes.companyName}>ONESB</div>
        </div>
        <div className={classes.image2} >
        <Image src={Hkbk} alt="hkbk college of engineering" />
        <div className={classes.companyName}>HKBK College of Engineering</div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
