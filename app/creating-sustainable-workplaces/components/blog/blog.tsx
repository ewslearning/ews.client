
import Image, { StaticImageData } from 'next/image';
import classes from './blog.module.css';
import React from 'react';
import NumberedList from '../title-numbered-text/title-numbered-text';
import BulletedNumberedList from '../bulleted-numbered-text/bulleted-numbered-text';
import TitledPara from '../titled-paragraph/titled-paragraph';

interface BlogComponentProps {
  imageSrc: StaticImageData;
  title: string;
}
  
const BlogWidget: React.FC<BlogComponentProps> = ({ imageSrc, title }) => {

  const a = [
        {
          heading: "Environmental Impact",
          text: "Offices contribute significantly to carbon emissions, energy consumption, and waste generation. Implementing green practices can substantially reduce these impacts."
        },
        {
          heading: "Economic Benefits",
          text: "Sustainability initiatives, such as energy efficiency and waste reduction, result in cost savings."
        },
        {
          heading: "Economic Benefits",
          text: "Employees today value purpose-driven organizations. A sustainable workplace reflects a company’s commitment to broader societal goals, boosting morale and retention."
        }, {
          heading: "Reputation Building",
          text: "A commitment to sustainability enhances a company’s brand image, attracting eco-conscious clients and partners."
        }
  ];

  const sentences = [
    {
      heading: "Green Infrastructure",
      text: ["Install energy-efficient lighting and appliances.", "Use renewable energy sources, such as solar panels, for power.", "Optimize workspace designs for natural light and ventilation."],
    },
    {
      heading: "Reduce, Reuse, Recycle",
      text: ["Implement comprehensive waste segregation and recycling programs.", "Partner with certified recyclers to manage e-waste and other non-biodegradables.", "Encourage employees to go paperless by adopting digital workflows."],
    },
    {
      heading: "Sustainable Supplies",
      text: ["Source office supplies from eco-friendly vendors.", "Prioritize sustainable materials like recycled paper, biodegradable packaging, and refillable products."]
    },
    {
      heading: "Smart Energy Use",
      text: ["Use smart energy management systems to monitor and reduce electricity consumption.", "Encourage employees to switch off lights and equipment when not in use."]
    },
    {
      heading: "Promote Sustainable Commuting",
      text: ["Encourage carpooling, cycling, and public transport.", "Offer incentives for employees using electric vehicles."]
    },
    {
      heading: "Eco-conscious Food Practices",
      text: [ "Offer plant-based meal options in cafeterias.", "Eliminate single-use plastics and encourage reusable containers and utensils."]
    },
  ];

  const b = [
    {
      heading: "Environmental Impact",
      text: "Offices contribute significantly to carbon emissions, energy consumption, and waste generation. Implementing green practices can substantially reduce these impacts."
    },
    {
      heading: "Economic Benefits",
      text: "Sustainability initiatives, such as energy efficiency and waste reduction, result in cost savings."
    },
    {
      heading: "Economic Benefits",
      text: "Employees today value purpose-driven organizations. A sustainable workplace reflects a company’s commitment to broader societal goals, boosting morale and retention."
    }, {
      heading: "Reputation Building",
      text: "A commitment to sustainability enhances a company’s brand image, attracting eco-conscious clients and partners."
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
      <p className={classes.description}>In today’s evolving business landscape, sustainability has transitioned from a buzzword to 
a critical strategy. As organizations strive to meet environmental goals and align with 
global sustainability standards, creating sustainable workplaces has become a pivotal 
aspect of corporate responsibility. Not only does this contribute to environmental 
preservation, but it also fosters employee engagement and long-term economic benefits.</p>

       <NumberedList title='Why Sustainable Workplaces Matter' sentences={a}/>
       <BulletedNumberedList title='Key Elements of a Sustainable Workplace' sentences={sentences}/>
       <NumberedList title='Building a Sustainable Culture' description="Creating a sustainable workplace requires more than infrastructure and policies; it demands a 
cultural shift. Organizations can foster this by" sentences={b}/>
       <TitledPara heading="Innovating for the Future"  text="Incorporating emerging technologies like AI-driven energy management systems or IoT-enabled waste monitoring can amplify sustainability efforts. Organizations can also collaborate with startups and NGOs in the sustainability space to bring innovative solutions to the workplace."/>
       <TitledPara heading='Conclusion' text='Sustainability in the workplace is not just a trend; it’s an essential step towards a greener future. By embedding sustainable practices into daily operations, companies can play a significant role in combating climate change while reaping economic and social benefits.<br><br>Let’s build workplaces that are not only productive but also planet-friendly. Together, we can redefine success by making sustainability the core of our work culture.'/>
    </div>
  );
};

export default BlogWidget;
