import classes from "./hero.module.css";
import Star from "@assets/icons/star.svg";
import ProgramsHero from "@assets/images/programsHero.png";
import Image from "next/image";
import CertifiedPrograms from '@assets/icons/certifiedPrograms.svg';
import First from '@assets/icons/O1.svg';
import Second from '@assets/icons/O2.svg';
import Third from '@assets/icons/O3.svg';

const Hero: React.FC = () => {
return (<div>
            <Image  className={classes.hero}
              src={ProgramsHero}
              alt="Programs Hero"
              priority
              placeholder="blur"
            />
            <div className={classes.titleContainer}>
            <div className={classes.headerContainer}>
            <CertifiedPrograms/>
            <span className={classes.headerText}>Certified Programs</span>
            </div>
            <span className={classes.subheaderText}>Learning anytime,<br/>anywhere - 
              </span >
              <span className={classes.onlineOffline}> Online and Offline.</span>
              </div>
            <div className={classes.stepsContainer}>
            <div className={classes.item}>
            <div className={classes.svgContainer}>
              <First className={classes.svgImage}/>
              <div className={classes.textOverlay}>
                   Benefit 1
            </div>
            </div>
           <div className={classes.textBelow}>Yo Reddit! What’s a small<br/> 
                  thing that anyone can do<br/> 
                  at nearly anytime to<br/> 
                  improve their mood and<br/>
                  make </div>
                  <div className={classes.divider} ></div>
                  </div>
                  <div className={classes.item}>
            <div className={classes.svgContainer}>
              <Second className={classes.svgImage}/>
              <div className={classes.textOverlay}>
                   Benefit 2
            </div>
            </div>
           
            <div className={classes.textBelow}>Yo Reddit! What’s a small<br/> 
                  thing that anyone can do<br/> 
                  at nearly anytime to<br/> 
                  improve their mood and<br/>
                  make </div>
                  <div className={classes.divider} ></div>
                  </div>
                  <div className={classes.item}>
            <div className={classes.svgContainer}>
              <Third className={classes.svgImage}/>
              <div className={classes.textOverlay}>
                   Benefit 3
            </div></div>
            <div className={classes.textBelow}>Yo Reddit! What’s a small<br/> 
                  thing that anyone can do<br/> 
                  at nearly anytime to<br/> 
                  improve their mood and<br/>
                  make </div>
                  <div className={classes.divider} ></div>
                  </div>
                  
            </div>
          </div>);

};

export default Hero;
