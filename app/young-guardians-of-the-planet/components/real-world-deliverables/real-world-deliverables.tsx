'use client';

import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/greenhero.json';
import styles from './real-world-deliverables.module.css';

const bulletPoints = [
  'A final sustainability project',
  'A 2-min eco-message video or campaign',
  'A personalized “Young Sustainability Champion” certificate',
  'Their own reflection & impact journal',
]; 

const LottieAnim = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const node = containerRef.current; // ✅ Store current value
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldPlay) {
          setShouldPlay(true);
  
          if (node) {
            const offsetTop = node.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: offsetTop - 200,
              behavior: "smooth",
            });
          }
        }
      },
      {
        threshold: 0.5,
      }
    );
  
    if (node) {
      observer.observe(node);
    }
  
    return () => {
      if (node) {
        observer.unobserve(node); // ✅ Using stable reference
      }
    };
  }, [shouldPlay]);
  


  return (
    <div ref={containerRef} className={styles.wrapper}>
      {shouldPlay && (
        <Lottie
          animationData={animationData}
          loop={false}
          autoplay
          onComplete={() => setShowContent(true)}
          className={styles.lottie}
        />
      )}

{showContent && (
  <>
    <div className={`${styles.blurOverlay} ${showContent ? styles.blurVisible : ''}`} />
    <div className={styles.content}>
      <h2 className={styles.heading}>Real-World Deliverables</h2>
      <p className={styles.description}>
        By the end of the program, students walk away with tangible proof of their impact—creative projects, personal reflections, and tools to continue their sustainability journey in the real world.
      </p>
      <div className={styles.cards}>
        {bulletPoints.map((point, idx) => (
          <div
            key={idx}
            className={styles.card}
            style={{ animationDelay: `${idx * 0.06}s` }}
          >
            {point}
          </div>
        ))}
      </div>
    </div>
  </>
)}
    </div>
  );
};

export default LottieAnim;
