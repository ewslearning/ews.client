"use client";
import React, { useState } from "react";
import classes from "./tab-component.module.css";
import Check from "../../../course-overview/assets/icons/check-circle.svg";

export interface HighlightsProps {
  whatYoullLearn: {
    points: {
      title: string;
      description: string;
    }[];
  };
}

export interface KeyLearningModulesProps {
  content: {
    title: string;
    points: string[];
  }[];
}

export interface ProgramStructureProps {
  points: {
    title: string;
    description: string;
  }[];
}

export interface TabProps {
  highlights: HighlightsProps;
  keyLearningModules: KeyLearningModulesProps;
  programStructure: ProgramStructureProps;
}

const TabComponent: React.FC<TabProps> = ({
  highlights,
  keyLearningModules,
  programStructure,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ["Program Highlights", "Key Learning Modules", "Program Structure"];

  const tabContent = [
    <div key={tabs[0]} className={classes.tabContentContainer}>
      <h5 className={classes.contentHeading}>
        What You&apos;ll Learn from This Course
      </h5>
      {highlights.whatYoullLearn.points.map((e, index) => (
        <div key={index} className={classes.iconSpanDiv}>
          <Check className={classes.checkIcon} />
          <span className={classes.text}>
            {e.title} : <span className={classes.para}>{e.description}</span>
          </span>
        </div>
      ))}
    </div>,
    <div key={tabs[1]} className={classes.tabContentContainer}>
      {keyLearningModules.content.map((e, index) => (
        <div key={index} className={classes.moduleContainer}>
          <div className={classes.iconSpanDiv}>
            <Check className={classes.checkIcon} />
            <span className={classes.text}>{e.title}:</span>
          </div>
          <ul className={classes.bulletPointsContainer}>
            {e.points.map((point, index) => (
              <li key={index} className={classes.bulletPoint}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>,
    <div key={tabs[2]} className={classes.tabContentContainer}>
      {programStructure.points.map((e, index) => (
        <div key={index} className={classes.iconSpanDiv}>
          <Check className={classes.checkIcon} />
          <span className={classes.text}>
            {e.title} : <span className={classes.para}>{e.description}</span>
          </span>
        </div>
      ))}
    </div>,
  ];

  return (
    <div className={classes.tabsContainer}>
      <div className={classes.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${classes.tab} ${
              selectedTab === index ? classes.selectedTab : classes.unselectedTab
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className={classes.content}>{tabContent[selectedTab]}</div>
    </div>
  );
};

export default TabComponent;
