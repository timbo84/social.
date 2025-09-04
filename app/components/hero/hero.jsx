import React from 'react';
import styles from './hero.module.css';

export default function Hero () {
  return (
    <section className={styles.hero}>
        <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>ICONIC PHOTO BOOTH RENTAL FROM SOCIAL EVENT RENTALS</h1>
          <p className={styles.reviews}>Loved by Event Planners Everywhere!</p>
          <p className={styles.scroll}>- Let the Fun Begin ↓</p>
        </div>
      </div>
    </section>
  );
};
