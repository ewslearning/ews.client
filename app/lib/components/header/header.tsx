"use client";

import { useState } from "react";
import styles from "./header.module.css";
import EWS from "@assets/icons/ews.svg";
import HamburgerIcon from "@assets/icons/hamburger.svg"; // Add a hamburger icon
import Link from 'next/link'; 


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log ("tapppp");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <EWS />
        </div>
        <div>
        <ul className={styles.linkContainer}>
          <Link href="/programs" className={styles.link}>Programs</Link>
          <Link href="/programs"  className={styles.link}>Company</Link>
          <Link href="/programs"  className={styles.link}>Resources</Link>
        </ul>
        </div>
        <div className={styles.buttonContainer}>
          {/* Contact Us button */}
          <button className={styles.contactButton}>Contact Us</button>

          {/* Hamburger button */}
          <button className={styles.hamburgerButton} onClick={toggleMenu}>
            <HamburgerIcon />
          </button>
        </div>
       
      </div>
     
     {/* Conditionally render the dropdown menu for mobile */}
     {isMenuOpen && (
        <div className={styles.overlayMenu}>
          <ul className={styles.overlayLinkContainer}>
            <li>
              <Link href="/programs" className={styles.overlayLink}>Programs</Link>
            </li>
            <li>
              <span className={styles.overlayLink}>Company</span>
            </li>
            <li>
              <span className={styles.overlayLink}>Resources</span>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
};

export default Header;
