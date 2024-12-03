"use client";
import React, { useState } from "react";
import classes from "./tab-component.module.css";
import Check from "../../assets/icons/check-circle.svg";
export interface OverviewProps {
  courseDescription: string;
  whatYoullLearn: {
    description: string;
    points: string[];
  };
  certification: string;
}

interface CourseDetailsProps {
  overview: OverviewProps;
  topicsCovered: string[];
  trainingModules: string;
}

const TabComponent : React.FC<CourseDetailsProps> = ({overview, topicsCovered, trainingModules}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ["Overview", "Topics Covered", "Training Modules"];

  const tabContent = [
    <div key="overview" className={classes.tabContentContainer}>
      <h5 className={classes.contentHeading}>Course Description</h5>
      <p className={classes.paragraph}>{overview.courseDescription}</p>
      <h5 className={classes.contentHeading}>What You&apos;ll Learn from This Course</h5>
      <p className={classes.paragraph}>{overview.whatYoullLearn.description}</p>
      {overview.whatYoullLearn.points.map((e, index) => <div key={index} className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>{e}</span></div>)}
      
      <h5 className={classes.contentHeading}>Certification</h5>
      <p className={classes.paragraph}>{overview.certification}</p>
    </div>,
    <div key="topics">
      {topicsCovered.map((e, index)=> <div key={index} className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>{e}</span></div>)}
     
        </div>,
    <div key="modules">
      <p className={classes.paragraph}>{trainingModules}</p>
    </div>
  ];

  return (
    <div className={classes.tabsContainer}>
      <div className={classes.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${classes.tab} ${selectedTab === index ? classes.selectedTab : classes.unselectedTab}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className={classes.content}>
      {tabContent[selectedTab]}
      </div>
    </div>
  );
};

export default TabComponent;
