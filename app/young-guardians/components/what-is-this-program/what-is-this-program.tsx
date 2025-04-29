"use client";

import styles from "./what-is-this-program.module.css";
import { BookOpen, PenTool, Users } from "lucide-react";

const WhatIsProgram: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.heading}>What Is This Program?</h2>
          <p className={styles.description}>
            Young Guardians of the Planet is an 8-module experiential learning journey designed for youth aged
            14–17. Through hands-on activities, project-based learning, digital tools, and real-world challenges,
            students learn how to think sustainably, act responsibly, and lead confidently.
          </p>
          <div className={styles.iconGrid}>
            <div className={styles.iconItem}>
              <div className={styles.iconCircle}>
                <BookOpen className={styles.icon} />
              </div>
              <h3 className={styles.iconLabel}>Experiential Learning</h3>
            </div>
            <div className={styles.iconItem}>
              <div className={styles.iconCircle}>
                <PenTool className={styles.icon} />
              </div>
              <h3 className={styles.iconLabel}>Project-Based</h3>
            </div>
            <div className={styles.iconItem}>
              <div className={styles.iconCircle}>
                <Users className={styles.icon} />
              </div>
              <h3 className={styles.iconLabel}>Leadership Development</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsProgram;
