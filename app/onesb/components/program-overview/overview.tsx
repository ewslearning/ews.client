"use client";
import styles from "./overview.module.css";
import CertifiedPrograms from '@assets/icons/certifiedPrograms.svg';
import Calendar from "../../../course-overview/assets/icons/calendar.svg";
import Mode from "../../../course-overview/assets/icons/mode.svg";
import Language from "../../../course-overview/assets/icons/language.svg";
import Certification from "../../../course-overview/assets/icons/certification.svg";
import TabComponent, { HighlightsProps, KeyLearningModulesProps , ProgramStructureProps } from "../tab/tab-component";
import { useRouter } from "next/navigation";


interface CourseOverviewProps {
    highlightsProps: HighlightsProps,
    keyLearningModulesProps: KeyLearningModulesProps,  
    programStructureProps: ProgramStructureProps
  } 

  const val : CourseOverviewProps = {
    highlightsProps: {
        whatYoullLearn: {
            points: [
              {
                title: 'Industry-Focused Curriculum',
                description: 'Customized modules to address the sustainability needs of sectors like Manufacturing, Technology, Finance, Retail, and more.',
              },
              {
                title: 'Real-World Case Studies',
                description: 'Analyze and learn from successful corporate sustainability initiatives to understand real-world applications.',
              },
              {
                title: 'Leadership Coaching',
                description: 'Build foundational managerial skills to lead teams, make strategic decisions, and champion sustainability initiatives.',
              },
              {
                title: 'Hands-On Projects',
                description: 'Engage in projects that simulate sustainability challenges, allowinggraduates to apply theoretical knowledge in a practical setting.',
              },
            ],
          },
    },
    keyLearningModulesProps:  {
        content: [
            {
        title: 'Introduction to Corporate Sustainability ',
        points: ["Understanding environmental, social, and governance (ESG) principles","Regulatory frameworks and compliance essentials"],
      },
      {
        title: "Sustainable Business Practices",
        points: ["Resource efficiency and waste management",
            "Circular economy principles and implementation strategies"
        ],
      },
      {
        title: "Industry-Specific Sustainability",
        points: ["Custom modules for different industries, focusing on sector-relevant sustainability practices"
        ],
      },
      {
        title: "Managerial Skills for Sustainability",
        points: ["Change management, team leadership, and decision-making in sustainability contexts",
            "Communicating sustainability goals and aligning them with corporate objectives"
        ],
      },
      {
        title: "Sustainability Impact Measurement",
        points: ["Key performance indicators for sustainability and tools to measure impact",
            "Reporting standards and transparent communication strategies"
        ],
      },
    ],},
      programStructureProps: {
        points: [
            {
              title: 'Duration',
              description: '3 to 6 months, flexible to accommodate various learning paces',
            },
            {
                title: 'Delivery Format',
                description: 'A Virtual & On-Site Classes: Accessible learning through online modules, with optional on-site sessionsWorkshops & Interactive Sessions: Regular workshops to enhance engagement and hands-on experience',
              },
              {
                title: 'Certificate',
                description: 'Graduates receive a certification in Sustainability Leadership from One School of Business, enhancing their credentials for sustainability-focusedroles.',
              },
          ],
      }
  };


const Overview: React.FC = () => { 
    const router = useRouter();

    const handleNavigation = () => {
      router.push("/contact"); 
    };
    
return (<div><div className={styles.titleContainer}>
            <div className={styles.headerContainer}>
            <CertifiedPrograms/>
            <span className={styles.headerText}>Certified Programs</span>
            </div>
            <div className={styles.subheaderText}>Program Overview
              </div >
              <p className={styles.description}>Our Sustainability Leadership Training focuses on key principles of sustainable business practices, 
emphasizing practical approaches that graduates can implement immediately in their careers. 
This program is tailored to the unique demands of different industries, ensuring graduates 
understand how to integrate sustainability effectively, regardless of sector.</p>
              </div >
              <div className={styles.features}>
                    <div className={styles.textColumn}>
                        <div className={styles.iconTextRow}>
                            <Calendar className={styles.icon}/>
                            Duration</div>
                        <div>2 to 8 hours</div>
                    </div>

                    <div className={styles.verticalDivider}></div>

                    <div className={styles.textColumn}>
                        <div className={styles.iconTextRow}>
                            <Mode className={styles.icon}/>
                            Mode</div>
                        <div>Online & Offline</div>
                    </div>
                    
                    <div className={styles.verticalDivider}></div>

                    <div className={styles.textColumn}>
                        <div className={styles.iconTextRow}>
                            <Language className={styles.icon}/>
                            Language</div>
                        <div>English</div>
                    </div>

                    <div className={styles.verticalDivider}></div>

                    <div className={styles.textColumn}>
                        <div className={styles.iconTextRow}>
                            <Certification className={styles.icon}/>
                            Certification</div>
                        <div>Yes</div>
                    </div>
                    <div className={styles.buttonContainer}>
          {/* Contact Us button */}
          <button onClick={handleNavigation} className={styles.contactButton}>Contact Now</button></div>
              </div>
              {/* //Features Mobile */}
              <div className={styles.featuresMobile}>
                <div className={styles.featuresGrid}>
                    <div className={styles.textColumn}>
                        <div className={styles.iconTextRow}>
                            <Calendar className={styles.icon}/>
                            Duration</div>
                        <div className={styles.subTxt}>2 to 8 hours</div>
                    </div>

                    
                    <div className={styles.textColumn}>
                        <div className={styles.iconTextRow}>
                            <Mode className={styles.icon}/>
                            Mode</div>
                        <div className={styles.subTxt}>Online & Offline</div>
                    </div>
                    
                   

                    <div className={styles.textColumn}>
                        <div className={styles.iconTextRow}>
                            <Language className={styles.icon}/>
                            Language</div>
                        <div className={styles.subTxt}>English</div>
                    </div>


                    <div className={styles.textColumn}>
                        <div className={styles.iconTextRow}>
                            <Certification className={styles.icon}/>
                            Certification</div>
                        <div className={styles.subTxt}>Yes</div>
                    </div>
                    </div>
                    <div className={styles.buttonContainer}>
          {/* Contact Us button */}
          <button onClick={handleNavigation} className={styles.contactButton}>Contact Now</button></div>
              </div>
              <TabComponent highlights={val.highlightsProps} keyLearningModules={val.keyLearningModulesProps} programStructure={val.programStructureProps} />
               <h4 className={styles.whyChoose}>Why Choose This Program</h4>
               <p className={styles.whyChoosePara}>MBA graduates from One School of Business are equipped with both theoretical knowledge and practical skills to thrive as sustainability-focused managers. This program emphasizes real-world experience and effective leadership in sustainability, making graduates stand out as responsible, forward-thinking leaders.</p>
               <h3 className={styles.enrollToday}>Enroll Today to Become a<br/>
               Sustainability-Ready Manager!</h3>
              </div>);};
              
export default Overview;