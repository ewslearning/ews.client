import styles from "./footer.module.css";
import FacebookIcon from "@assets/icons/facebook.svg";
import InstaIcon from "@assets/icons/instagram.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";
import TwitterIcon from "@assets/icons/twitter.svg";
import EWSLogo from "@assets/icons/ews-logo.svg";
import GoToTop from "@assets/icons/to-top.svg";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className={styles.footerBg}>
                <div className={styles.contentContainer}>
                    <div className={styles.rightContainer}>
                        <div>
                            <div className={styles.headerContainer}>
                                <h4>Quick Links</h4>
                                <div className={styles.arrowMweb}>
                                    <GoToTop/>
                                </div>
                            </div>
                            <ul className={styles.linkContainer}>
                                <li>
                                    <span className={styles.link}>Home</span>
                                </li>
                                <li>
                                    <span className={styles.link}>Programs</span>
                                </li>
                                <li>
                                    <span className={styles.link}>Contact Us</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles.followUsContainer}>
                                <h4>Follow Us</h4>
                            </div>
                            <div className={styles.iconContainer}>
                                <FacebookIcon className={styles.icons}/>
                                <LinkedinIcon/>
                                <InstaIcon/>
                                <TwitterIcon/>
                            </div>
                        </div>
                        <div className={styles.arrowDesktop}>
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
