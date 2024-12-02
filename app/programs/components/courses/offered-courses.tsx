"use client";
import classes from "./offered-courses.module.css";
import TileComponent from "../tile/tile";
import TileImg1 from "../../..//home/assets/images/waste-management.png";
import TileImg2 from "../../..//home/assets/images/Corporate Sustainability Programs.png";
import TileImg3 from "../../..//home/assets/images/Sustainable Workforces.png";
import TileImg4 from "../../..//home/assets/images/Environmental Compliance Training.png";
import TileImg5 from "../../..//home/assets/images/Sustainable Supply Chain Management.png";
import TileImg6 from "../../..//home/assets/images/Circular Economy  Strategies.png";
import TileImg7 from "../../..//home/assets/images/energy-efficiency.png";
import TileImg8 from "../../..//home/assets/images/sustainable-product-design.png";
import TileImg9 from "../../..//home/assets/images/ai-and-sustainability.png";
import Button from "@app/home/components/common/button/button";
import { useState } from "react";


const OfferedCourses: React.FC = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
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

    {
      imageSrc: TileImg7,
      title: "Energy Efficiency and\nConservation",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
      imageSrc: TileImg8,
      title: "Sustainable\nProduct Design",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    },
    {
      imageSrc: TileImg9,
      title: "AI and Sustainability\nIntegration",
      bulletPoints: ["Customizable based on the specific sector.", "Tailored to the size of the group."],
      mode: "Online/Offline",
      duration: "2 to 8 hours",
    }
  ];

  const visibleCourses = showAllCourses ? courses : courses.slice(0, 3);


return ( <div className={classes.parentContainer}>
           <span className={classes.heading}>Courses We Offer</span>
           <div className={classes.gridContainer}>
        {visibleCourses.map((course, index) => (
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
      {!showAllCourses && (
        <Button onClick={() => setShowAllCourses(true)}>Explore More Courses</Button>
      )}
          </div>);

};

export default OfferedCourses;
