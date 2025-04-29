'use client';

import styles from './sample-activities.module.css';
import {
  Recycle,
  Cylinder,
  UtensilsCrossed,
  Megaphone,
  Video,
  Sprout,
} from 'lucide-react';

const ecoActivities = [
  {
    title: 'Conduct a School Waste Audit',
    icon: <Recycle size={40} />,
  },
  {
    title: 'Build Your Own Compost Jar',
    icon: <Cylinder size={40} />,
  },
  {
    title: 'Design a Plastic-Free Meal Plan',
    icon: <UtensilsCrossed size={40} />,
  },
  {
    title: 'Launch a Zero-Waste Campaign',
    icon: <Megaphone size={40} />,
  },
  {
    title: 'Record an Eco-Advocacy Reel',
    icon: <Video size={40} />,
  },
  {
    title: 'Grow Your Own Herbs at Home',
    icon: <Sprout size={40} />,
  },
];

export default function EcoSpiralSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Explore Eco-Friendly Activities</h2>
      <div className={styles.grid}>
        {ecoActivities.map((activity, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{activity.icon}</div>
            <p>{activity.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
