"use client";

import Link from "next/link";
import styles from "./EventPhotoBooth.module.css";

export default function EventPhotoBooth() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Event Photo Booth</h1>
          <p className={styles.subtitle}>
            Capture the energy of your event with photo booth experiences that entertain guests, spark connection, and deliver unforgettable keepsakes.
          </p>
        </div>
      </div>

      <section className={styles.servicePage}>
        {/* Section 1 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/event2.jpeg"
              alt="Guests enjoying photo booth"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Fun That Sticks</h2>
            <p>
              Our photo booths are designed to be the highlight of your event. With themed props, instant prints, and digital sharing, guests walk away with memories they’ll revisit again and again.
            </p>
            <p>
              Perfect for weddings, birthdays, corporate parties, and community events—this service brings joy and interaction to any gathering.
            </p>
            <Link href="/booking" className={styles.cta}>
              Book Your Booth
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Custom Themes & Layouts</h2>
            <p>
              From elegant to quirky, we tailor your booth to match your event’s vibe. Choose your backdrop, photo style, and print layout—we’ll handle the rest.
            </p>
            <p>
              Want a guestbook station? Animated GIFs? Personalized messages? We’ve got you covered.
            </p>
            <Link href="/booking" className={styles.cta}>
              Let's Customize It
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/images/event3.jpeg"
              alt="Custom themed photo booth"
              className={styles.image}
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/event4.jpeg"
              alt="Guests posing with props"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Shareable Moments</h2>
            <p>
              Every photo is a chance to relive the fun. With instant social sharing, branded galleries, and optional live slideshows, your event lives on long after the last dance.
            </p>
            <p>
              We make it easy for guests to post, tag, and celebrate—while you get the credit for throwing an unforgettable party.
            </p>
            <Link href="/booking" className={styles.cta}>
              Start Planning
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}