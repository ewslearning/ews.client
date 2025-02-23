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
import Faq from "./faqs/faq";



const getThreeCoursesExcludingCurrent = (courses: CoursesInterface[], currentId: number) => {
    // Filter out the course with the matching currentId
    const filteredCourses = courses.filter(course => course.id !== currentId);
  
    // Take the first 3 courses or less if not enough
    return filteredCourses.length >= 3 
      ? filteredCourses.slice(0, 3) 
      : [...filteredCourses, ...courses.filter(course => course.id === currentId).slice(0, 3 - filteredCourses.length)];
  };

  interface FAQ {
    question: string;
    answer: string;
  }
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
      trainingModules: string,
      faqs: FAQ[],
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
      faqs: [
          {
            question: "What is a Corporate Sustainability Program?",
            answer: "A Corporate Sustainability Program focuses on integrating sustainability into business strategies, reducing environmental impact, and promoting ethical business practices."
          },
          {
            question: "Who should take this course?",
            answer: "This course is ideal for corporate professionals, sustainability managers, business leaders, and organizations looking to implement sustainable practices."
          },
          {
            question: "How can this course benefit my organization?",
            answer: "It helps businesses improve environmental performance, comply with sustainability regulations, enhance brand reputation, and achieve ESG (Environmental, Social, and Governance) goals."
          },
          {
            question: "Do I need prior experience to take this course?",
            answer: "No prior experience is needed. This course is designed for both beginners and professionals looking to enhance their sustainability knowledge."
          },
          {
            question: "Does the course include case studies of successful sustainability programs?",
            answer: "Yes, the course covers real-world case studies of companies that have successfully implemented sustainability initiatives."
          },
          {
            question: "Will I learn how to measure sustainability impact?",
            answer: "Yes, the course includes methodologies for measuring and reporting sustainability impact using recognized frameworks."
          }
      ]

      
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
      faqs: [
        {
          question: "What does this course cover?",
          answer: "This course provides insights into waste classification, recycling processes, hazardous waste handling, and sustainable waste management strategies."
        },
        {
          question: "Who should enroll in this course?",
          answer: "It is suitable for environmental officers, waste management professionals, business owners, and anyone interested in reducing waste impact."
        },
        {
          question: "How will this course help my organization?",
          answer: "It equips organizations with the knowledge to reduce waste, increase recycling rates, comply with environmental laws, and develop waste reduction policies."
        },
        {
          question: "Is this course focused on industrial or household waste?",
          answer: "The course covers both industrial and household waste management, with strategies applicable to businesses, municipalities, and individuals."
        },
        {
          question: "Does this course include information on e-waste management?",
          answer: "Yes, the course covers electronic waste management, recycling, and disposal best practices."
        },
        {
          question: "Will I learn about government policies and incentives for waste management?",
          answer: "Yes, the course includes discussions on waste management policies, regulations, and government incentives for businesses and communities."
        }
      ]
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
      faqs: [
        {
          question: "What is Sustainable Workforce Development?",
          answer: "Sustainable Workforce Development focuses on creating long-term employment strategies that align with environmental and social sustainability goals."
        },
        {
          question: "Who should take this course?",
          answer: "This course is suitable for HR professionals, corporate leaders, educators, and policymakers aiming to develop sustainable workforces."
        },
        {
          question: "What are the benefits of this course?",
          answer: "It helps organizations attract and retain talent, create inclusive workplaces, and align workforce strategies with sustainability initiatives."
        },
        {
          question: "Do I need prior experience in HR to enroll?",
          answer: "No prior HR experience is necessary. The course is designed for anyone interested in sustainable employment practices."
        },
        {
          question: "Will this course cover diversity, equity, and inclusion (DEI)?",
          answer: "Yes, the course includes DEI best practices and their role in a sustainable workforce."
        },
        {
          question: "Does this course explore remote work and digital transformation?",
          answer: "Yes, it covers sustainable workforce trends, including remote work, flexible schedules, and digital tools."
        }
      ]
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
        trainingModules: "Detailed modules on regulatory frameworks, environmental audits, and environmental risk management.",
        faqs: [
          {
            question: "What is Environmental Compliance Training?",
            answer: "This course teaches businesses and individuals how to comply with environmental regulations, reduce risks, and ensure sustainability in operations."
          },
          {
            question: "Who should enroll in this course?",
            answer: "It is ideal for compliance officers, environmental managers, business leaders, and employees handling regulatory responsibilities."
          },
          {
            question: "How does this training help organizations?",
            answer: "It helps organizations stay compliant with environmental laws, avoid fines, and implement best practices for sustainability."
          },
          {
            question: "Do I need prior legal knowledge?",
            answer: "No, this course covers the basics of environmental laws and compliance, making it accessible to all learners."
          }
        ]
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
      faqs: [
        {
          question: "What does this course cover?",
          answer: "This course explores sustainable sourcing, ethical procurement, reducing supply chain emissions, and improving efficiency."
        },
        {
          question: "Who should take this course?",
          answer: "It is suitable for supply chain managers, procurement specialists, sustainability officers, and business owners."
        },
        {
          question: "How can this course benefit my company?",
          answer: "It helps companies create eco-friendly supply chains, enhance brand reputation, and meet sustainability goals."
        },
        {
          question: "Does this course cover digital tools?",
          answer: "Yes, it includes insights into AI and technology-driven solutions for sustainable supply chain management."
        },
        {
          question: "Will I learn about carbon footprint tracking?",
          answer: "Yes, the course teaches how to track, measure, and reduce supply chain carbon emissions."
        },
        {
          question: "Does the course include real-world case studies?",
          answer: "Yes, it includes case studies from companies that have successfully implemented sustainable supply chains."
        }
      ]
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
        trainingModules: "nteractive sessions on designing for a circular economy, materials recovery, and circular business models.",
       faqs: [
        {
          question: "What is the Circular Economy?",
          answer: "The Circular Economy focuses on reducing waste, reusing materials, and designing products for longevity."
        },
        {
          question: "Who should enroll in this course?",
          answer: "It is ideal for business leaders, policymakers, entrepreneurs, and sustainability professionals."
        },
        {
          question: "How can this course benefit businesses?",
          answer: "It teaches businesses how to implement circular economy principles, reduce costs, and minimize waste."
        },
        {
          question: "Do I need prior knowledge?",
          answer: "No, the course is designed for beginners and professionals looking to adopt circular economy strategies."
        }
      ]
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
        faqs: [
          {
            question: "What does this course teach?",
            answer: "It covers energy-saving strategies, renewable energy adoption, and efficient resource utilization."
          },
          {
            question: "Who is this course for?",
            answer: "It is suitable for energy managers, facility operators, business owners, and sustainability professionals."
          },
          {
            question: "How does this course help organizations?",
            answer: "It helps organizations lower energy costs, reduce carbon footprints, and improve operational efficiency."
          },
          {
            question: "Is prior technical knowledge required?",
            answer: "No, this course provides fundamental and advanced concepts suitable for all learners."
          }
        ]
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
      faqs: [
        {
          question: "What is Sustainable Product Design?",
          answer: "This course teaches how to design eco-friendly products using sustainable materials and energy-efficient production methods."
        },
        {
          question: "Who should take this course?",
          answer: "It is ideal for product designers, engineers, entrepreneurs, and anyone interested in sustainable innovation."
        },
        {
          question: "How does this course benefit businesses?",
          answer: "It helps businesses create marketable, eco-friendly products that align with consumer demand and regulatory requirements."
        },
        {
          question: "Does this course cover materials and manufacturing?",
          answer: "Yes, it includes insights into sustainable materials, manufacturing processes, and lifecycle assessment."
        }
      ]
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
      faqs: [
        {
          question: "What is AI and Sustainability Integration?",
          answer: "This course explores how artificial intelligence can be used to enhance sustainability efforts in various industries."
        },
        {
          question: "Who should enroll in this course?",
          answer: "It is suitable for tech professionals, sustainability officers, business leaders, and AI enthusiasts."
        },
        {
          question: "How does AI contribute to sustainability?",
          answer: "AI helps optimize energy usage, improve supply chain efficiency, enhance climate modeling, and automate waste reduction."
        },
        {
          question: "Do I need a background in AI to take this course?",
          answer: "No, the course provides an introduction to AI and its applications in sustainability for all learners."
        },
        {
          question: "Does this course cover machine learning applications in sustainability?",
          answer: "Yes, it explores how machine learning is used for predictive analytics, environmental monitoring, and resource optimization."
        },
        {
          question: "Are there practical AI tools covered in this course?",
          answer: "Yes, the course includes an overview of AI tools and platforms used for sustainability applications."
        }
      ]
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
      faqs: [
        { question: "What is an SDG course about?", answer: "An SDG course provides insights into the United Nations' 17 Sustainable Development Goals (SDGs), their significance, and how individuals and organizations can contribute to achieving them." },
        { question: "Who should take an SDG course?", answer: "This course is ideal for students, professionals, business leaders, policymakers, and anyone interested in sustainability, corporate social responsibility (CSR), and global development." },
        { question: "How can an SDG course benefit my career?", answer: "It equips you with knowledge of sustainability frameworks, helping you work in roles related to corporate sustainability, social impact, environmental policy, and responsible business practices." },
        { question: "Do I need prior knowledge to enroll in an SDG course?", answer: "No prior knowledge is required. The course is designed for beginners and professionals looking to deepen their understanding of sustainable development." },
        { question: "Are SDG courses recognized globally?", answer: "Yes, SDG courses align with global sustainability standards and can enhance your qualifications in sustainability-related fields." },
        { question: "Is the SDG course available online?", answer: "Yes, this course is fully online, allowing you to learn at your own pace from anywhere in the world." },
        { question: "Will I receive a certificate after completing the SDG course?", answer: "Yes! Upon successful completion, you will receive a certificate that verifies your understanding of the SDGs and your ability to implement sustainable practices." }
     
      ]
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
      <p className={classes.description}>{selectedCourse.overview.courseDescription}</p>
      <h5 className={classes.contentHeading}>What You&apos;ll Learn from This Course</h5>
      <p className={classes.description}>{selectedCourse.overview.whatYoullLearn.description}</p>
      <div className={classes.whatYoullLearn}>
      {selectedCourse.overview.whatYoullLearn.points.map((e, index) => <div key={index} className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>{e}</span></div>)}
      {/* Topics Covered */}
    <div key="topics">
      {selectedCourse.topicsCovered.map((e, index)=> <div key={index} className={classes.iconSpanDiv}><Check className={classes.checkIcon}/><span className={classes.text}>{e}</span></div>)}
     
        </div></div>
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
    <Faq faqs={selectedCourse.faqs} onBuyCourse={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfbXbqpmm1hatXrej42xjPyTh1CjJAJw4r_zNlB4V6K_-aOFQ/viewform?usp=header", "_blank")}/>
    <OurPartners/>
<RelatedCourses relatedCourses={relatedCourses}/>
              </div>);
              };

export default CourseDescription;