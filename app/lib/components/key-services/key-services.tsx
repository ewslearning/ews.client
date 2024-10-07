"use client";
import React from "react";
import classes from "./key-services.module.css";
import {
  Accordion,
  AccordionItemProps,
  AccordionItem as Item,
} from "@szhsin/react-accordion";
import PlusIcon from "@assets/icons/plus-icon.svg?url";
import Image from "next/image";

const AccordionItem: React.FC<AccordionItemProps> = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      // @ts-ignore
      <>
        {header}
        <Image className={classes.chevron} src={PlusIcon} alt="Plus Icon" />
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
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={250}>
          <AccordionItem header="Waste Management Training" initialEntered>
            Equip your team with the latest techniques and best practices in
            wastemanagement to minimize environmental impact and enhance
            operational efficiency.
          </AccordionItem>

          <AccordionItem header="Corporate Sustainability">
            Foster a culture of sustainability within your organization through
            targeted training programs that integrate environmental, social, and
            governance (ESG) principles into your business strategy.
          </AccordionItem>

          <AccordionItem header="Recycling Programs">
            Develop and implement effective recycling programs tailored to your
            organization's needs, promoting a circular economy and reducing
            waste.
          </AccordionItem>

          <AccordionItem header="Recycling Industry Trainings">
            Gain specialized knowledge and skills in recycling industry
            operations, from material recovery to innovative recycling
            technologies, ensuring compliance and advancing sustainability
            goals.
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default KeyServices;
