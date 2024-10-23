import classes from "./offered-courses.module.css";
import TileComponent from "../tile/tile";
import WasteManagement from "@assets/images/waste-management.png";


const OfferedCourses: React.FC = () => {
  const courses = [
    {
      imageSrc: WasteManagement,
      title: "Waste Management & Recycling Programs",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    // Add more courses as needed
    {
      imageSrc: WasteManagement,
      title: "Corporate Sustainability Programs",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
      imageSrc: WasteManagement,
      title: "Sustainable\nWorkforces",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
      imageSrc: WasteManagement,
      title: "Environmental Compliance Training",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
      imageSrc: WasteManagement,
      title: "Sustainable Supply Chain Management",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
      imageSrc: WasteManagement,
      title: "Circular Economy\nStrategies",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
  ];

return (<div className={classes.parentContainer}>
           <span className={classes.heading}>Courses We Offer</span>
           <div className={classes.gridContainer}>
        {courses.map((course, index) => (
          <TileComponent
            key={index}
            imageSrc={course}
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
