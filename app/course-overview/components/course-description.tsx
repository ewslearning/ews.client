"use client";
import classes from "./course-description.module.css";
import CertifiedPrograms from '@assets/icons/certifiedPrograms.svg';
import { useRouter, useSearchParams } from "next/navigation";
import Calendar from "../assets/icons/calendar.svg";
import Mode from "../assets/icons/mode.svg";
import Language from "../assets/icons/language.svg";
import Certification from "../assets/icons/certification.svg";
import TabComponent from "./tab/tab-component";
import TileComponent from "../../programs/components/tile/tile";
import WasteManagement from "@assets/images/waste-management.png";


const CourseDescription: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams.get('title')

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
        
      ];

return (<div> 
            <div className={classes.titleContainer}>
            <div className={classes.headerContainer}>
            <CertifiedPrograms/>
            <span className={classes.headerText}>Certified Programs</span>
            </div>
            <span className={classes.subheaderText}>{title}
              </span >
              <p className={classes.description}>This program helps organizations integrate sustainability into their business operations, focusing on policy development, ISO 14001 compliance, and life cycle management. Participants will explore strategies to reduce their carbon footprint and optimize resource utilization.</p>
              <p className={classes.description}>The course also offers modules on sustainable supply chain management, enabling organizations 
              to build more environmentally responsible operations.</p>
              </div >
              <div className={classes.features}>
                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Calendar className={classes.icon}/>
                            Duration</div>
                        <div>2 to 8 hours</div>
                    </div>

                    <div className={classes.verticalDivider}></div>

                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Mode className={classes.icon}/>
                            Mode</div>
                        <div>Online</div>
                    </div>
                    
                    <div className={classes.verticalDivider}></div>

                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Language className={classes.icon}/>
                            Language</div>
                        <div>English</div>
                    </div>

                    <div className={classes.verticalDivider}></div>

                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Certification className={classes.icon}/>
                            Certification</div>
                        <div>Yes</div>
                    </div>
                    <div className={classes.buttonContainer}>
          {/* Contact Us button */}
          <button className={classes.contactButton}>Contact Us</button></div>
              </div>

              {/* //Features Mobile */}
              <div className={classes.featuresMobile}>
                <div className={classes.featuresGrid}>
                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Calendar className={classes.icon}/>
                            Duration</div>
                        <div className={classes.subTxt}>2 to 8 hours</div>
                    </div>

                    
                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Mode className={classes.icon}/>
                            Mode</div>
                        <div className={classes.subTxt}>Online</div>
                    </div>
                    
                   

                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Language className={classes.icon}/>
                            Language</div>
                        <div className={classes.subTxt}>English</div>
                    </div>


                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Certification className={classes.icon}/>
                            Certification</div>
                        <div className={classes.subTxt}>Yes</div>
                    </div>
                    </div>
                    <div className={classes.buttonContainer}>
          {/* Contact Us button */}
          <button className={classes.contactButton}>Contact Us</button></div>
              </div>


              <TabComponent />
              <div className={classes.relatedCoursesContainer}>
              <span className={classes.heading}>Related Courses</span>
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
      </div></div>
              </div>);
              };

export default CourseDescription;