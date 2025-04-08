"use client";
import React, { useState } from "react";
import styles from "./accord.module.css";

interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Interactive Workbooks",
    content: "Engaging digital workbooks with activities, challenges, and reflection prompts to deepen learning.",
  },
  {
    title: "Student Project Template",
    content: "Structured templates to help students plan, execute, and document their sustainability projects.",
  },
  {
    title: "Reflection Journals",
    content: "Personal journals for students to track their learning journey and environmental impact.",
  },
  {
    title: "DIY & Media Projects",
    content: "Hands-on projects and creative media assignments that apply learning to real-world challenges.",
  },
  {
    title: "Digital Certificate",
    content: "Official recognition of achievement that can be shared with schools and on college applications.",
  },
  {
    title: "Peer-to-Peer Feedback",
    content: "Collaborative learning tools that enable students to share ideas and provide constructive feedback.",
  },
  {
    title: "Mentorship Support",
    content: "Guidance from experienced mentors to support students throughout their journey.",
  },
  {
    title: "Curated Resources",
    content: "Access to expert articles, videos, and tools to deepen their understanding of sustainability topics.",
  },
];

const Accordion: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean[]>(Array(accordionData.length).fill(false));

  const toggleAccordion = (index: number) => {
    setExpanded(prev => prev.map((val, i) => (i === index ? !val : val)));
  };

  const firstColumn = accordionData.slice(0, 4);
  const secondColumn = accordionData.slice(4, 8);

  return (
    <section className={styles.accordionSection}>
      <h2 className={styles.heading}>What&apos;s Included</h2>
      <p className={styles.subheading}>Our comprehensive program provides everything you need to succeed</p>
      <div className={styles.columns}>
        <div className={styles.column}>
          {firstColumn.map((item, index) => {
            const actualIndex = index; // same as index in full array
            return (
              <div key={actualIndex} className={styles.accordionItem}>
                <button onClick={() => toggleAccordion(actualIndex)} className={styles.accordionHeader}>
                  {item.title}
                  <span>{expanded[actualIndex] ? "−" : "+"}</span>
                </button>
                {expanded[actualIndex] && <div className={styles.accordionContent}>{item.content}</div>}
              </div>
            );
          })}
        </div>
        <div className={styles.column}>
          {secondColumn.map((item, index) => {
            const actualIndex = index + 4; // offset
            return (
              <div key={actualIndex} className={styles.accordionItem}>
                <button onClick={() => toggleAccordion(actualIndex)} className={styles.accordionHeader}>
                  {item.title}
                  <span>{expanded[actualIndex] ? "−" : "+"}</span>
                </button>
                {expanded[actualIndex] && <div className={styles.accordionContent}>{item.content}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
