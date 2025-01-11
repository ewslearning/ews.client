"use client";
import { useEffect, useState } from "react";
import classes from "./hero.module.css";
import Star from "@assets/icons/star.svg";
import RightArrow from "@assets/icons/right-arrow.svg";
import Button from "@components/common/button/button";
import { useRouter } from "next/navigation";
import GreenLine from "@assets/icons/green-line.svg";

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
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVideoFullScreen]);

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/programs"); // Replace with your target path
  };

  return (
    <main className={classes.heroContainer}>
      <div className={classes.baseContainer}>
        <div className={`${classes.ripple} ${classes.ripple1}`}></div>
        <div className={`${classes.ripple} ${classes.ripple2}`}></div>
        <div className={`${classes.ripple} ${classes.ripple3}`}></div>
        <div className={`${classes.ripple} ${classes.ripple4}`}></div>
        <div className={`${classes.contentContainer} ${classes.leftContent}`}>
         <h1 className={classes.leftHeaderTxt1}>Empowering Sustainable</h1>
         <GreenLine className={classes.greenLine}/>
          <h1 className={classes.leftHeaderTxt}>
              Futures through Environmental<br/>Education &
            Corporate Sustainability
          </h1>
          
          <Button onClick={handleNavigation} variant="whiteBg">
            Explore Programs
            <RightArrow className={classes.rightArrow} />
          </Button>
        </div>
       
        <div>
          <div
            className={`${classes.contentContainer} ${classes.rightContent}`}
          >
            <div className={classes.subTextContainer}>
              <Star />
              <h2 className={classes.subText}>
                AI-Driven Environmental Education for Everyone, Everywhere
                <div className={classes.rightStar}>
                  <Star />
                </div>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <video
        className={`${classes.video} ${
          isVideoFullScreen ? classes.videoFullScreen : ""
        }`}
        preload="metadata"
        src="videos/introduction.mov" 
        autoPlay
        muted
        loop
        controls
        playsInline
      >
      </video>
    </main>
  );
};

export default Hero;
