
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

  const whyRecyclingAtWorkMattersList = [
        {
          heading: "Environmental Degradation",
          text: "Landfills emit greenhouse gases, while improper disposal leads to soil, air, and water pollution."
        },
        {
          heading: "Health Risks",
          text: "Poor waste handling exposes communities to hazardous chemicals and diseases."
        },
        {
          heading: "Improves Employee Morale",
          text: "Employees feel proud to work for organizations that align with their values, including sustainability."
        }, {
          heading: "Compliance and Reputation",
          text: "Many regions now mandate recycling policies, and businesses gain reputational benefits by adhering to these regulations."
        }
  ];

  const sentences = [
    {
      heading: "Assets Your Workplace Needs",
      text: ["Conduct a waste audit to identify what materials are being discarded.", "Determine the volume and types of recyclables your workplace generates, such as paper, plastic, metal, and electronic waste."],
    },
    {
      heading: "Set Up Recycling Stations",
      text: ["Place clearly labeled bins for different materials like paper, plastics, and organics in accessible locations.", "Use visuals and color coding to make segregation simple and intuitive."],
    },
    {
      heading: "Partner with Certified Recyclers",
      text: ["Collaborate with local recycling companies to ensure proper handling of collected materials.", 
        "For electronic waste, partner with certified e-waste recyclers to responsibly manage old equipment."]
    },
    {
      heading: "Encourage Paperless Workflows",
      text: ["Reduce paper waste by digitizing documents and using cloud storage.",
         "Implement double-sided printing as a default and discourage unnecessary printouts."]
    },
    {
      heading: "Promote Reuse",
      text: ["Set up initiatives like stationery-sharing programs or reuse of office supplies.",
         "Encourage employees to bring reusable bottles, mugs, and utensils to reduce plastic use."]
    },
    {
      heading: "Educate and Engage Employees",
      text: [ "Conduct regular workshops and share resources on the importance of recycling.",
         "Use posters, email campaigns, and social media to reinforce the message.",
        "Celebrate milestones, such as the amount of waste diverted from landfills."]
    },
  ];

  const creativeIdeasList = [
    {
      heading: "Upcycle Old Office Furniture",
      text: "Instead of discarding old furniture, consider refurbishing it or donating it to nonprofits."
    },
    {
      heading: "Start a Composting Program",
      text: "If your workplace has a cafeteria, compost food scraps to create nutrient-rich soil."
    },
    {
      heading: "Host Recycling Challenges",
      text: "Organize competitions among departments to see who can recycle the most in a month."
    }, {
      heading: "E-waste Drives",
      text: "Set up a collection drive for old electronics from employees and ensure proper recycling."
    }
];

const benefitsOfRecyclingList = [
  {
    heading: "Environmental Impact",
    text: "Reducing the amount of waste sent to landfills cuts greenhouse gas emissions and pollution."
  },
  {
    heading: "Financial Savings",
    text: "Recycling reduces waste management costs and can create revenue streams for high-value recyclables."
  },
  {
    heading: "Community Engagement",
    text: "Businesses that recycle inspire surrounding communities to adopt similar practices."
  }, {
    heading: "Positive Brand Image",
    text: "Companies that prioritize recycling earn trust and loyalty from environmentally conscious customers and stakeholders."
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
      <p className={classes.description}>In today’s environmentally-conscious world, recycling is no longer optional—it’s a necessity. Workplaces, as hubs of activity and resource consumption, are uniquely positioned to drive recycling efforts. By implementing effective recycling practices, businesses can reduce their environmental footprint, save costs, and foster a culture of sustainability among employees.</p>

       <NumberedList title='Why Recycling at Work Matters' description='Globally, we produce over 2 billion tons of waste annually, and this figure is expected to rise dramatically. Mismanaged waste contributes to a range of issues, including :' sentences={whyRecyclingAtWorkMattersList}/>
       <BulletedNumberedList title='How to Set Up a Recycling Program at Work' sentences={sentences}/>
       <NumberedList title='Creative Ideas for Workplace Recycling' description="Creating a sustainable workplace requires more than infrastructure and policies; it demands a 
cultural shift. Organizations can foster this by" sentences={creativeIdeasList}/>
<NumberedList title='Benefits of Recycling at the Workplace'  sentences={benefitsOfRecyclingList}/>
       <TitledPara heading='Conclusion' text='Recycling at the workplace is more than a logistical initiative; it’s a statement of your organization’s commitment to sustainability. By embedding recycling into your work culture, you can make a meaningful contribution to the planet while fostering a sense of responsibility and pride among your team.'/>
       <p className={classes.footNote}>Let’s make workplaces green, one recycled item at a time. How is your organization leading the charge on recycling? Share your stories and ideas in the comments below.</p>
    </div>
  );
};

export default BlogWidget;
