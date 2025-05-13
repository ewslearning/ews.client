import {
    ArrowRight,
    FileCheck,
    Settings,
    TrendingDown,
  } from "lucide-react";
  import styles from "./waste-audit-services.module.css";
  
  const features = [
    {
      icon: TrendingDown,
      title: "Save 25% on Disposal Costs",
      description: "Our audits identify cost-saving opportunities in your waste management processes.",
    },
    {
      icon: FileCheck,
      title: "Meet Compliance & ESG Goals",
      description: "Ensure regulatory compliance and achieve your sustainability targets.",
    },
    {
      icon: Settings,
      title: "Streamline Waste Management",
      description: "Optimize your waste processes for efficiency and sustainability.",
    },
  ];
  
  export default function WasteAuditServices() {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.section}>
            <div className={styles.wrapper}>
              <div className={styles.contentGrid}>
                <div className={styles.textContent}>
                  <h1 className={styles.heading}>
                    Waste Audit Services – Reduce Waste & Cut Costs
                  </h1>
                  <p className={styles.subText}>
                    EWS Learning helps businesses cut waste costs by 25% and ensure compliance through expert waste
                    audits. We analyze waste streams, optimize recycling, and implement sustainable strategies.
                  </p>
                 
                </div>
                <div className={styles.featureGrid}>
                  {features.map(({ icon: Icon, title, description }) => (
                    <div key={title} className={styles.featureItem}>
                      <div className={styles.iconWrapper}>
                        <Icon className={styles.featureIcon} />
                      </div>
                      <div>
                        <h3 className={styles.featureTitle}>{title}</h3>
                        <p className={styles.featureDescription}>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.primaryButton}>
                      Request an Audit <ArrowRight className={styles.icon} />
                    </button>
                    {/* <Button variant="secondary">Learn More</Button> */}
                  </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
  