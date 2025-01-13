"use client";
import React, { useState, useEffect } from "react";
import styles from "./carousel.module.css";
import Frame from "@assets/icons/frame.svg";
import Quotes from "@assets/icons/quotes.svg";
import Ajay from "@assets/images/ajay.png";
import Abrar from "@assets/images/abrar-transparentBg.png";
import Prashanth from "@assets/images/prasanth.png";
import Image from "next/image";
import CarouselPageChangeIcon from "@assets/icons/to-left.svg";

const Carousel: React.FC = () => {
  const [activePage, setActivePage] = useState(0);
  const [fadeIn, setFadeIn] = useState(false); // State to trigger animation
  const totalPages = 3;
  const autoChangeInterval = 6000; // 3 seconds

  // Function to navigate to the next page
  const nextPage = () => {
    setFadeIn(false);
    setTimeout(() => {
      setActivePage((prevPage) => (prevPage + 1) % totalPages);
      setFadeIn(true);
    }, 10); // Delay to trigger fade-in
  };

  // Function to navigate to the previous page
  const prevPage = () => {
    setFadeIn(false);
    setTimeout(() => {
      setActivePage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
      setFadeIn(true);
    }, 10);
  };

  // Set up auto-transition with useEffect
  useEffect(() => {
    setFadeIn(true); // Start with the first page animated
    const interval = setInterval(() => {
      nextPage();
    }, autoChangeInterval);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const carouselPages = [
    <div key="page1" className={`${styles.page} ${fadeIn ? styles.fadeIn : ""}`}>
      {/* Frame as background */}
      <Frame className={styles.frameBackground} />
  
      {/* Main content */}
      <div className={styles.contentContainer}>
        <div className={styles.testimonialContainer}>
          <div className={styles.textContainer}>
            <Quotes className={styles.quoteIconRight} />
            <p className={styles.testimonial}>
              EWS transformed our sustainability efforts with their expert
              guidance and tailored training. Their support has helped us meet
              compliance and lead in corporate responsibility. We couldn’t be
              happier with the partnership!
            </p>
            <Quotes className={styles.quoteIcon} />
          </div>
          <div className={styles.mobProfileImage}>
            <Image
              src={Ajay}
              alt="Ajay Kuswaha"
              className={styles.profileImage}
            />
          </div>
        </div>
        <div className={styles.profileInfo}>
          <p className={styles.profileName}>Ajay Kuswaha</p>
          <p className={styles.profileRole}>Sustainability Manager</p>
        </div>
      </div>
    </div>,
    <div key="page2" className={`${styles.page} ${fadeIn ? styles.fadeIn : ""}`}>
      {/* Frame as background */}
      <Frame className={styles.frameBackground} />
  
      {/* Main content */}
      <div className={styles.contentContainer}>
        <div className={styles.testimonialContainer}>
          <div className={styles.textContainer}>
            <Quotes className={styles.quoteIconRight} />
            <p className={styles.testimonial}>
              Learning with EWS has been a game-changer for our organization.
              Their innovative solutions and dedicated support have made
              sustainability a core part of our business strategy. We’re proud to
              lead the way in eco-friendly practices thanks to their expertise.
            </p>
            <Quotes className={styles.quoteIcon} />
          </div>
          <div className={styles.mobProfileImage}>
            <Image src={Abrar} alt="Abrar" className={styles.profileImage} />
          </div>
        </div>
        <div className={styles.profileInfo}>
          <p className={styles.profileName}>Abrar</p>
          <p className={styles.profileRole}>Operations</p>
        </div>
      </div>
    </div>,
    <div key="page3" className={`${styles.page} ${fadeIn ? styles.fadeIn : ""}`}>
      {/* Frame as background */}
      <Frame className={styles.frameBackground} />
  
      {/* Main content */}
      <div className={styles.contentContainer}>
        <div className={styles.testimonialContainer}>
          <div className={styles.textContainer}>
            <Quotes className={styles.quoteIconRight} />
            <p className={styles.testimonial}>
              EWS has been instrumental in advancing our sustainability
              initiatives. Their customized training and practical solutions
              helped us implement effective eco-friendly practices. We appreciate
              their dedication and expertise.
            </p>
            <Quotes className={styles.quoteIcon} />
          </div>
          <div className={styles.mobProfileImage}>
            <Image
              src={Prashanth}
              alt="Prashanth"
              className={styles.profileImage}
            />
          </div>
        </div>
        <div className={styles.profileInfo}>
          <p className={styles.profileName}>Prashanth</p>
          <p className={styles.profileRole}>Environmental Manager</p>
        </div>
      </div>
    </div>,
  ];
  

  return (
    <div className={styles.carouselContainer}>
      {/* Page display */}
      <div className={styles.carouselContent}>{carouselPages[activePage]}</div>

      {/* Controls */}
      <div className={styles.controls}>
        <CarouselPageChangeIcon
          onClick={prevPage}
          className={styles.previousControlButton}
        />
        <div className={styles.pageInfo}>
          {activePage + 1} of {totalPages}
        </div>
        <CarouselPageChangeIcon
          onClick={nextPage}
          className={styles.nextControlButton}
        />
      </div>
    </div>
  );
};

export default Carousel;
