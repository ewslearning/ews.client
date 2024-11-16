"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
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
  
  const pathname = usePathname(); // Get the current pathname

  const isActiveLink = (path: string) => pathname === path;

  return (
    <header>
      <div className={styles.contentContainer}>
       
          <Link href="/" ><EWS className={styles.logoContainer}/></Link>
        
        <div>
        <ul className={styles.linkContainer}>
          <Link href="/programs" className={`${styles.link} ${isActiveLink("/programs") ? styles.activeLink : ""}`}>Programs</Link>
          <Link href="/company"  className={`${styles.link} ${isActiveLink("/company") ? styles.activeLink : ""}`}>Company</Link>
          <Link href="/resources"  className={`${styles.link} ${isActiveLink("/resources") ? styles.activeLink : ""}`}>Resources</Link>
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
              <Link href="/programs" onClick={toggleMenu} className={`${styles.overlayLink} ${isActiveLink("/programs") ? styles.activeLinkMob : ""}`}>Programs</Link>
            </li>
            <li>
              <Link href="/company" onClick={toggleMenu} className={`${styles.overlayLink} ${isActiveLink("/company") ? styles.activeLinkMob : ""}`}>Company</Link>
            </li>
            <li>
              <Link href="/resources" onClick={toggleMenu} className={`${styles.overlayLink} ${isActiveLink("/resources") ? styles.activeLinkMob : ""}`}>Resources</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
