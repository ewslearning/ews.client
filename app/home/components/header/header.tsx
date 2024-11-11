"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";
import EWS from "@assets/icons/ews.svg";
import HamburgerIcon from "@assets/icons/hamburger.svg"; // Add a hamburger icon
import Link from 'next/link'; 
import Button from "@components/common/button/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contactform"); 
  };

  return (
    <header>
      <div className={styles.contentContainer}>
       
          <Link href="/" ><EWS className={styles.logoContainer}/></Link>
        
        <div>
        <ul className={styles.linkContainer}>
          <Link href="/programs" className={styles.link}>Programs</Link>
          <Link href="/company"  className={styles.link}>Company</Link>
          <Link href="/resources"  className={styles.link}>Resources</Link>
        </ul>
        </div>
        <div className={styles.buttonContainer}>
          {/* Contact Us button */}
          <Button onClick={handleNavigation}>Contact Us</Button>

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
              <Link href="/company" className={styles.overlayLink}>Company</Link>
            </li>
            <li>
              <Link href="/resources" className={styles.overlayLink}>Resources</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
