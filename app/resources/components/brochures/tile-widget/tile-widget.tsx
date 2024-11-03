
import Image, { StaticImageData } from 'next/image';
import classes from './tile-widget.module.css';
import React from 'react';

interface TileComponentProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
}


  
const TileWiget: React.FC<TileComponentProps> = ({ imageSrc, title, description }) => {
  return (
   
    <div className={classes.tilesParentContainer}>
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
         <p className={classes.description}>
          Mode
        </p>
        <button className={classes.readMore}>Read More</button>
    </div>
  );
};

export default TileWiget;
