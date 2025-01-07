"use client";
import styles from "./blogs.module.css";
import Blog1 from "../../assets/images/blog1.png";
import Blog2 from "../../assets/images/blog2.png";
import Blog3 from "../../assets/images/blog3.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Blogs: React.FC = () => {
 
  const router = useRouter();

  // Function to handle navigation
  const handleNavigation = (path: string) => {
    router.push(path);
  };

   return (<div className={styles.parentContainer}>
    <div className={styles.gridWrapper}>
    <h5 className={styles.header}>Blogs</h5>
    <div className={styles.divider}></div>
    <div className={styles.blogContainer}>
    <Image className={styles.image} src={Blog1} alt="blog" onClick={() => handleNavigation("/creating-sustainable-workplaces")}/>
      <div className={styles.blogItemContainer}>
      <div className={styles.blogTextsContainer}>
        <p className={styles.blogDate}>October 30, 2017</p>
        <Link href={"/creating-sustainable-workplaces"} className={styles.blogTitle}>Creating Sustainable Workplaces: A Path to Environmental Responsibility</Link>
      </div>
      <button className={styles.readMore} onClick={() => handleNavigation("/creating-sustainable-workplaces")}>Read More</button>
    </div></div>

    <div className={styles.blogContainer}>
    <Image className={styles.image} src={Blog2} alt="blog" onClick={() => handleNavigation("/recycling-at-workplace")}/>
    <div className={styles.blogItemContainer}>
      <div className={styles.blogTextsContainer}>
        <p className={styles.blogDate}>October 30, 2017</p>
        <Link href={"/recycling-at-workplace"}  className={styles.blogTitle} >Recycling at the Workplace: A Small Step 
        Toward a Big Change</Link>
       
      </div>
      <button className={styles.readMore} onClick={() => handleNavigation("/recycling-at-workplace")}>Read More</button>
    </div></div>
    
    <div className={styles.blogContainer}>
    <Image className={styles.image} src={Blog3} alt="blog" onClick={() => handleNavigation("/importance-of-proper-waste-management")}/>
    <div className={styles.blogItemContainer}>
      <div className={styles.blogTextsContainer}>
        <p className={styles.blogDate}>October 30, 2017</p>
        <Link href={"/importance-of-proper-waste-management"}  className={styles.blogTitle} >The Importance of Proper Waste Management: Aligning with the Sustainable Development Goals (SDGs)</Link>
       </div>
       <button className={styles.readMore} onClick={() => handleNavigation("/recycling-at-workplace")}>Read More</button>
       </div></div>  
     </div>
     
     
   </div>)
};

export default Blogs;