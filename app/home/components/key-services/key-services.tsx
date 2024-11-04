"use client";
import React, { useState } from "react";
import classes from "./key-services.module.css";
import {
  Accordion,
  AccordionItemProps,
  AccordionItem as Item,
} from "@szhsin/react-accordion";
import PlusIcon from "@assets/icons/plus-icon.svg?url";
import MinusIcon from "@assets/icons/minus.svg?url";
import Image from "next/image";
import WasteMgmtTraining from "@app/home/assets/icons/wasteMgmtTraining.svg";
import Sustainability from "@app/home/assets/icons/corporateSustainability.svg"; 
import RecyclingPrograms from "@app/home/assets/icons/recycling-programs.svg";
import RecyclingIndustryTraining from "@app/home/assets/icons/recyclingIndustryTrainings.svg";

const AccordionItem: React.FC<AccordionItemProps & { isExpanded: boolean }> = ({ header, isExpanded,
  ...rest
}) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <Image
          className={classes.chevron}
          src={isExpanded ? MinusIcon : PlusIcon}
          alt={isExpanded ? "Minus Icon" : "Plus Icon"}
        />
      </>
    }
    className={classes.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${classes.itemBtn} ${isEnter && classes.itemBtnExpanded}`,
    }}
    contentProps={{ className: classes.itemContent }}
    panelProps={{ className: classes.itemPanel }}
    headingTag="h4"
  />
);

const KeyServices: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    <WasteMgmtTraining key="0" />,
    <Sustainability key="1" />,
    <RecyclingPrograms key="2" />,
    <RecyclingIndustryTraining key="3" />,
  ];

  const handleAccordionClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <section className={classes.keyServicesContainer}>
      <h1 className={classes.header}>Key Services</h1>
      <h3 className={classes.subText}>Overview of Core Services</h3>
      <p className={classes.description}>
        Our comprehensive offerings are designed to empower organizations and
        individuals with the knowledge and skills needed to excel in waste
        management, corporate sustainability, and related fields.
      </p>
      <div className={classes.accordion}>
        <Accordion
          transition
          transitionTimeout={250}
          className={classes.accordionItem}
        >
          <AccordionItem
            header="Waste Management Training"
            isExpanded={selectedIndex === 0}
            onClick={() => handleAccordionClick(0)}
          >
            Equip your team with the latest techniques and best practices in
            waste management to minimize environmental impact and enhance
            operational efficiency.
            <div className={classes.mobImageContainer}>
          {selectedIndex !== null && images[selectedIndex]}
        </div>
          </AccordionItem>

          <AccordionItem
            header="Corporate Sustainability"
            isExpanded={selectedIndex === 1}
            onClick={() => handleAccordionClick(1)}
          >
            Foster a culture of sustainability within your organization through
            targeted training programs that integrate environmental, social, and
            governance (ESG) principles into your business strategy.
            <div className={classes.mobImageContainer}>
          {selectedIndex !== null && images[selectedIndex]}
        </div>
          </AccordionItem>

          <AccordionItem
            header="Recycling Programs"
            isExpanded={selectedIndex === 2}
            onClick={() => handleAccordionClick(2)}
          >
            Develop and implement effective recycling programs tailored to your
            organization&apos;s needs, promoting a circular economy and reducing
            waste.
            <div className={classes.mobImageContainer}>
          {selectedIndex !== null && images[selectedIndex]}
        </div>
          </AccordionItem>

          <AccordionItem
            header="Recycling Industry Trainings"
            isExpanded={selectedIndex === 3}
            onClick={() => handleAccordionClick(3)}
          >
            Gain specialized knowledge and skills in recycling industry
            operations, from material recovery to innovative recycling
            technologies, ensuring compliance and advancing sustainability
            goals.
            <div className={classes.mobImageContainer}>
          {selectedIndex !== null && images[selectedIndex]}
        </div>
          </AccordionItem>
        </Accordion>

        {/* Render the selected image */}
        <div className={classes.imageContainer}>
          { selectedIndex === null ? images[0] :selectedIndex !== null && images[selectedIndex]}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;