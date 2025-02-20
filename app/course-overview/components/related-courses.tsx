
import classes from "./course-description.module.css";
import TileComponent from "../../programs/components/tile/tile";
import { CoursesInterface } from "@app/programs/constants/constants";

  interface RelatedCoursesListProps {
    relatedCourses: CoursesInterface[];
  }
  

const RelatedCourses: React.FC<RelatedCoursesListProps> = ({relatedCourses}) => {
  
  return (<div> 
   
    
              <div className={classes.relatedCoursesContainer}>
              <span className={classes.heading}>Related Courses</span>
              <div className={classes.gridContainer}>
        {relatedCourses.map((course, index) => (
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
      </div></div>
              </div>);
              };

export default RelatedCourses;