import styles from "./impact-who-can-use-this.module.css";
import { Book, Video, Award, PenLine, School, Users, Home, Flag } from "lucide-react";

const deliverables = [
  {
    icon: <Book className={styles.icon} />,
    title: "Final Sustainability Project",
    description: "A hands-on, personalized project tackling a real-world challenge.",
  },
  {
    icon: <Video className={styles.icon} />,
    title: "Eco-Message Video or Campaign",
    description: "A 2-min message that inspires change in your community.",
  },
  {
    icon: <Award className={styles.icon} />,
    title: "Certificate",
    description: "An official “Young Sustainability Champion” certificate to show off!",
  },
  {
    icon: <PenLine className={styles.icon} />, 
    title: "Reflection & Impact Journal", 
    description: "A creative space for your personal journey and impact.",
  },
];

const whoCanUse = [
  {
    icon: <School className={styles.icon} />,
    title: "Schools, Eco-Clubs, NGOs",
    description: "Perfect for education-based and community impact groups.",
  },
  {
    icon: <Users className={styles.icon} />,
    title: "Teachers & Facilitators",
    description: "Those guiding young learners on sustainability journeys.",
  },
  {
    icon: <Home className={styles.icon} />,
    title: "Homeschool Parents or Mentors",
    description: "Great for independent or family-based learning environments.",
  },
  {
    icon: <Flag className={styles.icon} />,
    title: "Youth Initiatives & Councils",
    description: "Empower student-led projects and campaigns.",
  },
];

export default function Deliverables() {
  return (
    <section className={styles.sectionWrapper}>
      {/* Glowing Dots */}
      {Array.from({ length: 21 }).map((_, i) => (
  <span key={i} className={`${styles.dot} ${styles[`dot${i + 1}`]}`}></span>
))}
     

      <div className={styles.capsulesGrid}>
        <div className={styles.capsuleWrapper}>
          <h3 className={styles.sectionTitle}>Real-World Deliverables</h3>
          {deliverables.map((item, index) => (
            <div key={index} className={styles.capsule}>
              {item.icon}
              <div className={styles.capsuleContent}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated slanted separator */}
        <div className={styles.separator}></div>

        <div className={styles.capsuleWrapper}>
          <h3 className={styles.sectionTitle}>Who Can Use This?</h3>
          {whoCanUse.map((item, index) => (
            <div key={index} className={styles.capsule}>
              {item.icon}
              <div className={styles.capsuleContent}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
