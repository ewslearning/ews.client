"use client";
import classes from "./course-description.module.css";
import CertifiedPrograms from '@assets/icons/certifiedPrograms.svg';
import {useSearchParams, useRouter} from "next/navigation";
import Calendar from "../assets/icons/calendar.svg";
import Mode from "../assets/icons/mode.svg";
import Language from "../assets/icons/language.svg";
import Certification from "../assets/icons/certification.svg";
import TileImg1 from "../../home/assets/images/waste-management.png";
import TileImg2 from "../../home/assets/images/Corporate Sustainability Programs.png";
import TileImg3 from "../../home/assets/images/Sustainable Workforces.png";
import TileImg4 from "../../home/assets/images/Environmental Compliance Training.png";
import TileImg5 from "../../home/assets/images/Sustainable Supply Chain Management.png";
import TileImg6 from "../../home/assets/images/Circular Economy  Strategies.png";
import TileImg7 from "../../home/assets/images/energy-efficiency.png";
import TileImg8 from "../../home/assets/images/sustainable-product-design.png";
import TileImg9 from "../../home/assets/images/ai-and-sustainability.png";
import courses, { CoursesInterface } from "@app/programs/constants/constants";
import { StaticImageData } from "next/image";
import Hero from "./hero/hero";

import Check from "../assets/icons/check-circle.svg";
import OurPartners from "./our-partners/our-partners";
import RelatedCourses from "./related-courses";
import { OverviewProps } from "./tab/tab-component";



const getThreeCoursesExcludingCurrent = (courses: CoursesInterface[], currentId: number) => {
    // Filter out the course with the matching currentId
    const filteredCourses = courses.filter(course => course.id !== currentId);
  
    // Take the first 3 courses or less if not enough
    return filteredCourses.length >= 3 
      ? filteredCourses.slice(0, 3) 
      : [...filteredCourses, ...courses.filter(course => course.id === currentId).slice(0, 3 - filteredCourses.length)];
  };

  interface CourseOverviewProps {
    id: number,
      imageSrc: StaticImageData,
      title: string,
      description: string,
      mode: string,
      duration: string,
      lannguage: string,
      certification: string,
      overview: OverviewProps,
      topicsCovered: string[],  
      trainingModules: string
  } 
  
const coursesList : CourseOverviewProps[] = [ 
    { 
      id: 2,
      imageSrc: TileImg2,
      title: "Corporate<br>Sustainability<br>Programs",
      description: "This program helps organizations integrate sustainability into their business operations, focusing on policy development, ISO 14001 compliance, and life cycle management. Participants will explore strategies to reduce their carbon footprint and optimize resource utilization.<br><br>The course also offers modules on sustainable supply chain management, enabling organizations to build more environmentally responsible operations.",
      mode: "Online/Offline",
      duration: "2 to 8 hours",
      lannguage: "English",
      certification: "Yes",
      overview: {
         courseDescription: "This program equips participants with the skills to develop and implement corporate sustainability strategies, including compliance with ISO 14001, sustainability reporting, and managing supply chains sustainably.",
         whatYoullLearn: {
            description: "Participants will learn to develop sustainability policies and embed them into their business practices. The course covers environmental management systems (EMS), carbon footprint reduction, and sustainable supply chain strategies.",
            points: ["How to develop corporate sustainability policies.",
                "Environmental management systems (EMS) and ISO 14001 compliance.",
                "Carbon footprint reduction and reporting.",
                "Life cycle management and resource efficiency.",
                "Sustainable supply chain management."
            ],
         },
         certification: "Upon completion, participants will receive a Certificate in Corporate Sustainability, confirming their ability to integrate sustainability into business operations.",

      },
      topicsCovered: ["Policy development, environmental management systems (EMS), and ISO 14001 compliance.", 
        "life cycle management and sustainable resource utilization."],
        trainingModules: "Tailored modules on sustainability reporting, carbon footprint reduction, and sustainable supply chains.",
      

      
    },
    // Add more courses as needed
    {
      id: 1,
      imageSrc: TileImg1,
      title: "Waste<br>Management &<br>Recycling<br>Programs",
      description: "Our Waste Management & Recycling Program equips participants with in-depth knowledge of sustainable waste management practices tailored for both corporate and public sectors. This program covers waste classification, safe handling, disposal methods, and regulatory compliance, ensuring businesses and organizations adhere to environmental laws and sustainability standards.<br><br>Participants will also explore customized recycling solutions, circular economy strategies, and innovative waste reduction techniques to minimize environmental impact. By mastering eco-friendly waste disposal and resource recovery methods, attendees can contribute to a greener, more sustainable future while helping organizations achieve their corporate social responsibility (CSR) and ESG (Environmental, Social, and Governance) goals.<br><br>Ideal for professionals in environmental management, sustainability consulting, and corporate compliance, this program provides the skills and insights needed to drive effective waste management initiatives.",
        mode: "Online/Offline",
      duration: "2 to 8 hours",
      lannguage: "English",
      certification: "Yes",
      overview: {
         courseDescription: "Participants will learn about waste classification, recycling processes, and compliance with environmental standards. The course includes specialized modules on hazardous waste handling, thermal desorption, and bioremediation.",
        whatYoullLearn: {
           description: "The course introduces participants to key waste management and recycling techniques, covering economic considerations and regulatory compliance. It offers interactive modules on hazardous waste handling and other advanced recycling techniques.",
           points: ["Waste classification, handling, and disposal techniques.",
"Recycling processes, economic considerations, and compliance with regulations..",
"Customized recycling solutions for different waste types.",
"Hazardous waste handling and bioremediation.",
 "Economic considerations in waste management.",
           ],
        },
        certification: "Participants who complete the course will receive a Certificate in Waste Management and Recycling, verifying their ability to manage waste and recycling in compliance with environmental standards.<br>This industry-recognized certification demonstrates your ability to implement eco-friendly waste disposal, recycling strategies, and environmental sustainability initiatives in corporate, industrial, and public sectors.",

     },
      topicsCovered: [],
        trainingModules: "Interactive modules on hazardous waste handling, thermal desorption, bioremediation, and more.",
      
    },
    {
      id: 3,
      imageSrc: TileImg3,
      title: "Sustainable<br>Workforces",
      description: "This program is designed to engage employees in sustainable practices within organizations. Participants will learn the 5 R’s (Reduce, Reuse, Recycle, Recover, and Rethink) and how to develop workplace policies that promote sustainability.<br><br>The course also covers hands-on workshops that help create green teams and foster environmental stewardship within organizations.",
      mode: "Online/Offline",
      duration: "2 to 8 hours",
      lannguage: "English",
      certification: "Yes",
      overview: {
        courseDescription: "The course focuses on engaging employees in sustainability efforts, covering the 5 R's, green team development, and sustainable workplace policies. Practical workshops will provide participants with strategies for creating a sustainable workforce.",
       whatYoullLearn: {
          description: "Participants will gain the tools to foster a sustainable workplace culture. The program covers employee engagement in sustainability, developing green office policies, and creating inclusive and environmentally responsible work environments.",
          points: ["Understanding and applying the 5 R’s in the workplace.",
"Employee engagement in sustainability practices.",
"Developing sustainable workplace policies.",
"Creating and leading green teams.",
"Promoting environmental stewardship."
          ],
       },
       certification: "Participants will earn a Certificate in Sustainable Workforce Development, validating their ability to cultivate sustainability within their organizations.",

    },
      topicsCovered: ["Employee engagement in sustainability practices.", 
        "Training on the 5 R’s: Reduce, Reuse, Recycle, Recover, and Rethink.",
      "Developing sustainable workplace policies."],
        trainingModules: "Hands-on workshops on creating green teams, promoting environmental stewardship, and fostering inclusive and sustainable work environments.",
      
    },
    {
      id: 4,
      imageSrc: TileImg4,
      title: "Environmental<br>Compliance<br>Training",
      description: "This program provides participants with the knowledge and skills to ensure environmental compliance within their organizations. The training covers legal requirements, best practices, and compliance strategies to mitigate environmental risks.<br><br>Through detailed modules, participants will learn how to conduct environmental audits and meet regulatory standards for waste management and sustainability.",
      mode: "Online/Offline",
      duration: "2 to 8 hours",
      lannguage: "English",
      certification: "Yes",
      overview: {
        courseDescription: "The program covers legal requirements in waste management and sustainability, along with best practices for environmental compliance. Participants will gain hands-on experience in conducting environmental audits and managing environmental risks.",
       whatYoullLearn: {
          description: "This course provides an in-depth understanding of environmental compliance, focusing on regulatory frameworks, audits, and risk management. Participants will learn to ensure their organizations meet environmental standards and regulations.",
          points: ["Understanding environmental laws and regulations.",
"Best practices for environmental compliance.",
"Conducting environmental audits.",
"Environmental risk management strategies.",
"Compliance with waste management regulations."
          ],
       },
       certification: "Participants will receive a Certificate in Environmental Compliance, recognizing their expertise in managing compliance and reducing environmental risks.",

    },
      topicsCovered: ["Legal requirements in waste management and sustainability.",
        "Best practices for environmental compliance.",
"Compliance strategies to mitigate environmental risks.",
      ],
        trainingModules: "Detailed modules on regulatory frameworks, environmental audits, and environmental risk management."
    },
    {
      id: 5,
      imageSrc: TileImg5,
      title: "Sustainable<br>Supply Chain<br>Management",
      description: "This program focuses on developing and managing sustainable supply chains, with an emphasis on green procurement, ethical sourcing, and reducing environmental impact. Participants will learn strategies to create transparent and efficient supply chains that align with sustainability goals.<br><br>The course also covers supplier engagement and life cycle assessments to optimize the environmental and social impacts of supply chain operations.",
      mode: "Online/Offline",
      duration: "2 to 8 hours",
      lannguage: "English",
      certification: "Yes",
      overview: {
        courseDescription: "This program teaches participants how to build sustainable supply chains, from green procurement to life cycle assessments. Participants will gain practical skills for improving transparency, reducing environmental impact, and engaging suppliers in sustainability practices.",
       whatYoullLearn: {
          description: "Participants will explore green procurement, ethical sourcing practices, and strategies to reduce environmental impact across supply chains. The course offers detailed modules on supplier engagement and sustainable logistics.",
          points: ["Green procurement and ethical sourcing.",
"Life cycle assessments in supply chains.",
"Reducing environmental impact in logistics.",
"Supplier engagement in sustainability.",
"Strategies for creating sustainable supply chains."
          ],
       },
       certification: "Participants will earn a Certificate in Sustainable Supply Chain Management, demonstrating their ability to develop and manage environmentally responsible supply chains.",

    },
      topicsCovered: ["Green procurement and ethical sourcing practices.",
        "Transparency in the supply chain and reducing environmental impact.",
"Life cycle assessment and supplier engagement."
      ],
        trainingModules: "Modules on implementing sustainable procurement policies, supplier sustainability assessments, and optimizing logistics for sustainability.",
      
    },
    {
      id: 6,
      imageSrc: TileImg6,
      title: "Circular<br>Economy<br>Strategies",
      description: "This program provides participants with an understanding of circular economy principles and their application in business. It covers strategies to reduce waste, optimize resource use, and design business models based on the circular economy.<br><br>Participants will explore product lifecycle management and materials recovery, helping businesses “close the loop” on resource use.",
      mode: "Online/Offline",
      duration: "2 to 8 hours",
      lannguage: "English",
      certification: "Yes",
      overview: {
        courseDescription: "The program focuses on helping businesses transition to a circular economy model, covering product lifecycle management, waste reduction, and resource recovery strategies. Participants will gain practical insights into designing circular business models.",
       whatYoullLearn: {
          description: "This course covers circular economy principles and how they can be applied to business operations to minimize waste and maximize resource efficiency. Participants will learn about product lifecycle management and strategies for a circular business model.",
          points: ["Principles of the circular economy.",
"Waste reduction and resource efficiency.",
"Product lifecycle management.",
"Designing circular business models.",
"Materials recovery and reuse strategies."
          ],
       },
       certification: "Participants will receive a Certificate in Circular Economy Strategies, certifying their ability to implement circular economy principles in business.",

    },
      topicsCovered: ["Waste reduction and resource efficiency.", 
        "Product lifecycle management and closing the loop on resource use."],
        trainingModules: "nteractive sessions on designing for a circular economy, materials recovery, and circular business models."
    },

    {
      id: 7,
      imageSrc: TileImg7,
      title: "Energy<br>Efficiency and<br>Conservation",
      description: "This program teaches participants how to reduce energy consumption and improve operational efficiency within their organizations. Participants will learn strategies for conducting energy audits, implementing energy-saving measures, and integrating renewable energy solutions.<br><br>The program covers both behavioural and technical approaches to energy conservation, helping organizations lower operational costs and reduce their carbon footprint.",
      mode: "Online/Offline",
      duration: "2 to 8 hours",
      lannguage: "English",
      certification: "Yes",
      overview: {
        courseDescription: "This program offers practical training on conducting energy audits, reducing energy consumption, and integrating renewable energy solutions. Participants will learn both the technical and behavioural strategies for energy efficiency.",
       whatYoullLearn: {
          description: "Participants will learn to identify and implement energy-saving measures in their organizations. The course covers energy audits, conservation techniques, and renewable energy integration, providing actionable insights for improving efficiency.",
          points: ["Conducting energy audits.",
"Implementing energy-saving measures.",
"Behavioural change for energy efficiency.",
"Renewable energy integration.",
"Strategies to reduce operational costs."
          ],
       },
       certification: "Participants will earn a Certificate in Energy Efficiency and Conservation, validating their expertise in reducing energy consumption and improving efficiency.",

    },
      topicsCovered: ["Energy audits and sustainable energy management practices.",
"Strategies to lower operational costs through energy conservation.",
"Renewable energy integration in business operations."],
        trainingModules: "Practical modules on implementing energy-saving measures, renewable energy solutions, and behavioral change initiatives for energy efficiency.",
    },
    {
      id: 8,
      imageSrc: TileImg8,
      title: "Sustainable<br>Product<br>Design",
      description: "This program explores the principles of sustainable design, focusing on material selection, product lifecycle impact, and design for durability. Participants will learn to create products that minimize environmental impact and maximize sustainability.<br><br>The course also covers eco-design principles and life cycle analysis, helping organizations develop products with sustainability in mind.",
      mode: "Online/Offline",
      duration: "2 to 8 hours",
      lannguage: "English",
      certification: "Yes",
      overview: {
        courseDescription: "This program teaches participants the principles of sustainable product design, focusing on creating durable and eco-friendly products. Participants will learn to apply life cycle analysis and design for sustainability.",
       whatYoullLearn: {
          description: "Participants will learn how to design sustainable products, from material selection to lifecycle analysis. The course covers eco-design principles and strategies for reducing environmental impact through thoughtful product design.",
          points: ["Principles of sustainable product design.,",
"Material selection for sustainability.",
"Product lifecycle analysis.",
"Designing for durability and end-of-life.",
"Eco-design strategies."
          ],
       },
       certification: "Participants will receive a Certificate in Sustainable Product Design, demonstrating their ability to design and develop eco-friendly products.",

    },
      topicsCovered: ["Material selection for sustainability.",
"Designing for durability and end-of-life considerations."],
        trainingModules: "Modules on sustainable product development, eco-design principles, and life cycle analysis.",
      
    },
    {
      id: 9,
      imageSrc: TileImg9,
      title: "AI and<br>Sustainability<br>Integration",
      description: "This program teaches participants how to leverage AI technologies to enhance sustainability efforts. Participants will explore how AI can optimize resource use, predict environmental risks, and improve sustainability performance across various sectors.<br><br>The course provides hands-on training on AI-driven sustainability solutions and the use of data analytics to manage environmental challenges.",
      mode: "Online/Offline",
      duration: "2 to 8 hours",
      lannguage: "English",
      certification: "Yes",
      overview: {
        courseDescription: "This program focuses on integrating AI into sustainability practices, covering resource optimization and environmental risk management. Participants will learn how to use AI tools and data analytics to enhance their organization’s sustainability efforts.",
       whatYoullLearn: {
          description: "Participants will learn how AI can be used to improve sustainability outcomes. The course covers AI-driven resource optimization, environmental risk management, and the role of AI in achieving sustainability goals.",
          points: ["Leveraging AI for resource optimization.",
                   "AI-driven environmental risk management.",
                   "Data analytics for sustainability management.",
                   "Predictive tools for environmental challenges.",
                   "AI-powered sustainability solutions."
          ],
       },
       certification: "Participants will earn a Certificate in AI and Sustainability Integration, recognizing their ability to use AI to enhance sustainability efforts within organizations.",

    },
      topicsCovered: ["Leveraging AI for resource optimization.",
"Predicting and managing environmental risks using AI technologies."],
        trainingModules: "Hands-on sessions on AI-driven sustainability solutions, data analytics for environmental management, and AI-powered resource efficiency.",
      
    },
    {
      id: 10,
      imageSrc: TileImg9,
      title: "Sustainable<br>Development<br>Goals (SDG)",
      description: "This program provides participants with knowledge of the United Nations Sustainable Development Goals (SDGs) and their impact on businesses, governments, and communities. Participants will gain practical skills in sustainability strategies, policy integration, and responsible resource management to contribute to a more sustainable future.",
      mode: "Online/Offline",
      duration: "1 hours",
      lannguage: "English",
      certification: "Yes",
      overview: {
        courseDescription: "Participants will learn about global sustainability challenges and how SDGs can be applied in various industries. The course includes specialized modules on sustainability reporting, ethical leadership, and responsible resource management, helping individuals and organizations contribute effectively to sustainable development.",
       whatYoullLearn: {
          description: "This course provides insights into the practical applications of sustainability and global responsibility. It explores actionable strategies for corporate, public, and personal initiatives aligned with the SDGs.",
          points: [
          ],
       },
       certification: "Participants will earn a Certificate in Sustainable Development Goals (SDG) Course, recognizing their ability to use SDGs in various industries.",

    },
      topicsCovered: ["Introduction to the 17 Sustainable Development Goals",
"The role of businesses, governments, and individuals in achieving SDGs",
"Sustainable resource management and environmental responsibility",
"Corporate Social Responsibility (CSR) and ethical leadership",
"Strategies for integrating SDGs into business and policy frameworks"],
        trainingModules: "Module 1: Understanding the 17 SDGs and Their Importance<br>Module 2: Sustainability in Business and Policy-Making<br>Module 3: Corporate Social Responsibility (CSR) & Ethical Practices<br>Module 4: Environmental Sustainability and Green Initiatives",
      
    }
  ];

const CourseDescription: React.FC = () => {
    const searchParams = useSearchParams();
    const id = parseInt(searchParams?.get('id') ?? "0", 10);
    const relatedCourses = getThreeCoursesExcludingCurrent(courses, id);
  
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact"); 
  };
const selectedCourse = coursesList.find((course) => course.id === id) ?? coursesList[0];
return (<div> 
    <Hero title={selectedCourse.title} image={selectedCourse.imageSrc}/>
            <div className={classes.titleContainer}>
            <div className={classes.headerContainer}>
            <CertifiedPrograms/>
            <span className={classes.headerText}>Certified Programs</span>
            </div>
            <div className={classes.subheaderText}>{selectedCourse.title.replace(/<br>/g, " ")}
              </div >
              <p className={classes.description} dangerouslySetInnerHTML={{__html: selectedCourse.description}}></p>
              </div >
              <div className={classes.features}>
                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Calendar className={classes.icon}/>
                            Duration</div>
                        <div>{selectedCourse.duration}</div>
                    </div>

                    <div className={classes.verticalDivider}></div>

                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Mode className={classes.icon}/>
                            Mode</div>
                        <div>{selectedCourse.mode}</div>
                    </div>
                    
                    <div className={classes.verticalDivider}></div>

                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Language className={classes.icon}/>
                            Language</div>
                        <div>{selectedCourse.lannguage}</div>
                    </div>

                    <div className={classes.verticalDivider}></div>

                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Certification className={classes.icon}/>
                            Certification</div>
                        <div>{selectedCourse.certification}</div>
                    </div>
                    <div className={classes.buttonContainer}>
          {/* Contact Us button */}
          <button onClick={handleNavigation} className={classes.contactButton}>Contact Us</button></div>
              </div>

              {/* //Features Mobile */}
              <div className={classes.featuresMobile}>
                <div className={classes.featuresGrid}>
                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Calendar className={classes.icon}/>
                            Duration</div>
                        <div className={classes.subTxt}>{selectedCourse.duration}</div>
                    </div>

                    
                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Mode className={classes.icon}/>
                            Mode</div>
                        <div className={classes.subTxt}>{selectedCourse.mode}</div>
                    </div>
                    
                   

                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Language className={classes.icon}/>
                            Language</div>
                        <div className={classes.subTxt}>{selectedCourse.lannguage}</div>
                    </div>


                    <div className={classes.textColumn}>
                        <div className={classes.iconTextRow}>
                            <Certification className={classes.icon}/>
                            Certification</div>
                        <div className={classes.subTxt}>{selectedCourse.certification}</div>
                    </div>
                    </div>
                    <div className={classes.buttonContainer}>
          {/* Contact Us button */}
          <button onClick={handleNavigation} className={classes.contactButton}>Contact Us</button></div>
              </div>

              {/* <TabComponent overview={selectedCourse.overview} topicsCovered={selectedCourse.topicsCovered} trainingModules={selectedCourse.trainingModules} /> */}
              {/* Overview */}
              <div key="overview" className={classes.tabContentContainer}>
      <h5 className={classes.contentHeading}>Course Description</h5>
      <p className={classes.paragraph}>{selectedCourse.overview.courseDescription}</p>
      <h5 className={classes.contentHeading}>What You&apos;ll Learn from This Course</h5>
      <p className={classes.paragraph}>{selectedCourse.overview.whatYoullLearn.description}</p>
      {selectedCourse.overview.whatYoullLearn.points.map((e, index) => <div key={index} className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>{e}</span></div>)}
      {/* Topics Covered */}
    <div key="topics">
      {selectedCourse.topicsCovered.map((e, index)=> <div key={index} className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>{e}</span></div>)}
     
        </div>
        {/* TrainingModules */}
        <div key="modules">
        <h5 className={classes.contentHeading}>Training Modules</h5>
      <p className={classes.paragraph} dangerouslySetInnerHTML={{ __html: selectedCourse.trainingModules }}></p>
    </div>
    <div className={classes.certificationContainer}>
      <h5 className={classes.contentHeadingCertification}>🎓 Certification of Completion – Your Green Badge of Honor! 🌍</h5>
      <p className={classes.paragraphCertification} dangerouslySetInnerHTML={{ __html: selectedCourse.overview.certification }}></p>
      </div>
      <div>
        <h5 className={classes.contentHeading}>Requirements</h5>
      <p className={classes.paragraph} >No experience and requirements are required.</p>
    </div>
    </div>
    <OurPartners/>
<RelatedCourses relatedCourses={relatedCourses}/>
              </div>);
              };

export default CourseDescription;