
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
  const totalPages = 3;
  const autoChangeInterval = 3000; // 3 seconds

  // Function to navigate to the next page
  const nextPage = () => {
    setActivePage((prevPage) => (prevPage + 1) % totalPages);
  };

  // Function to navigate to the previous page
  const prevPage = () => {
    setActivePage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // Set up auto-transition with useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, autoChangeInterval);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const carouselPages = [
    <div key="page1" className={styles.page}>
      {/* Frame as background */}
      <Frame className={styles.frameBackground} />
  
      {/* Main content */}
      <div className={styles.contentContainer}>
        {/* Left column for quotes and testimonial */}
        <div className={styles.testimonialContainer}>
        <div className={styles.textContainer}>
          <Quotes className={styles.quoteIconRight} />
          <p className={styles.testimonial}>
            EWS transformed our sustainability efforts with their expert guidance and tailored training. 
            Their support has helped us meet compliance and lead in corporate responsibility. 
            We couldn’t be happier with the partnership!
          </p>
          <Quotes className={styles.quoteIcon} />
        </div>
        <div className={styles.mobProfileImage}>
        <Image src={Ajay} alt="Ajay Kuswaha" className={styles.profileImage} />
        </div>
        </div>
        {/* Right column for image and name */}
        {/* <div className={styles.profileContainer}> */}
        <div className={styles.profileInfo}>
            <h6 className={styles.profileName}>Ajay Kuswaha</h6>
            <h6 className={styles.profileRole}>Sustainability Manager</h6>
          </div>
         
        </div>
       
      {/* </div> */}
    </div>,
     <div key="page2" className={styles.page}>
     {/* Frame as background */}
     <Frame className={styles.frameBackground} />
 
     {/* Main content */}
     <div className={styles.contentContainer}>
       {/* Left column for quotes and testimonial */}
       <div className={styles.testimonialContainer}>
       <div className={styles.textContainer}>
         <Quotes className={styles.quoteIconRight} />
         <p className={styles.testimonial}>
         Learning with EWS has been a game-changer 
for our organization. Their innovative 
solutions and dedicated support have made 
sustainability a core part of our business s
trategy. We’re proud to lead the way in 
eco-friendly practices thanks to their
expertise
         </p>
         <Quotes className={styles.quoteIcon} />
       </div>
       <div className={styles.mobProfileImage}>
       <Image src={Abrar} alt="Abrar" className={styles.profileImage} />
       </div>
       </div>
       {/* Right column for image and name */}
       {/* <div className={styles.profileContainer}> */}
       <div className={styles.profileInfo}>
           <h6 className={styles.profileName}>Abrar</h6>
           <h6 className={styles.profileRole}>Operations</h6>
         </div>
        
       </div>
      
     {/* </div> */}
   </div>,
    <div key="page3" className={styles.page}>
    {/* Frame as background */}
    <Frame className={styles.frameBackground} />

    {/* Main content */}
    <div className={styles.contentContainer}>
      {/* Left column for quotes and testimonial */}
      <div className={styles.testimonialContainer}>
      <div className={styles.textContainer}>
        <Quotes className={styles.quoteIconRight} />
        <p className={styles.testimonial}>
        EWS has been instrumental in advancing our 
sustainability initiatives. Their customized 
training and practical solutions helped us 
implement effective eco-friendly practices. 
We appreciate their dedication and expertise
        </p>
        <Quotes className={styles.quoteIcon} />
      </div>
      <div className={styles.mobProfileImage}>
      <Image src={Prashanth} alt="Prashanth" className={styles.profileImage} />
      </div>
      </div>
      {/* Right column for image and name */}
      {/* <div className={styles.profileContainer}> */}
      <div className={styles.profileInfo}>
          <h6 className={styles.profileName}>Prashanth</h6>
          <h6 className={styles.profileRole}>Environmental Manager</h6>
        </div>
       
      </div>
     
    {/* </div> */}
  </div>
  ];
  

  return (
    <div className={styles.carouselContainer}>
      {/* Page display */}
      <div className={styles.carouselContent}>
        {carouselPages[activePage]}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
       <CarouselPageChangeIcon onClick={prevPage} className={styles.previousControlButton}/>
        <div className={styles.pageInfo}>{activePage + 1} of {totalPages}</div>
        <CarouselPageChangeIcon onClick={nextPage} className={styles.nextControlButton}/>
      </div>

      {/* Optional: Dots for navigation */}
      {/* <div className={styles.dotsContainer}>
        {carouselPages.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${activePage === index ? styles.activeDot : ""}`}
            onClick={() => setActivePage(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
