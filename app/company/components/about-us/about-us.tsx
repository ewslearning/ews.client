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

const CompanyAboutUs: React.FC = () => {
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
        <p className={styles.description}>To lead the way in Environmental, Social, and Governance (ESG) practices by creating a sustainable and dignified ecosystem that empowers communities, protects the environment, and fosters corporate responsibility. Through our innovative waste management and recycling ...</p>
        </div>
        <button className={styles.readMore}>Read More</button>
    </div>
    <Image className={styles.rightSideImage} src={MissionImg} alt="Mission"></Image>  
    </div>

    <div className={styles.parentContainer}>
    <Image className={styles.desktopImg} src={VisionImg} alt="Vision"></Image>  
    <div className={styles.rightColumnContainer}>
        <div className={styles.headerDescriptionContainer}>
        <div className={styles.divider}></div>
        <div className={styles.headerContainer}>
        <h1 className={styles.header}>Mission</h1>
        <Vision className={styles.icon}/>
        </div>
        <p className={styles.description}>To lead the way in Environmental, Social, and Governance (ESG) practices by creating a sustainable and dignified ecosystem that empowers communities, protects the environment, and fosters corporate responsibility. Through our innovative waste management and recycling ...</p>
        </div>
        <button className={styles.readMore}>Read More</button>
    </div>
    <Image className={styles.mobImg} src={VisionImg} alt="Vision"></Image>  
    </div>


    <div className={styles.parentContainer}>
    <div className={styles.leftColumnContainer}>
        <div className={styles.headerDescriptionContainer}>
        <div className={styles.divider}></div>
        <div className={styles.headerContainer}>
        <h1 className={styles.header}>Mission</h1>
        <Background className={styles.icon}/>
        </div>
        <p className={styles.description}>To lead the way in Environmental, Social, and Governance (ESG) practices by creating a sustainable and dignified ecosystem that empowers communities, protects the environment, and fosters corporate responsibility. Through our innovative waste management and recycling ...</p>
        </div>
        <button className={styles.readMore}>Read More</button>
    </div>
    <Image className={styles.rightSideImage} src={BackgroundImg} alt="Company Background image"></Image>  
    </div>

    <div className={styles.parentContainer}>
    <Image className={styles.desktopImg} src={WhyNowImg} alt="Company Why Now"></Image>  
    <div className={styles.rightColumnContainer}>
        <div className={styles.headerDescriptionContainer}>
        <div className={styles.divider}></div>
        <div className={styles.headerContainer}>
        <h1 className={styles.header}>Mission</h1>
        <WhyNow className={styles.icon}/>
        </div>
        <p className={styles.description}>To lead the way in Environmental, Social, and Governance (ESG) practices by creating a sustainable and dignified ecosystem that empowers communities, protects the environment, and fosters corporate responsibility. Through our innovative waste management and recycling ...</p>
        </div>
        <button className={styles.readMore}>Read More</button>
    </div>
    <Image className={styles.mobImg} src={WhyNowImg} alt="Company Why Now"></Image>  
    </div>

    
   </div>)
};

export default CompanyAboutUs;