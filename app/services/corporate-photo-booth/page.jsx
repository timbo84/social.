"use client";

import Link from "next/link";
import styles from "./CorporatePhotoBooth.module.css";

export default function CorporatePhotoBooth() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Corporate Photo Booth</h1>
          <p className={styles.subtitle}>
            Capture memories and boost engagement - add a photo booth to your
            next corporate event.
          </p>
        </div>
      </div>

      <section className={styles.servicePage}>
        {/* Section 1 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/corporate2.jpeg"
              alt="Corporate photo booth setup"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Corporate doesn't have to be boring</h2>
            <p>
              Our corporate photo booths connect colleagues and boost networking
              while bringing your event to life. We promise your event will be
              more fun with a photo booth!
            </p>
            <Link href="/booking" className={styles.cta}>
              Book Your Booth
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Tailored for your company</h2>
            <p>
              Customize every detail—from backdrop and props to photo templates
              and digital branding. Whether you're showcasing company culture or
              launching a new product, we’ll align the booth with your message.
            </p>
            <p>
              It's a great way to boost internal morale and get good content for
              your social media.
            </p>
            <Link href="/booking" className={styles.cta}>
              Customize Your Experience
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/images/corporate7.jpeg"
              alt="Branded photo booth for corporate event"
              className={styles.image}
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/corporate3.jpeg"
              alt="Team enjoying photo booth"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Employee Engagement</h2>
            <p>
              Photo booths are a natural icebreaker. They encourage interaction,
              laughter, and shared moments—perfect for team-building and
              networking.
            </p>
            <p>
              Whether it's a casual celebration or a formal gala, our booth will
              be a hit.
            </p>
            <Link href="/booking" className={styles.cta}>
              Let’s Elevate Your Event
            </Link>
          </div>
        </div>
        <div className={styles.priceTag}>
          Pricing starts at <strong>$600</strong>
        </div>
      </section>
    </>
  );
}
