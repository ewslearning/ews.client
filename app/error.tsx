
"use client";
import React from 'react';
import styles from './error.module.css';
import Button from '@app/home/components/common/button/button';
import { useRouter } from 'next/navigation';

export default function Custom404() {
    const router = useRouter();

    const handleNavigation = () => {
      router.push("/"); 
    };
    
  return (
    <div className={styles.parentContainer}>
        <h1 className={styles.errorStatusCode}>500</h1>
      <h1 className={styles.title}>Internal Server Error</h1>
      <p className={styles.description}>We apologize for the inconvenience. Our team
      is working to resolve the issue as quickly as possible.</p>
      <Button onClick={handleNavigation}>Back To Home</Button>
      {/* <Icon className={styles.errorIcon}/> */}
    </div>
  );
}
