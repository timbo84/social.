"use client";

import Link from "next/link";
import styles from "./360CamBooth.module.css";

export default function Cam360Booth() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>The 360 Experience</h1>
          <p className={styles.subtitle}>
           
          </p>
          <p className={styles.subtitle}>
            Be advised: the space needed for this experience is approximately 15 x 15 feet.
          </p>
        </div>
      </div>

      <section className={styles.servicePage}>
        {/* Section 1 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/360cam2.jpg"
              alt="360 cam booth rotating platform"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>A fully immersive experience</h2>
            <p>
              Our 360 Photo Booth goes beyond traditional photography, it's an opportunity for you and your guests to really relive your event.
            </p>
            <p>
             They will get instant share-worthy videos and GIFs from every angle for their socials, sharing your customizable branding and showing off your non-stop fun event.
            </p>
            <Link href="/contact" className={styles.cta}>
              Check Availability
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Differentiate your Event</h2>
            <p>
              This is not your typical photo booth it is ideal for high-energy events and will take yours to the next level! 
            </p>
            <p>
              Perfect for weddings, corporate events, parties, and brand activations. You will be adding a fun element to any party.
            </p>
            <Link href="/contact" className={styles.cta}>
              Questions, just ask?
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/images/360cam3.jpg"
              alt="Guests sharing 360 booth videos"
              className={styles.image}
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/360cam4.jpg"
              alt="360 booth setup at event"
              className={styles.image}
            />
          </div>
          {/* <div className={styles.textBlock}>
            <h2>Unforgettable Guest Experience</h2>
            <p>
              The 360 Cam Booth isn’t just a photo op — it’s a full-on experience. With music, lighting, and movement, guests feel like stars and leave with a keepsake they’ll replay again and again.
            </p>
            <p>
              Ideal for high-energy events, influencer activations, and celebrations that deserve a cinematic twist.
            </p>
            <Link href="/booking" className={styles.cta}>
              Make It Memorable
            </Link>
          </div> */}
        </div>
        <div className={styles.priceTag}>
          Pricing starts at <strong>$900</strong>
        </div>
      </section>
    </>
  );
}