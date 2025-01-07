import classes from "./hero.module.css";
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
           <div className={classes.textBelow}> In-Depth Understanding of Sustainability Concepts:<br/>
Learn the principles of sustainability, including environmental stewardship, social responsibility, and sustainable development practices.
</div>
                  <div className={classes.divider} ></div>
                  </div>
                  <div className={classes.item}>
            <div className={classes.svgContainer}>
              <Second className={classes.svgImage}/>
              <div className={classes.textOverlay}>
              Benefit 2
            </div>
            </div>
           
            <div className={classes.textBelow}>Career Growth and Opportunities:<br/>
              The courses are designed to equip learners with skills that are highly valued in industries focusing on ESG (Environmental, Social, and Governance), green innovation, and corporate sustainability.
                  </div>
                  <div className={classes.divider} ></div>
                  </div>
                  <div className={classes.item}>
            <div className={classes.svgContainer}>
              <Third className={classes.svgImage}/>
              <div className={classes.textOverlay}>
              Benefit 3
            </div></div>
            <div className={classes.textBelow}>Flexible and Customizable Learning:<br/>
            With online modules, interactive sessions, and tailored content, learners can balance professional and personal commitments while achieving their learning goals. </div>
                  <div className={classes.divider} ></div>
                  </div>
                  
            </div>
          </div>);

};

export default Hero;
