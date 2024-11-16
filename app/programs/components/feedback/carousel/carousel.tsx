"use client";
import classes from "./carousel.module.css";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Quotes from '@assets/icons/quotes.svg';
import LeftArrow from '@assets/icons/left-arrow-white.svg';
import RightArrow from '@assets/icons/right-arrow-white.svg';

interface FeedbackItem {
    image: StaticImageData; // URL or imported image path
    feedback: string;
    name: string;
    position: string;
  }
  
export  interface FeedBackCarouselProps {
    items: FeedbackItem[]; // Array of feedback items
  }
const FeedBackCarousel: React.FC<FeedBackCarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Handle left navigation
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    };
  
    // Handle right navigation
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    // Handle swipe
    const handleSwipe = (direction: "left" | "right") => {
      if (direction === "left") handleNext();
      else if (direction === "right") handlePrev();
    };

return (  <div className={classes.parentContainer}>
            <div className={classes.carouselContainer}>
                 <div className={classes.subContainer}  onTouchStart={(e) => (e.currentTarget.dataset.startX = e.touches[0].clientX.toString())}
      onTouchEnd={(e) => {
        const startX = parseFloat(e.currentTarget.dataset.startX || "0");
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) handleSwipe("left");
        else if (endX - startX > 50) handleSwipe("right");
      }}>
                 <Quotes className={classes.quoteIconRight} />
                
                <div className={classes.container}>
                    <Image  src={items[currentIndex].image}
            alt={items[currentIndex].name} className={classes.img}></Image>
                
                <div  className={classes.feedbackContainer}>
                    <p className={classes.feed}>{items[currentIndex].feedback}</p>
                    <div  className={classes.titleContainer}>
                        <h3  className={classes.name}>{items[currentIndex].name}</h3>
                        <h6  className={classes.position}>{items[currentIndex].position}</h6>
                    </div>
                </div>
                </div>
                </div>
                
            </div> 
            <div className={classes.indicatorsContainer}>
                 {/* Navigation Buttons */}
          <button className={classes.leftButton} onClick={handlePrev}>
            <LeftArrow/>
          </button>
            <div className={classes.indicators}>
            {items.map((_, index) => (
              <div
                key={index}
                className={`${classes.indicator} ${
                  currentIndex === index ? classes.active : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
    
         
          <button className={classes.rightButton} onClick={handleNext}>
          <RightArrow/>
          </button>
          </div>
          </div>
          );

};

export default FeedBackCarousel;
