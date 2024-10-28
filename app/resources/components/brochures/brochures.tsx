import styles from "./brochures.module.css";
import TileWidget from "./tile-widget/tile-widget";
import LowTemperature from "../../assets/images/low-temperature.png";
import TimeToSaveAndEarn from "../../assets/images/time-to-save-and-earn.png";
import ReimaginingWaste from "../../assets/images/reimagining-waste.png";
import SolutionsForSanitaryWaste  from "../../assets/images/solutions-for-sanitary-waste.png";
import CorporateWasteMgmt from "../../assets/images/corporate-waste-mgmt.png";

const Brochures: React.FC = () => {
   const courses = [
      {
        imageSrc: LowTemperature,
        title: "Low Temperature\nThermal Destroyer",
        description: "10 Pages.",
       
      },
      {
        imageSrc: TimeToSaveAndEarn,
        title: "Time to Save & Earn with a\nSolar Rooftop",
        description: "10 Pages.",
      
      },
      {
        imageSrc: ReimaginingWaste,
        title: "E-waste Social\nRe-imagining wastes",
        description: "10 Pages.",
       
      },
      {
        imageSrc: SolutionsForSanitaryWaste,
        title: "Solutions for Sanitary Waste\nRecycling and Disposal",
        description: "10 Pages.",
       
      },
      {
        imageSrc: CorporateWasteMgmt,
        title: "Corporate Waste Management\n& Sustainability Training Course",
        description: "10 Pages.",
      },
    
    ];
    
   return (<div className={styles.parentContainer}>
    <h1 className={styles.pageHeader}>Resources</h1>
    <div className={styles.gridWrapper}>
    <h5 className={styles.header}>Brochures</h5>
    <div className={styles.divider}></div>
    
     <div className={styles.gridContainer}>
        {courses.map((course, index) => (
          <TileWidget
            key={index}
            imageSrc={course.imageSrc}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
      </div>
   </div>)
};

export default Brochures;