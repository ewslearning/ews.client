"use client";
import styles from "./about-us.module.css";
import Mission from "@app/company/assets/icons/mission.svg";
import MissionImg from "@app/company/assets/images/mission.png";

import Vision from "@app/company/assets/icons/vision.svg";
import VisionImg from "@app/company/assets/images/vision.png";

import Background from "@app/company/assets/icons/background.svg";
import BackgroundImg from "@app/company/assets/images/background.png";

import WhyNow from "@app/company/assets/icons/whynow.svg";
import WhyNowImg from "@app/company/assets/images/whynow.png";
import Image from "next/image";
import { useState } from "react";

const CompanyAboutUs: React.FC = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleReadMore = (section: string) => {
    setExpandedSection((prevSection) => (prevSection === section ? null : section));
  }; 

  const renderDescription = (text: string, isExpanded: boolean) => {
    if (isExpanded) {
      return text; // Show full text if expanded
    }
    // Show only the first few lines (adjust based on requirements)
    return text.split(" ").slice(0, 30).join(" ") + "...";
  };
  
   return (<div className={styles.topContainer}>
    <div className={styles.pageHeader}>About Us</div>
    <div className={styles.parentContainer}>
    <div className={styles.leftColumnContainer}>
        <div className={styles.headerDescriptionContainer}>
        <div className={styles.divider}></div>
        <div className={styles.headerContainer}>
        <h1 className={styles.header}>Mission</h1>
        <Mission className={styles.icon}/>
        </div>
        <p className={styles.description}>
        {renderDescription(
                "To lead the way in Environmental, Social, and Governance (ESG) practices by creating a sustainable and dignified ecosystem that empowers communities, protects the environment, and fosters corporate responsibility. Through our innovative waste management and recycling solutions, we are committed to achieving the United Nations Sustainable Development Goals (UN SDGs), driving positive change across the value chain. Our mission is to educate, engage, and connect stakeholders to ensure that waste is managed responsibly, environmental sustainability is prioritized, and governance practices are strengthened for a more equitable and sustainable future.",
                expandedSection === "mission"
              )}
            </p>
        </div>
        <button onClick={() => toggleReadMore("mission")} className={styles.readMore}>{expandedSection === "mission" ? "Read Less" : "Read More"}</button>
    </div>
    <Image className={styles.rightSideImage} src={MissionImg} alt="Mission"></Image>  
    </div>

    <div className={styles.parentContainer}>
    <Image className={styles.desktopImg} src={VisionImg} alt="Vision"></Image>  
    <div className={styles.rightColumnContainer}>
        <div className={styles.headerDescriptionContainer}>
        <div className={styles.divider}></div>
        <div className={styles.headerContainer}>
        <h3 className={styles.header}>Vision</h3>
        <Vision className={styles.icon}/>
        </div>
        <p className={styles.description}>
            {(renderDescription("To become a global leader in integrating Environmental, Social, and Governance (ESG) principles into waste management and sustainability practices, setting a new standard for responsible business. We envision a world where every organization not only manages waste efficiently but also contributes to broader environmental sustainability, social equity, and strong governance. By leveraging innovative technologies and fostering robust corporate partnerships, we aim to transform waste into value, achieve the United Nations Sustainable Development Goals (UN SDGs), and inspire a cultural shift towards sustainability across all sectors. Our vision is a future where every stakeholder actively participates in building a sustainable, equitable, and thriving global community.", 
                expandedSection === "vision"
            ))}
        </p>
        </div>
        <button onClick={() => toggleReadMore("vision")} className={styles.readMore}>{expandedSection === "mission" ? "Read Less" : "Read More"}</button>
    </div>
    <Image className={styles.mobImg} src={VisionImg} alt="Vision"></Image>  
    </div>


    <div className={styles.parentContainer}>
    <div className={styles.leftColumnContainer}>
        <div className={styles.headerDescriptionContainer}>
        <div className={styles.divider}></div>
        <div className={styles.headerContainer}>
        <h3 className={styles.header}>Background</h3>
        <Background className={styles.icon}/>
        </div>
        <p className={styles.description}>
            {(renderDescription("With over twenty five years of experience in the recycling and waste management industry, and a strong foundation in academic and educational institutions, we recognized a critical need to address the inefficiencies in the current waste management systems. The informal sector, where much of the waste management occurs, often involves the exploitation of vulnerable populations, including women and children. By leveraging our expertise and insights, we saw an opportunity to create a program that not only addresses these challenges but also introduces innovative solutions like the proprietary Sanitary Waste Recycling and Destruction Technology (SWRDT).", 
                           expandedSection === "background"))}
        </p>
        </div>
        <button onClick={() => toggleReadMore("background")} className={styles.readMore}>{expandedSection === "mission" ? "Read Less" : "Read More"}</button>
    </div>
    <Image className={styles.rightSideImage} src={BackgroundImg} alt="Company Background image"></Image>  
    </div>

    <div className={styles.parentContainer}>
    <Image className={styles.desktopImg} src={WhyNowImg} alt="Company Why Now"></Image>  
    <div className={styles.rightColumnContainer}>
        <div className={styles.headerDescriptionContainer}>
        <div className={styles.divider}></div>
        <div className={styles.headerContainer}>
        <h3 className={styles.header}>Why Now</h3>
        <WhyNow className={styles.icon}/>
        </div>
        <p className={styles.description}>
            {(renderDescription(
                "The timing for launching this program is crucial. The global focus on sustainability, coupled with increasing corporate responsibility, creates a unique opportunity to drive meaningful change. Companies are more aware than ever of their environmental impact, and there is a growing demand for sustainable practices across all sectors. By connecting with corporate partners, we can scale our impact, ensure the adoption of best practices in waste management, and ultimately contribute to a more sustainable future.\nOur program is designed to integrate seamlessly into the existing corporate value chain, offering customized solutions that meet specific needs while promoting sustainable practices. With the right partnerships, we can not only enhance waste management but also educate and empower employees and managers, driving a cultural shift towards sustainability within organizations.", expandedSection === "whyNow"
            ))}
        </p>
        </div>
        <button onClick={() => toggleReadMore("whyNow")} className={styles.readMore}>{expandedSection === "mission" ? "Read Less" : "Read More"}</button>
    </div>
    <Image className={styles.mobImg} src={WhyNowImg} alt="Company Why Now"></Image>  
    </div>

    
   </div>)
};

export default CompanyAboutUs;