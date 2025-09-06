"use client";

import Link from "next/link";
import styles from "./PhotoBooth.module.css";

export default function PhotoBooth() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Photo Booth</h1>
          <p className={styles.subtitle}>
            Capture unforgettable moments with a photo booth experience that’s fun, stylish, and totally customizable.
          </p>
        </div>
      </div>

      <section className={styles.servicePage}>
        {/* Section 1 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/booth1.jpeg"
              alt="Stylish photo booth setup"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Strike a Pose</h2>
            <p>
              Our photo booths are designed to bring out the fun in every guest. With sleek setups, instant prints, and digital sharing, your event becomes a gallery of joyful memories.
            </p>
            <p>
              Whether it’s a wedding, birthday, or corporate party, we tailor the booth to match your vibe and theme.
            </p>
            <Link href="/booking" className={styles.cta}>
              Book Your Booth
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Custom Backdrops & Props</h2>
            <p>
              Choose from a range of backdrops or bring your own vision to life. Our props are curated to match your event’s energy—from elegant to quirky.
            </p>
            <p>
              Guests love the creativity, and you’ll love the keepsakes. Every photo tells a story, and we help make it unforgettable.
            </p>
            <Link href="/booking" className={styles.cta}>
              Customize Your Setup
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/images/booth2.jpeg"
              alt="Guests enjoying photo booth props"
              className={styles.image}
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/booth3.jpeg"
              alt="Photo booth with instant prints"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Instant Prints & Digital Sharing</h2>
            <p>
              Guests walk away with high-quality prints and digital copies they can share instantly. It’s not just a photo—it’s a memory they’ll keep.
            </p>
            <p>
              Great for guestbooks, social media buzz, and adding a personal touch to your event.
            </p>
            <Link href="/booking" className={styles.cta}>
              Let’s Make Memories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}