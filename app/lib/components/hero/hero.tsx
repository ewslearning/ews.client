import classes from "./hero.module.css";
import Star from "@assets/icons/star.svg";
import PeopleTalkingImage from "@assets/images/people-talking.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <main className={classes.heroContainer}>
      <div className={`${classes.contentContainer} ${classes.leftContent}`}>
        <h2>
          Empowering Sustainable Futures through Environmental Education &
          Corporate Sustainability
        </h2>
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
          <div className={classes.imageContainer}>
            <Image
              src={PeopleTalkingImage}
              alt="Peple Talking"
              priority
              sizes="100vw"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
