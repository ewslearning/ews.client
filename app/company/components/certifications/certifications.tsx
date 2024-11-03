import Image from "next/image";
import styles from "./certifications.module.css";
import CetificationsImg from "../../assets/images/certifications.png";

const Certifications: React.FC = () => {

    
   return (<div className={styles.parentContainer}>
    <div className={styles.header}>Certifications and Adherence<br/>to Global Standards:</div>
    <Image className={styles.certificationsImg} src={CetificationsImg} alt="Certifications and Adherence"/>
    <p className={styles.paragraph}>As part of our commitment to excellence in waste management and sustainability, we offer a range of certifications that align with global environmental standards. One of the key certifications we provide is ISO 14001, which is an internationally recognized standard for environmental management systems. This certification demonstrates our dedication to minimizing environmental impact, complying with applicable laws and regulations, and continuously improving our sustainability practices.</p>
    <p className={styles.paragraph}>Our certification programs are designed to equip participants with the knowledge and skills needed to implement and maintain effective environmental management systems within their organizations. These certifications are not only a mark of quality but also a valuable asset for companies seeking to enhance their environmental performance and meet global standards.</p>
    <p className={styles.paragraph}>In collaboration with Bangalore University, we ensure that the certifications awarded through our programs are of the highest caliber, reflecting both academic rigor and practical relevance. Participants who complete our certification courses will be recognized for their ability to contribute to sustainable practices and drive positive change within their organizations and communities.</p>
    <p className={styles.paragraph}>By providing these certifications, we empower individuals and organizations to take an active role in promoting environmental sustainability, thereby supporting the achievement of the United Nations Sustainable Development Goals (UN SDGs) and fostering a more responsible and sustainable future.</p>
  
   </div>)
};

export default Certifications;