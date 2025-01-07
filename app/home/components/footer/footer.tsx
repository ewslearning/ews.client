"use client";

import styles from "./footer.module.css";
import FacebookIcon from "@assets/icons/facebook.svg";
import InstaIcon from "@assets/icons/instagram.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";
import TwitterIcon from "@assets/icons/twitter.svg";
import EWSLogo from "@assets/icons/ews-logo.svg";
import GoToTop from "@assets/icons/to-top.svg";
import Link from "next/link";

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return ( 
        <footer>
            <div className={styles.footerBg}>
                <div className={styles.contentContainer}>
                    <div className={styles.rightContainer}>
                        <div>
                            <div className={styles.headerContainer}>
                                <h4 className={styles.quickLinks}>Quick Links</h4>
                                <div className={styles.arrowMweb} onClick={scrollToTop} role="button" >
                                <GoToTop/>
                                </div>
                            </div>
                            <ul className={styles.linkContainer}>
                                
                                    <Link href="/" className={styles.link}>Home</Link>
                                
                                
                                    <Link href="/programs" className={styles.link}>Programs</Link>
                                
                                 
                                    <Link href="/contact" className={styles.link}>Contact Us</Link>
                                
                            </ul>
                        </div>
                        <div>
                            <div className={styles.followUsContainer}>
                                <h4 className={styles.quickLinks}>Follow Us</h4>
                            </div>

                            <div className={styles.iconContainer}>                           
                                <FacebookIcon  onClick={() => window.open("https://www.facebook.com/profile.php?id=61570908623491")}  className={styles.icons}/>
                                <LinkedinIcon  onClick={() => window.open("https://www.linkedin.com/in/ews-learning-a5769a344")} className={styles.icons}/>
                                <InstaIcon onClick={() => window.open("https://www.instagram.com/ews.learning/?hl=en")} className={styles.icons}/>
                                <TwitterIcon  onClick={() => window.open("https://x.com/EWSLearning")} className={styles.icons}/>                              
                            </div>
                        </div>
                        <div className={styles.arrowDesktop}  onClick={scrollToTop} role="button" >
                            <GoToTop/>
                        </div>
                    </div>
                    <div className={styles.logoContainer}>
                        <EWSLogo/>
                        <div className={styles.logoTitle}>
                            <p>AI-Driven Environmental </p>
                            <p>Education for Everyone, Everywhere</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyrightContainer}>
                <p>© {new Date().getFullYear()}. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;
