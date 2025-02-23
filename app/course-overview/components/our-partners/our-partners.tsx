
import classes from "./our-partners.module.css";
import ImageTextMarquee from "./partners/partners";

const OurPartners: React.FC = () => {
  return (
    <section className={classes.ourPartnersContainer}>
      <div className={classes.headerContainer}>
        <h2 className={classes.subHeaderText}>
        Trusted by Businesses Worldwide
        </h2>
        {/* <h1 className={classes.headerText}>Our Partners</h1> */}
      </div>
      <ImageTextMarquee/> 
      {/* <div className={classes.companiesContainer}>
        <div className={classes.image1}>
        <Image src={Onesb} alt="one school of business"  />
        <div className={classes.companyName}>ONESB</div>
        </div>
        <div className={classes.image2} >
        <Image src={Hkbk} alt="hkbk college of engineering" />
        <div className={classes.companyName}>HKBK College of Engineering</div>
        </div>
      </div> */}
    </section>
  );
};

export default OurPartners;
