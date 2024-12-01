import React from "react";
import styles from "./bulleted-numbered-text.module.css";

interface Sentence {
  heading: string;
  text: string[]; 
}

interface NumberedListProps {
  title: string;
  description? : string;
  sentences: Sentence[];
}

const BulletedNumberedList: React.FC<NumberedListProps> = ({ title, description, sentences }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <ol className={styles.list}>
        {sentences.map((sentence, index) => (
          <li key={index} className={styles.listItem}>
            <strong className={styles.heading}>{sentence.heading}</strong>
            <ul className={styles.bulletList}>
              {sentence.text.map((bullet, idx) => (
                <li key={idx} className={styles.bulletListItem}>
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BulletedNumberedList;
