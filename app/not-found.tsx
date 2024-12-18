"use client";
import React from 'react';
import styles from './not-found.module.css';
import Icon from '@assets/icons/404.svg';
import Button from '@app/home/components/common/button/button';
import { useRouter } from 'next/navigation';

export default function Custom404() {
    const router = useRouter();

    const handleNavigation = () => {
      router.push("/"); 
    };
    
  return (
    <div className={styles.parentContainer}>
        <Icon className={styles.errorIcon}/>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.description}>Sorry, we could not find the page you are looking for.</p>
      <Button onClick={handleNavigation}>Back To Home</Button>
    </div>
  );
}
