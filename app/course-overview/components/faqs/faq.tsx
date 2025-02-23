import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import styles from "./faq.module.css";

interface FAQ {
    question: string;
    answer: string;
  }
  
  interface FaqProps {
    faqs: FAQ[];
    onBuyCourse?: () => void;
  }

const Faq: React.FC<FaqProps> = ({ faqs, onBuyCourse }) => {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

   // Track scroll position
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <Accordion transition transitionTimeout={200}>
        {faqs.slice(0, expanded ? faqs.length : 3).map((faq, index) => (
          <AccordionItem key={index} header={faq.question} className={styles.accordionItem}>
            <p className={styles.answer}>{faq.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
      <div className={styles.showMoreContainer}>
        <button className={styles.showMoreButton} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>

      {showButton && (
        <button className={styles.buyCourseButton} onClick={onBuyCourse}>
          Enroll Now
        </button>
      )}
    </div>
  );
};

export default Faq;
