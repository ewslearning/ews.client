
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import classes from "./tile.module.css";

interface TileComponentProps {
  id: number,
  imageSrc: StaticImageData;
  title: string;
  bulletPoints: string[];
  mode: string;
  duration: string;
}

const TileComponent: React.FC<TileComponentProps> = ({ imageSrc, id, title, bulletPoints, mode, duration }) => {

  return (
    <Link
      href={{
        pathname: "/course-overview",
        query: { id },
      }}
      className={classes.link}
    >
    <div className={classes.tileContainer}>
      <div className={classes.imageContainer}>
      <Image
          src={imageSrc}
          alt={title}
          className={classes.image}
        />
      </div>
      <h5 className={classes.title}>{title.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</h5>
      <ul className={classes.bulletPoints}>
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <hr className={classes.divider} />
      <div className={classes.info}>
        <p>
          Mode: <strong>{mode}</strong>
        </p>
        <p>
          Duration: <strong>{duration}</strong>
        </p>
      </div>
    </div></Link>
  );
};

export default TileComponent;
