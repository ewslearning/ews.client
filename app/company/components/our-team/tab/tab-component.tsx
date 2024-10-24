"use client";
import React, { useState } from 'react';
import classes from './tab-component.module.css';

const CompanyTabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ['Dedicated Founders', 'Sustainability Experts', 'Corporate Partnership Leads', 'Educational Program Coordinators'];

  const tabContent = [
    <div key="Dedicated Founders" className={classes.tabContentContainer}>
      <p className={classes.paragraph}>With a combined wealth of experience in the recycling and waste management industry, our founders are the visionaries behind our program. Their strong foundation in academic and educational institutions, including experience in running educational institutions, ensures that our initiatives are research-driven, impactful, and aligned with best practices in both the waste management and education sectors. Their leadership is instrumental in guiding our mission to integrate ESG principles into waste management and achieve the UN SDG goals.</p>
       </div>,
    <div key="Sustainability Experts">
      <p className={classes.paragraph}>With a combined wealth of experience in the recycling and waste management industry, our founders are the visionaries behind our program. Their strong foundation in academic and educational institutions, including experience in running educational institutions, ensures that our initiatives are research-driven, impactful, and aligned with best practices in both the waste management and education sectors. Their leadership is instrumental in guiding our mission to integrate ESG principles into waste management and achieve the UN SDG goals.</p>
      </div>
    ,
    <div key="Corporate Partnership Leads">
      <p className={classes.paragraph}>With a combined wealth of experience in the recycling and waste management industry, our founders are the visionaries behind our program. Their strong foundation in academic and educational institutions, including experience in running educational institutions, ensures that our initiatives are research-driven, impactful, and aligned with best practices in both the waste management and education sectors. Their leadership is instrumental in guiding our mission to integrate ESG principles into waste management and achieve the UN SDG goals.</p>
      </div>,
    <div key="Educational Program Coordinators">
    <p className={classes.paragraph}>With a combined wealth of experience in the recycling and waste management industry, our founders are the visionaries behind our program. Their strong foundation in academic and educational institutions, including experience in running educational institutions, ensures that our initiatives are research-driven, impactful, and aligned with best practices in both the waste management and education sectors. Their leadership is instrumental in guiding our mission to integrate ESG principles into waste management and achieve the UN SDG goals.</p>
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

export default CompanyTabComponent;
