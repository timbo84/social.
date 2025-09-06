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
            Add a touch of fun and professionalism to your next corporate event with a photo booth that engages, impresses, and connects.
          </p>
        </div>
      </div>

      <section className={styles.servicePage}>
        {/* Section 1 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/corporate1.jpg"
              alt="Corporate photo booth setup"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Professional Meets Playful</h2>
            <p>
              Our corporate photo booths strike the perfect balance between sleek and fun. Whether you're hosting a conference, holiday party, or client appreciation event, the booth adds a dynamic layer of engagement.
            </p>
            <p>
              With branded overlays, instant sharing, and high-quality prints, your team and guests walk away with lasting impressions.
            </p>
            <Link href="/booking" className={styles.cta}>
              Book Your Booth
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Tailored for Your Brand</h2>
            <p>
              Customize every detail—from backdrop and props to photo templates and digital branding. Whether you're showcasing company culture or launching a new product, we’ll align the booth with your message.
            </p>
            <p>
              It’s a great way to boost internal morale or make a lasting impression on clients and partners.
            </p>
            <Link href="/booking" className={styles.cta}>
              Customize Your Experience
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/images/corporate2.jpeg"
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
            <h2>Team Building & Engagement</h2>
            <p>
              Photo booths are a natural icebreaker. They encourage interaction, laughter, and shared moments—perfect for team-building and networking.
            </p>
            <p>
              Whether it’s a casual celebration or a formal gala, our booths help foster connection and create a memorable experience.
            </p>
            <Link href="/booking" className={styles.cta}>
              Let’s Elevate Your Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}