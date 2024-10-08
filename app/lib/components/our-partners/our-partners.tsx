import Image from "next/image";
import classes from "./our-partners.module.css";
import WellsFargoIcon from "@assets/icons/wells-fargo.svg?url";

const OurPartners: React.FC = () => {
  return (
    <section className={classes.ourPartnersContainer}>
      <div className={classes.headerContainer}>
        <h4 className={classes.subHeaderText}>
          Lorem IPSUM Lorem IPSUM Lorem IPSUM
        </h4>
        <h1 className={classes.headerText}>Our Partners</h1>
      </div>
      <div className={classes.companiesContainer}>
        <div className={classes.companyContent}>
          <Image
            src={WellsFargoIcon}
            width={42}
            height={42}
            alt="wells fargo icon"
          />
          <p className={classes.companyText}>Company Name</p>
        </div>
        <div className={classes.companyContent}>
          <Image
            src={WellsFargoIcon}
            width={42}
            height={42}
            alt="wells fargo icon"
          />
          <p className={classes.companyText}>Company Name</p>
        </div>
        <div className={classes.companyContent}>
          <Image
            src={WellsFargoIcon}
            width={42}
            height={42}
            alt="wells fargo icon"
          />
          <p className={classes.companyText}>Company Name</p>
        </div>
        <div className={classes.companyContent}>
          <Image
            src={WellsFargoIcon}
            width={42}
            height={42}
            alt="wells fargo icon"
          />
          <p className={classes.companyText}>Company Name</p>
        </div>
        <div className={classes.companyContent}>
          <Image
            src={WellsFargoIcon}
            width={42}
            height={42}
            alt="wells fargo icon"
          />
          <p className={classes.companyText}>Company Name</p>
        </div>
        <div className={classes.companyContent}>
          <Image
            src={WellsFargoIcon}
            width={42}
            height={42}
            alt="wells fargo icon"
          />
          <p className={classes.companyText}>Company Name</p>
        </div>
        <div className={classes.companyContent}>
          <Image
            src={WellsFargoIcon}
            width={42}
            height={42}
            alt="wells fargo icon"
          />
          <p className={classes.companyText}>Company Name</p>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
