
import styles from "./testimonials.module.css";
import Map from "@assets/icons/map.svg";
import Image1 from "@assets/images/ajayKushwaha.png";
import Image2 from "@assets/images/prashanth.png";
import Image3 from "@assets/images/abrar.png";
import Clients from "@assets/icons/3Clients.svg";


const Testimonials: React.FC = () => {

  return (
    <section className={styles.reviewsContainer}>
      <div>
       <div className={styles.testimonialText}>TESTIMONIALS</div>
       <div className={styles.headerText}>What Clients<br/>Have To Say About Us</div>
       </div>
      <div className={styles.mapContainer}>
       
         {/* PNG Images with Boxed Text */}
         <div className={`${styles.imageWithText} ${styles.imagePosition1}`} >
          <img src={Image1.src} alt="Image 1" />
          <div className={styles.boxedText}>AJAY KUSHWA </div>
        </div>

        <div className={`${styles.imageWithText} ${styles.imagePosition2}`} >
          <img src={Image2.src} alt="Image 2" />
          <div className={styles.boxedText}>PRASHANTH</div>
        </div>
        {/*3 Clients*/}
        
          <Clients className={styles.clients} />
       

        <div className={`${styles.imageWithText} ${styles.imagePosition3}`} >
          <img src={Image3.src} alt="Image 3" />
          <div className={styles.boxedText}>ABRAR</div>
        </div>

      

        <Map />
      </div>
    </section>
  );
};

export default Testimonials;
