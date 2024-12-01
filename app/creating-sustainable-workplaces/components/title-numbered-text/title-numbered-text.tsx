import React from "react";
import styles from "./title-numbered-text.module.css"; 

interface Sentence {
  heading: string;
  text: string;
}

interface NumberedListProps {
  title: string;
  description?: string;
  sentences: Sentence[];
  footNote?: string;
}

const NumberedList: React.FC<NumberedListProps> = ({ title, description, sentences, footNote }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <ol className={styles.list}>
        {sentences.map((sentence, index) => (
          <li key={index} className={styles.listItem}>
            <strong className={styles.heading}>{sentence.heading}&nbsp;:&nbsp;</strong>{" "}
            <span className={styles.text}>{sentence.text}</span>
          </li> 
        ))}
      </ol>
      <p className={styles.description}>{footNote}</p>
    </div>
  );
};

export default NumberedList;
