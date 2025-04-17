'use client';

import styles from './offer-banner.module.css';
import { useCountdown } from '../use-countdown';

export default function OfferBanner() {
 
  const timeLeft = useCountdown(new Date('2025-05-15T23:59:59'));

  return (
    <div className={styles.banner}>
      <span>
        Hurry up to get <strong>50% off</strong>. Only{' '}
        <span className={styles.timer}>
          {timeLeft.days}d {timeLeft.hours.toString().padStart(2, '0')}h{' '}
          {timeLeft.minutes.toString().padStart(2, '0')}m{' '}
          {timeLeft.seconds.toString().padStart(2, '0')}s
        </span>{' '}
        left.
      </span>
      <button className={styles.button}>Enroll Now</button>
    </div>
  );
}
