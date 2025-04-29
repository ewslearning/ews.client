'use client';

import styles from './your-impact.module.css';
import {
  Footprints,
  Users,
  Leaf,
  Globe,
} from 'lucide-react';

const cloverItems = [
  {
    label: 'Reduce Carbon Footprint',
    icon: <Footprints size={28} />,
    position: 'top',
  },
  {
    label: 'Influence Communities',
    icon: <Users size={28} />,
    position: 'right',
  },
  {
    label: 'Join Global Challenges',
    icon: <Globe size={28} />,
    position: 'bottom',
  },
  {
    label: 'Lead Eco-Initiatives',
    icon: <Leaf size={28} />,
    position: 'left',
  },
];

export default function ImpactCloverSection() {
  return (
    <section className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.heading}>Your Impact</h2>
        <p className={styles.description}>
          Become a catalyst for change. This program gives you the power to take action, lead with confidence, and create a sustainable future.
        </p>

        <div className={styles.clover}>
          {cloverItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.leaf} ${styles[item.position]}`}
              style={{ animationDelay: `${index * 1.5}s` }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
