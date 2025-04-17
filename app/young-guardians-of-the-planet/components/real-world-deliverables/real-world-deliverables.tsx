'use client';

import { useEffect, useRef, useState } from 'react';
import type { ComponentType } from 'react';
import type { LottieComponentProps } from 'lottie-react';
import styles from './real-world-deliverables.module.css';
import animationData from '../../assets/lottie/greenhero.json';
import { FileText, BookOpenCheck, NotebookText, ImagePlus, BadgeCheck, Users2, Handshake, Globe2 } from 'lucide-react';

interface WhatsIncluded {
  title: string;
  content: string;
  icon: JSX.Element;
}

const accordionData: WhatsIncluded[] = [
  {
      title: 'Interactive Workbooks',
      content: 'Engaging digital workbooks with activities, challenges, and reflection prompts to deepen learning.',
      icon: <FileText size={24} />,
  },
  {
      title: 'Student Project Template',
      content: 'Structured templates to help students plan, execute, and document their sustainability projects.',
      icon: <NotebookText size={24} />,
  },
  {
      title: 'Reflection Journals',
      content: 'Personal journals for students to track their learning journey and environmental impact.',
      icon: <BookOpenCheck size={24} />,
  },
  {
      title: 'DIY & Media Projects',
      content: 'Hands-on projects and creative media assignments that apply learning to real-world challenges.',
      icon: <ImagePlus size={24} />,
  },
  {
      title: 'Digital Certificate',
      content: 'Official recognition of achievement that can be shared with schools and on college applications.',
      icon: <BadgeCheck size={24} />,
  },
  {
      title: 'Peer-to-Peer Feedback',
      content: 'Collaborative learning tools that enable students to share ideas and provide constructive feedback.',
      icon: <Users2 size={24} />,
  },
  {
      title: 'Mentorship Support',
      content: 'Guidance from experienced mentors to support students throughout their journey.',
      icon: <Handshake size={24} />,
  },
  {
      title: 'Curated Resources',
      content: 'Access to expert articles, videos, and tools to deepen their understanding of sustainability topics.',
      icon: <Globe2 size={24} />,
  },
];

const RealWorld = () => {
  const firstColumn = accordionData.slice(0, 4);
  const secondColumn = accordionData.slice(4, 8);

  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [LottieComponent, setLottieComponent] = useState<ComponentType<LottieComponentProps> | null>(null);

  useEffect(() => {
    import('lottie-react').then((mod) => {
      setLottieComponent(() => mod.default);
    });
  }, []);

  useEffect(() => {
    const node = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldPlay) {
          setShouldPlay(true);

          if (node) {
            const offsetTop = node.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: offsetTop - 500,
              behavior: 'smooth',
            });
          }
        }
      },
      { threshold: 0.5 }
    );

    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [shouldPlay]);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      {LottieComponent && shouldPlay && animationData && (
        <LottieComponent
          animationData={animationData}
          loop={false}
          autoplay
          onComplete={() => setShowContent(true)}
          className={styles.lottie}
        />
      )}

      {showContent && (
        <>
          <div className={`${styles.blurOverlay} ${styles.blurVisible}`} />
          <div className={styles.content}>
            <h2 className={styles.heading}>What&apos;s Included</h2>
            <p className={styles.description}>
              Our comprehensive program provides everything you need to succeed.
            </p>
            <div className={styles.columns}>
              <div className={styles.column}>
                {firstColumn.map((item, index) => (
                  <div key={index} className={styles.card}>
                      <div className={styles.icon}>{item.icon}</div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardText}>{item.content}</p>
                  </div>
                ))}
              </div>
              <div className={styles.column}>
                {secondColumn.map((item, index) => (
                  <div key={index} className={styles.card}>
                    <div className={styles.icon}>{item.icon}</div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardText}>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RealWorld;
