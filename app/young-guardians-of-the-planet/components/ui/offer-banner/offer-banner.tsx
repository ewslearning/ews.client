'use client';

import { useOfferCountdown } from '@app/young-guardians-of-the-planet/services/use-countdown';
import styles from './offer-banner.module.css';

export default function OfferBanner() {
 
  const timeLeft = useOfferCountdown();
  if (!timeLeft) return null;
  return (
    <div className={styles.banner}>
      <span>
        Hurry up to get <strong>50% off</strong>. Only{' '}
        <span className={styles.timer}>
        {timeLeft.d}d {timeLeft.h}h {timeLeft.m}m {timeLeft.s}s
        </span>{' '}
        left.
      </span>
      <button className={styles.button}>Enroll Now</button>
    </div>
  );
}
