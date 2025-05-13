import React from "react";
import {
    Building,
    Building2,
    LibraryIcon as BuildingLibrary,
    Factory,
    Hotel,
    School,
    Store,
} from "lucide-react";
import styles from "./benefits.module.css";

const industries = [
    { icon: Factory, title: "Manufacturing & Industrial Facilities", description: "Optimize production waste and improve resource efficiency." },
    { icon: Building, title: "Corporate Offices & Business Parks", description: "Enhance workplace sustainability and reduce operational costs." },
    { icon: Store, title: "Retail Chains & Shopping Centers", description: "Manage packaging waste and improve customer-facing sustainability." },
    { icon: Hotel, title: "Hotels & Hospitality Sector", description: "Reduce guest waste and enhance green credentials." },
    { icon: BuildingLibrary, title: "Healthcare Institutions", description: "Manage specialized waste streams and ensure compliance." },
    { icon: School, title: "Educational Institutions", description: "Create sustainable campuses and educational opportunities."},
    { icon: Building2, title: "Municipalities & Government Organizations", description: "Improve public waste management and meet sustainability goals." }
];

const Benefits: React.FC = () => {
    return (
        <section id="benefits" className={styles.benefitsSection}>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    <div className={styles.tag}>Industries Served</div>
                    <h2 className={styles.title}>Who Can Benefit?</h2>
                    <p className={styles.description}>
                        Our waste audit services are tailored to meet the needs of various industries.
                    </p>
                </div>
                <div className={styles.flexWrapper}>
    {industries.map((industry, index) => (
        <div key={index} className={styles.industryCard}>
            <industry.icon className={styles.icon} />
            <h3 className={styles.industryTitle}>{industry.title}</h3>
            <p className={styles.industryDescription}>{industry.description}</p>
        </div>
    ))}
</div>
            </div>
        </section>
    );
};

export default Benefits;
