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
            Capture the energy of your event with photo booth experiences that
            entertain guests, spark connection, and deliver unforgettable
            memories.
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
            <h2>Party Starter</h2>
            <p>
              With instant prints and digital sharing, guests walk away with
              memories they'll revisit again and again.
            </p>
            <p>
              Perfect for weddings, birthdays, corporate parties, and community
              events—this service brings joy and interaction to any gathering.
            </p>
            <Link href="/contact" className={styles.cta}>
              Check Availability
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Curated Experience</h2>
            <p>
              Whether your event is elegant, eccentric, or businessy we tailor
              your booth to match the vibe.
            </p>
            <p>
              Want to set up a guestbook station next to the booth? We can give
              you suggestions. Choose your backdrop, photo style, and print
              layout- we'll handle the rest.
            </p>
            <Link href="/contact" className={styles.cta}>
              Start Planning
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
              Every photo is a chance to relive the fun. With instant social
              sharing, branded galleries, and optional live slideshows, your
              event lives on long after the last dance.
            </p>
            <p>
              We make it easy for guests to post, tag, and celebrate—while you
              get the credit for throwing an unforgettable party.
            </p>
            {/* <Link href="/booking" className={styles.cta}>
              Start Planning
            </Link> */}
          </div>
        </div>
        <div className={styles.priceTag}>
          Pricing starts at <strong>$600</strong>
        </div>
      </section>
    </>
  );
}
