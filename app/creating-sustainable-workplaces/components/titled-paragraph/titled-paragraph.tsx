
import React from "react";
import styles from "./titled-paragraph.module.css"; 

interface TitledParaProps {
  heading: string;
  text: string;
}

const TitledPara: React.FC<TitledParaProps> = ({ heading,  text }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{heading}</h1>
      <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}/>
     
    </div>
  );
};

export default TitledPara;
