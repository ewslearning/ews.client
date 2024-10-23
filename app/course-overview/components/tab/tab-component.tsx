"use client";
import React, { useState } from 'react';
import classes from './tab-component.module.css';
import Check from '../../assets/icons/check-circle.svg';

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ['Overview', 'Topics Covered', 'Training Modules'];

  const tabContent = [
    <div key="overview" className={classes.tabContentContainer}>
      <h5 className={classes.contentHeading}>Course Description</h5>
      <p className={classes.paragraph}>This program equips participants with the skills to develop and implement corporate sustainability strategies, including compliance with ISO 14001, sustainability reporting, and managing supply chains sustainably.</p>
      <h5 className={classes.contentHeading}>What You'll Learn from This Course</h5>
      <p className={classes.paragraph}>Participants will learn to develop sustainability policies and embed them into their business practices. The course covers environmental management systems (EMS), carbon footprint reduction, and sustainable supply chain strategies.</p>
      <div className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>How to develop corporate sustainability policies.</span></div>
      <div className={classes.iconSpanDiv}><Check className={classes.checkIcon} /><span className={classes.text}>Environmental management systems (EMS) and ISO 14001 compliance.</span></div>
      <div className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>Carbon footprint reduction and reporting.</span></div>
      <div className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>Life cycle management and resource efficiency.</span></div>
      <div className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>Sustainable supply chain management.</span></div>
      <h5 className={classes.contentHeading}>Certification</h5>
      <p className={classes.paragraph}>Upon completion, participants will receive a Certificate in Corporate Sustainability, confirming their ability to integrate sustainability into business operations.</p>
    </div>,
    <div key="topics">
      <div className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>Policy development, environmental management systems (EMS), and ISO 14001 
      compliance.</span></div>
      <div className={classes.iconSpanDiv}><Check className={classes.checkIcon} /><span className={classes.text}>life cycle management and sustainable resource utilization.</span></div>
    </div>,
    <div key="modules">
      <p className={classes.paragraph}>Interactive modules on hazardous waste handling, thermal desorption, bioremediation, 
      and more.</p>
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
