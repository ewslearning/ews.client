import styles from "./blogs.module.css";
import Blog1 from "../../assets/images/blog1.png";
import Blog2 from "../../assets/images/blog2.png";
import Blog3 from "../../assets/images/blog3.png";
import Image from "next/image";

const Blogs: React.FC = () => {
 
    
   return (<div className={styles.parentContainer}>
    <div className={styles.gridWrapper}>
    <h5 className={styles.header}>Blogs</h5>
    <div className={styles.divider}></div>
    <div className={styles.blogContainer}>
    <Image className={styles.image} src={Blog1} alt="blog"/>
      <div className={styles.blogTextsContainer}>
        <p className={styles.blogDate}>October 30, 2017</p>
        <h6 className={styles.blogTitle}>Any mechanical keyboard enthusiasts<br/>in design?</h6>
        <button className={styles.readMore}>Read More</button>
      </div>
    </div>

    <div className={styles.blogContainer}>
    <Image className={styles.image} src={Blog2} alt="blog"/>
      <div className={styles.blogTextsContainer}>
        <p className={styles.blogDate}>October 30, 2017</p>
        <h6 className={styles.blogTitle}>The unseen of spending three years<br/>at Pixelgrade</h6>
        <button className={styles.readMore}>Read More</button>
      </div>
    </div>
    
    <div className={styles.blogContainer}>
    <Image className={styles.image} src={Blog3} alt="blog"/>
      <div className={styles.blogTextsContainer}>
        <p className={styles.blogDate}>October 30, 2017</p>
        <h6 className={styles.blogTitle}>How to choose the right customer for your<br/>photo business?</h6>
        <button className={styles.readMore}>Read More</button>
      </div>
    </div>    </div>
     
     
   </div>)
};

export default Blogs;