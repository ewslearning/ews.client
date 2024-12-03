"use client";
import classes from "./offered-courses.module.css";
import TileComponent from "../tile/tile";
import Button from "@app/home/components/common/button/button";
import { useState } from "react";
import courses from "@app/programs/constants/constants";


const OfferedCourses: React.FC = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const visibleCourses = showAllCourses ? courses : courses.slice(0, 3);


return ( <div className={classes.parentContainer}>
           <span className={classes.heading}>Courses We Offer</span>
           <div className={classes.gridContainer}>
        {visibleCourses.map((course, index) => (
          <TileComponent
            key={index}
            id={course.id}
            imageSrc={course.imageSrc}
            title={course.title}
            bulletPoints={course.bulletPoints}
            mode={course.mode}
            duration={course.duration}
          />
        ))}
      </div>
      {!showAllCourses && (
        <Button onClick={() => setShowAllCourses(true)}>Explore More Courses</Button>
      )}
          </div>);

};

export default OfferedCourses;
