
import classes from "./hero.module.css";
import HeroBg from "../../assets/images/programs-hero-bg.png";
import MobHeroBg from "../../assets/images/mob-hero-bg.png";
import Duration from "../../assets/images/duration.png";
import Image, { StaticImageData } from "next/image";
interface HeroProps{
    title: string;
    image: StaticImageData;
}
const Hero: React.FC<HeroProps> = ({title, image}) => {
   
return (
<div>
<div className={classes.desktopContainer}> 
    <Image src={HeroBg} alt="Hero bg" className={classes.bgImage}/>
    <Image src={image} alt="HeroTopImage" className={classes.topImage}/>
    <h2 className={classes.heading} dangerouslySetInnerHTML={{ __html: title }}/>
    <Image src={Duration} alt="Hero Duration" className={classes.durationImg}/>
              </div>

              <div className={classes.mobileContainer}> 
    <Image src={MobHeroBg} alt="Mobile Hero bg" className={classes.mobBgImage}/>
    <div className={classes.mobContainer}>
    <h2 className={classes.headingMob}>{title}</h2>
    <Image src={image} alt="HeroTopImage" className={classes.topImage2}/>
    <div className={classes.durationImgMobContainer}>
     <Image src={Duration} alt="Hero Duration" className={classes.durationImgMob}/>
     </div>
              </div>
              </div>
              </div>);
              };

export default Hero;