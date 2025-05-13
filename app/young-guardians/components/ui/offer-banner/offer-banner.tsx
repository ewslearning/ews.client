'use client';

import { useOfferCountdown } from '@app/young-guardians/services/use-countdown';
import styles from './offer-banner.module.css';
import { useFormContext } from '../form/form-provider';

export default function OfferBanner() {

    const { openForm } = useFormContext();
 
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
      <button className={styles.button} onClick={openForm} >Enroll Now for <span className={styles.price}>
      <span className={styles.originalPrice}>₹2999</span> ₹1499
    </span></button>
    </div>
  );
}
