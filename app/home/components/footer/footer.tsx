"use client";

import styles from "./footer.module.css";
import FacebookIcon from "@assets/icons/facebook.svg";
import InstaIcon from "@assets/icons/instagram.svg";
import LinkedinIcon from "@assets/icons/linkedin.svg";
import TwitterIcon from "@assets/icons/twitter.svg";
import YoutubeIcon from "@assets/icons/youtube.svg";
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

  const openSocialMediaLink = (url: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url);
    }
  };

  return (
    <footer>
      <div className={styles.footerBg}>
        <div className={styles.contentContainer}>
          <div className={styles.rightContainer}>
            <div>
              <div className={styles.headerContainer}>
                <h2 className={styles.quickLinks}>Quick Links</h2>
                <div
                  className={styles.arrowMweb}
                  onClick={scrollToTop}
                  role="button"
                  aria-label="Go to top of the page"
                >
                  <GoToTop />
                </div>
              </div>
              <ul className={styles.linkContainer}>
                <li>
                  <Link href="/" className={styles.link}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/programs" className={styles.link}>
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles.link}>
                    Contact Us
                  </Link>
                </li>
                 <li>
                  <Link href="/terms-and-conditions" className={styles.link}>
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className={styles.followUsContainer}>
                <h2 className={styles.quickLinks}>Follow Us</h2>
              </div>

              <div className={styles.iconContainer}>
                <FacebookIcon
                  onClick={() =>
                    openSocialMediaLink(
                      "https://www.facebook.com/profile.php?id=61570908623491"
                    )
                  }
                  className={styles.icons}
                />
                <LinkedinIcon
                  onClick={() =>
                    openSocialMediaLink(
                      "https://www.linkedin.com/company/ews-learning/?viewAsMember=true"
                    )
                  }
                  className={styles.icons}
                />
                <InstaIcon
                  onClick={() =>
                    openSocialMediaLink(
                      "https://www.instagram.com/ews.learning/?hl=en"
                    )
                  }
                  className={styles.icons}
                />
                <TwitterIcon
                  onClick={() =>
                    openSocialMediaLink("https://x.com/EWSLearning")
                  }
                  className={styles.icons}
                />
                <YoutubeIcon
                  onClick={() =>
                    openSocialMediaLink(
                      "https://www.youtube.com/channel/UCNPQ4KD37Wjy371x3geS0ew"
                    )
                  }
                  className={styles.icons}
                />
              </div>
            </div>
            <div
              className={styles.arrowDesktop}
              onClick={scrollToTop}
              role="button"
              aria-label="Go to top of the page"
            >
              <GoToTop />
            </div>
          </div>
          <div className={styles.logoContainer}>
            <EWSLogo />
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
