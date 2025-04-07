"use client";

import React from "react";
import classes from "./what-youll-learn.module.css";
import {
  Leaf,
  Recycle,
  Droplets,
  Sun,
  Apple,
  Shirt,
  MessageCircle,
  Award,
} from "lucide-react";
import ModuleCard from "../module-card/module-card"; // make sure ModuleCard is a separate component

const WhatYoullLearn: React.FC = () => {
  return (
    <section id="modules" className={classes.modulesSection}>
      <div className={classes.container}>
        <div className={classes.textCenter}>
          <h2 className={classes.heading}>What You'll Learn</h2>
          <p className={classes.subtext}>
            Each module is packed with engaging content, creativity boosters, and climate leadership tools
          </p>
        </div>

        <div className={classes.modulesGrid}>
          <ModuleCard
            number={1}
            title="Understanding Environment, Climate & Pollution"
            description="Explore the fundamentals of environmental science and the interconnected challenges we face today."
            icon={<Leaf className={classes.icon} />}
          />
          <ModuleCard
            number={2}
            title="Waste Management & the Power of 10Rs"
            description="Discover innovative approaches to waste reduction and the principles of circular resource use."
            icon={<Recycle className={classes.icon} />}
          />
          <ModuleCard
            number={3}
            title="Water Conservation & DIY Greywater Solutions"
            description="Learn about water scarcity issues and practical solutions for conservation and reuse."
            icon={<Droplets className={classes.icon} />}
          />
          <ModuleCard
            number={4}
            title="Renewable Energy & Building Solar Projects"
            description="Understand clean energy technologies and create your own solar-powered devices."
            icon={<Sun className={classes.icon} />}
          />
          <ModuleCard
            number={5}
            title="Sustainable Eating & Food Waste Solutions"
            description="Explore the environmental impact of food systems and develop strategies for sustainable consumption."
            icon={<Apple className={classes.icon} />}
          />
          <ModuleCard
            number={6}
            title="Circular Economy & Fast Fashion Reimagined"
            description="Examine the fashion industry's environmental footprint and discover sustainable alternatives."
            icon={<Shirt className={classes.icon} />}
          />
          <ModuleCard
            number={7}
            title="Youth Changemakers & Communication for Impact"
            description="Develop your voice as an environmental advocate and learn effective communication strategies."
            icon={<MessageCircle className={classes.icon} />}
          />
          <ModuleCard
            number={8}
            title="Final Showcase & Certificate Presentation"
            description="Present your sustainability project and celebrate your achievements as a Young Guardian."
            icon={<Award className={classes.icon} />}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;
