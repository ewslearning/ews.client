import { CheckCircle } from "lucide-react";
import styles from "./why-choose-us.module.css";

const advantages = [
    {
        title: "Expertise in Waste Management & Recycling",
        description: "Our team brings years of specialized experience in waste reduction strategies",
    },
    {
        title: "Custom Solutions Tailored to Your Industry",
        description: "We develop industry-specific approaches to address your unique challenges",
    },
    {
        title: "Technology-Driven Approach",
        description: "Data-driven decisions powered by advanced waste analytics",
    },
    {
        title: "Sustainable & Cost-Effective Strategies",
        description: "Solutions that benefit both your bottom line and the environment",
    },
    {
        title: "Certified & Experienced Team",
        description: "Professionals with industry certifications and proven track records",
    },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className={styles.whyChooseSection}>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    <div className={styles.tag}>Our Advantages</div>
                    <h2 className={styles.title}>Why Choose Us?</h2>
                    <p className={styles.description}>
                        EWS Learning brings expertise and innovation to waste management
                    </p>
                </div>
                <div className={styles.advantagesList}>
                    {advantages.map((advantage, index) => (
                        <div key={index} className={styles.advantageCard}>
                            <CheckCircle className={styles.icon} />
                            <div>
                                <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                                <p className={styles.advantageDescription}>{advantage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
