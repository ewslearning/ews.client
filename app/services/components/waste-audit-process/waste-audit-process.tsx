import { BarChart3, ClipboardCheck, LineChart, ListChecks, Sparkles } from "lucide-react";
import styles from "./waste-audit-process.module.css";

const WasteAuditProcess: React.FC = () => {
    const steps = [
        {
            icon: ClipboardCheck,
            title: "Pre-Audit Assessment",
            description: "Initial evaluation of current waste practices and goals",
        },
        {
            icon: ListChecks,
            title: "On-Site Waste Analysis",
            description: "Detailed examination of waste streams and processes",
        },
        {
            icon: BarChart3,
            title: "Data Collection & Reporting",
            description: "Comprehensive analysis and insights generation",
        },
        {
            icon: Sparkles,
            title: "Action Plan & Implementation",
            description: "Strategic recommendations and execution support",
        },
        {
            icon: LineChart,
            title: "Monitoring & Improvement",
            description: "Ongoing assessment and optimization",
        },
    ];

    return (
        <section id="process" className={styles.processSection}>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    {/* <div className={styles.tag}>Our Approach</div> */}
                    <h2 className={styles.title}>Our Waste Audit Process</h2>
                    <p className={styles.description}>
                        A comprehensive, data-driven approach to waste management optimization
                    </p>
                </div>
                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.stepCard}>
                            <div className={styles.iconWrapper}>
                                <step.icon className={styles.icon} />
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WasteAuditProcess;
