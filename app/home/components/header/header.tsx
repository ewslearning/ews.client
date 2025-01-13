"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./header.module.css";
import EWS from "@assets/icons/ews.svg";
import HamburgerIcon from "@assets/icons/hamburger.svg"; // Add a hamburger icon
import Link from "next/link";
import Button from "@components/common/button/button";
import AllProgramsIcon from "@assets/icons/all-programs.svg";
import OneSbIcon from "@assets/icons/one-sb.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [programButtonText, setProgramButtonText] = useState("Programs");

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Stop the event from propagating
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact");
  };

  const pathname = usePathname(); // Get the current pathname

  const handleOptionClick = (option: string, path: string) => {
    setProgramButtonText(option);
    router.push(path);
    setIsHovering(false); // Hide pop-up
  };

  const isActiveLink = (path: string) => pathname === path;

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className={styles.contentContainer}>
        <Link onMouseEnter={() => setIsHovering(false)} href="/" aria-label="Go to EMS Learning Home Page">
          <EWS className={styles.logoContainer} />
        </Link>

        <div>
          <ul className={styles.linkContainer}>
            <li>
              <Link
                onMouseEnter={() => setIsHovering(true)}
                href="/programs"
                className={`${styles.link} ${
                  isActiveLink("/programs") ? styles.activeLink : ""
                }`}
              >
                {programButtonText}
              </Link>
            </li>
            <li>
              <Link
                onMouseEnter={() => setIsHovering(false)}
                href="/company"
                className={`${styles.link} ${
                  isActiveLink("/company") ? styles.activeLink : ""
                }`}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                onMouseEnter={() => setIsHovering(false)}
                href="/resources"
                className={`${styles.link} ${
                  isActiveLink("/resources") ? styles.activeLink : ""
                }`}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                onMouseEnter={() => setIsHovering(false)}
                href="/services"
                className={`${styles.link} ${
                  isActiveLink("/services") ? styles.activeLink : ""
                }`}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div
          onMouseEnter={() => setIsHovering(false)}
          className={styles.buttonContainer}
        >
          {/* Contact Us button */}
          <Button onClick={handleNavigation}>Contact Us</Button>

          {/* Hamburger button */}
          <button
            className={styles.hamburgerButton}
            onClick={toggleMenu}
            aria-label="menu"
          >
            <HamburgerIcon />
          </button>
        </div>
        {isHovering && (
          <div
            className={styles.popUp}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button
              onClick={() => handleOptionClick("All Programs", "/programs")}
              className={styles.popUpBtn}
            >
              <AllProgramsIcon className={styles.popUpIcon} />
              All Programs
            </button>
            <button
              onClick={() => handleOptionClick("One Sb", "/onesb")}
              className={styles.popUpBtn}
            >
              <OneSbIcon className={styles.popUpIcon} />
              One Sb
            </button>
          </div>
        )}
      </div>

      {/* Conditionally render the dropdown menu for mobile */}
      {isMenuOpen ? (
        <div ref={menuRef} className={styles.overlayMenu}>
          <ul className={styles.overlayLinkContainer}>
            <li>
              <Link
                href="/programs"
                onClick={closeMenu}
                className={`${styles.overlayLink} ${
                  isActiveLink("/programs") ? styles.activeLinkMob : ""
                }`}
              >
                All Programs
              </Link>
            </li>
            <li>
              <Link
                href="/onesb"
                onClick={closeMenu}
                className={`${styles.overlayLink} ${
                  isActiveLink("/onesb") ? styles.activeLinkMob : ""
                }`}
              >
                One Sb
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                onClick={closeMenu}
                className={`${styles.overlayLink} ${
                  isActiveLink("/company") ? styles.activeLinkMob : ""
                }`}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                onClick={closeMenu}
                className={`${styles.overlayLink} ${
                  isActiveLink("/resources") ? styles.activeLinkMob : ""
                }`}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={closeMenu}
                className={`${styles.overlayLink} ${
                  isActiveLink("/services") ? styles.activeLinkMob : ""
                }`}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
