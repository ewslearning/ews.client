
import PackagesCard from "../packages-card/packages-card";
import styles from "./packages.module.css";
import SilverDiamond from "../../assets/icons/silver-diamond.svg";
import GoldDiamond from "../../assets/icons/gold-diamond.svg";
import PlatinumDiamond from "../../assets/icons/platinum-diamond.svg";


const packagesList  = [
    {
       Icon: SilverDiamond,
       title: "Silver Package – Foundational Compliance",
       description: "Ideal for companies beginning their sustainability journey. This package provides essential policies, regulatory compliance guidelines, and basic waste management solutions to help you meet industry standards.",
       price: 2500,
       features: [
            "Basic waste management policy template",
            "Guidance on handling non-hazardous and recyclable waste",
            "Monthly reports on waste disposal and recycling stats",
            "Standard compliance checklists",
            "Employee Sensitization Kit",
            "5 Product Swaps: Suggestions for eco-friendlyproducts that replace commonly used office items",
            "5 Awareness Posters: Monthly posters to encourage responsible waste disposal",
            "1 Activity per Month: Simple monthly activities to engage employees on waste management",
            "Duration: 6-month support",
            "Perfect for: Small businesses and companies lookingto establish foundational compliance."
       ],
    }, 
    {
        Icon: GoldDiamond,
        title: "Gold Package – Enhanced Sustainability",
        description: "This package provides an advanced policy setup and focuses on reducing environmental impact. It includes training and tools to help your team effectively manage, reduce, and recycle waste.",
        price: 4000,
        features: [
            "Comprehensive waste management and recycling policy",
            "Support in developing tailored recycling programs",
            "Monthly waste audits and biannual sustainability assessments",
            "Detailed compliance and regulatory support for hazardous waste",
            "Employee Sensitization Kit",
            "5 Product Swaps: Office-specific eco-friendly product alternatives",
            "5 Awareness Posters: Monthly posters featuringtargeted sustainability topics",
            "2 Activities per Month: Interactive activitiesdesigned to foster sustainable habits",
            "Training: Instructor-led workshops (up to 20 employees) covering best practices in waste handling and regulatory adherence",
            "Duration: 1-year support with quarterly check-ins",
            "Ideal for: Mid-sized companies committed to improving their environmental impact."
        ],
    },
    {
        Icon: PlatinumDiamond,
        title: "Platinum Package – Complete Sustainable Solution  ",
        description: "Our top- tier solution is tailored for companies aiming to lead in waste management and sustainability. The Platinum package offers a customized policy, advancedtraining, and ongoing support",
        price: 6500,
        features: [
            "Fully customized, zero-waste policy tailored to your operations",
            "Regular on-site assessments and policy adjustments based on performance",
            "Annual environmental impact report and sustainability roadmap",
            "Advanced recycling solutions, including hazardous waste handling and e-waste programs",
            "Employee Sensitization Kit",
            "5 Product Swaps: Specialized eco-friendly product options, customized to office needs",
            "5 Awareness Posters: Professional-grade posters with impactful sustainability messages",
            "4 Activities per Month: Engaging activities, workshops, and team challenges for a greener workplace",
            "Training: Comprehensive training for all staff, including in-depth workshops and executivesessions on sustainability leadership",
            "Duration: Ongoing support with monthly check-ins and annual renewal",
            " Perfect for: Large corporations seeking a robust, sustainable waste management strategy that aligns with international standards."
        ],
    }
];

const Packages: React.FC = () => {
    return (
       <div className={styles.parentContainer}>
          <h2 className={styles.heading}>Our Packages</h2>
          <div className={styles.packages}>
             {packagesList.map((item, index) => (
                <PackagesCard
                   key={index}
                   Icon={item.Icon}
                   title={item.title}
                   description={item.description}
                   price={item.price}
                   features={item.features}
                />
             ))}
          </div>
          <h3 className={styles.customSolutionsText}>Explore Our Customized Solutions</h3>
          <p className={styles.customSolutionsDescription}>
             Each package can be further tailored to suit specific organizational needs, including adding regional language support and collaborating with sustainability experts.
          </p>
       </div>
    );
 }; 

export default Packages;