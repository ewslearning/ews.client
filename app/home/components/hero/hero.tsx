"use client";
import { useEffect, useState } from "react";
import classes from "./hero.module.css";
import Star from "@assets/icons/star.svg";
import RightArrow from "@assets/icons/right-arrow.svg";
import Button from "@components/common/button/button";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const [isVideoFullScreen, setVideoFullScreen] = useState(false);
  const breakpointMd = 768;

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(`.${classes.heroContainer}`);
      const heroTop = heroSection?.getBoundingClientRect().top ?? 0;
      if (window.innerWidth > breakpointMd) {
      // If the hero section is at the top of the screen, expand the video
      if (heroTop <= 0 && !isVideoFullScreen) {
        setVideoFullScreen(true);
      } else if (heroTop > 0 && isVideoFullScreen) {
        setVideoFullScreen(false);
      }
    }};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVideoFullScreen]);


  const router = useRouter();

  const handleNavigation = () => {
    router.push("/programs"); // Replace with your target path
  };

  return (
    <main className={classes.heroContainer}>
        <title>EWS Learning</title>
      <div className={classes.baseContainer}>
      <div className={`${classes.ripple} ${classes.ripple1}`}></div>
      <div className={`${classes.ripple} ${classes.ripple2}`}></div>
      <div className={`${classes.ripple} ${classes.ripple3}`}></div>
      <div className={`${classes.contentContainer} ${classes.leftContent}`}>
        <h2 className={classes.leftHeaderTxt}>
          Empowering Sustainable Futures through Environmental Education &
          Corporate Sustainability
        </h2>
        <meta name="keywords" content="ews, ewsLearning, ews learning, ews learn" />
        <Button onClick={handleNavigation} variant="whiteBg">Explore Programs<RightArrow className={classes.rightArrow}/></Button>
      </div>
      <div>
        <div className={`${classes.contentContainer} ${classes.rightContent}`}>
          <div className={classes.subTextContainer}>
            <Star />
            <h4 className={classes.subText}>
              AI-Driven Environmental Education for Everyone, Everywhere
              <div className={classes.rightStar}>
                <Star />
              </div>
            </h4>
          </div>
        </div>
      </div>
      </div>
      <video
        className={`${classes.video} ${isVideoFullScreen ? classes.videoFullScreen : ""}`}
        autoPlay
        loop
        controls
      >
        <source src="videos/introduction.mov" />
      </video>
      
    </main>
  );
};


export default Hero;
