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
      <p className={classes.paragraph}>Our team of sustainability professionals is highly trained and possesses in-depth, on-ground knowledge of the challenges and opportunities in waste management. They work closely with communities, corporations, and policymakers to develop and implement strategies that promote environmental sustainability, social equity, and responsible governance. Their expertise ensures that our initiatives are both innovative and practical, making a tangible impact on the ground.</p>
      </div>
    ,
    <div key="Corporate Partnership Leads">
      <p className={classes.paragraph}>Our corporate partnership team is dedicated to building strong, mutually beneficial relationships with businesses. They understand the corporate value chain and work to integrate our sustainability and waste management solutions seamlessly into our partners’ operations. Their efforts help us scale our impact, bringing our mission and vision to life in collaboration with industry leaders.</p>
      </div>,
    <div key="Educational Program Coordinators">
    <p className={classes.paragraph}>These team members are responsible for designing and delivering customized training programs for employees and managers. With a deep understanding of both educational pedagogy and industry requirements, enhanced by their experience in running educational institutions, they ensure that our training programs are effective, engaging, and aligned with the latest sustainability trends and regulations.</p>
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
