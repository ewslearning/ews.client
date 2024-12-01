
import Image, { StaticImageData } from 'next/image';
import classes from './blog.module.css';
import React from 'react';
import NumberedList from '../../../creating-sustainable-workplaces/components/title-numbered-text/title-numbered-text';
import BulletedNumberedList from '../../../creating-sustainable-workplaces/components/bulleted-numbered-text/bulleted-numbered-text';
import TitledPara from '../../../creating-sustainable-workplaces/components/titled-paragraph/titled-paragraph';


interface BlogComponentProps {
  imageSrc: StaticImageData;
  title: string;
}
  
const BlogWidget: React.FC<BlogComponentProps> = ({ imageSrc, title }) => {

  const theGlobalWaterCrysis = [
        {
          heading: "Environmental Degradation",
          text: "Landfills emit greenhouse gases, while improper disposal leads to soil, air, and water pollution."
        },
        {
          heading: "Health Risks",
          text: "Poor waste handling exposes communities to hazardous chemicals and diseases."
        },
        {
          heading: "Resource Depletion",
          text: "Valuable materials are lost when waste is not recycled or reused."
        }, {
          heading: "Economic Losses",
          text: "Inefficient waste systems strain local economies and limit growth opportunities."
        }
  ];

  const linkBetweenWastMgmtAndSdgsList = [
    {
      heading: "Good Health and Well-being",
      text: ["Proper disposal of medical and hazardous waste reduces the spread of diseases.", 
        "Safe waste systems minimize exposure to toxic substances and improve overall public health."],
    },
    {
      heading: "Clean Water and Sanitation",
      text: ["Effective waste management prevents pollutants from contaminating water sources, ensuring access to clean water for all."],
    },
    {
      heading: "Sustainable Cities and Communities",
      text: ["Urban waste management systems make cities cleaner, safer, and more livable.", 
        "Encouraging recycling and composting reduces landfill dependency, improving urban sustainability."]
    },
    {
      heading: "Responsible Consumption and Production",
      text: ["Promotes the principles of a circular economy by reducing, reusing, and recycling materials.",
         "Encourages businesses to adopt sustainable practices in waste handling."]
    },
    {
      heading: "Climate Action",
      text: ["Reducing landfill waste lowers greenhouse gas emissions like methane.",
         "Recycling and energy recovery from waste contribute to decarbonization efforts."]
    },
    {
      heading: "Life Below Water & Life on Land",
      text: [ "Preventing plastic and hazardous waste from entering ecosystems protects wildlife and biodiversity.",
         "Proper waste disposal combats land degradation and ocean pollution."]
    },
  ];

  const impOfWasteMgmtList = [
    {
      heading: "Environmental Protection",
      text: ["Prevents pollution of air, water, and land.",
        "Supports ecosystems and reduces biodiversity loss."
      ]
    },
    {
      heading: "Resource Conservation",
      text:[ "Recycling recovers valuable materials, reducing the need for virgin resources.",
        "Waste-to-energy systems convert waste into electricity or fuel, maximizing resource use."
      ]
    },
    {
      heading: "Economic Opportunities",
      text:[ "A robust waste management sector creates jobs in recycling, upcycling, and waste-to-energy industries.",
        "Circular economy models open avenues for innovation and entrepreneurship."
      ]
    }, {
      heading: "Health and Social Equity",
      text: ["Reduces disease outbreaks linked to unregulated dumping.", 
        "Ensures marginalized communities are not disproportionately affected by waste mismanagement."]
    }
];

const makeWasteMgmtSustainableList = [
  {
    heading: "Adopt Circular Economy Principles",
    text: "Design systems that minimize waste generation and promote reuse and recycling."
  },
  {
    heading: "Invest in Technology",
    text: "Use AI and IoT for smart waste management, improving collection efficiency and recycling rates."
  },
  {
    heading: "Policy Implementation",
    text: " :  Governments must enforce strict regulations on waste disposal and incentivize sustainable practices."
  }, {
    heading: "Community Engagement",
    text: "Educate and involve communities in waste reduction and recycling initiatives."
  }, 
  {
    heading: "Corporate Responsibility",
    text: "Businesses should adopt sustainable packaging and integrate waste management into their operations."
  }
];

  return (
   
    <div className={classes.heroParentContainer}>
            <h5 className={classes.title}>{title.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</h5>
      <Image
          src={imageSrc}
          alt={title}
          className={classes.image}
        />
      <p className={classes.description}>As the global population continues to grow and urbanization accelerates, the challenge of managing waste sustainably has become more pressing than ever. Proper waste management is not just about keeping our surroundings clean; it’s a cornerstone of sustainable development, directly impacting the health of our planet and its inhabitants. The United Nations&apos; Sustainable Development Goals (SDGs) recognize this significance, embedding waste management as a critical element of a sustainable future.</p>

       <NumberedList title='The Global Waste Crisis: Why It Matters' 
       description='Globally, we produce over 2 billion tons of waste annually, and this figure is expected to rise dramatically. Mismanaged waste contributes to a range of issues, including :' 
       sentences={theGlobalWaterCrysis}
       footNote="Proper waste management is essential to addressing these challenges while creating a more sustainable and equitable world."
       />
       <BulletedNumberedList title='The Link Between Waste Management and the SDGs' 
       description='Several SDGs emphasize the importance of waste management. Here&apos;s how it aligns with key goals :'
       sentences={linkBetweenWastMgmtAndSdgsList}/>
       <BulletedNumberedList title='The Importance of Proper Waste Management'  sentences={impOfWasteMgmtList}/>
       <NumberedList title='How Can We Make Waste Management Sustainable ?'  sentences={makeWasteMgmtSustainableList}/>
       <TitledPara heading='Conclusion' text='Proper waste management is not just a logistical challenge—it is a pathway to achieving sustainable
 development and protecting our planet for future generations. By linking waste management to SDGs, 
we underscore its importance in fostering a resilient and equitable world.<br></br>Every action, whether by an individual, corporation, or government, can make a difference. Let’s commit to 
transforming waste into a resource, driving innovation, and making sustainability a shared responsibility.'/>
       <p className={classes.footNote}>How is your organization or community contributing to proper waste management? Let&apos;s share solutions and inspire change!</p>
    </div>
  );
};

export default BlogWidget;
