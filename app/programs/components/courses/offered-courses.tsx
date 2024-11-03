import classes from "./offered-courses.module.css";
import TileComponent from "../tile/tile";
import TileImg1 from "../../..//home/assets/images/waste-management.png";
import TileImg2 from "../../..//home/assets/images/Corporate Sustainability Programs.png";
import TileImg3 from "../../..//home/assets/images/Sustainable Workforces.png";
import TileImg4 from "../../..//home/assets/images/Environmental Compliance Training.png";
import TileImg5 from "../../..//home/assets/images/Sustainable Supply Chain Management.png";
import TileImg6 from "../../..//home/assets/images/Circular Economy  Strategies.png";


const OfferedCourses: React.FC = () => {
  const courses = [
    {
      imageSrc: TileImg1,
      title: "Waste Management & Recycling Programs",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    // Add more courses as needed
    {
      imageSrc: TileImg2,
      title: "Corporate Sustainability Programs",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
      imageSrc: TileImg3,
      title: "Sustainable\nWorkforces",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
      imageSrc: TileImg4,
      title: "Environmental Compliance Training",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
      imageSrc: TileImg5,
      title: "Sustainable Supply Chain Management",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
      imageSrc: TileImg6,
      title: "Circular Economy\nStrategies",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
  ];

return ( <div className={classes.parentContainer}>
           <span className={classes.heading}>Courses We Offer</span>
           <div className={classes.gridContainer}>
        {courses.map((course, index) => (
          <TileComponent
            key={index}
            imageSrc={course.imageSrc}
            title={course.title}
            bulletPoints={course.bulletPoints}
            mode={course.mode}
            duration={course.duration}
          />
        ))}
      </div>
          </div>);

};

export default OfferedCourses;
