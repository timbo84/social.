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
          <h1 className={styles.title}>360 Cam Booth</h1>
          <p className={styles.subtitle}>
            Step into the spotlight with our immersive 360° video booth — a cinematic experience that captures your guests in stunning slow motion from every angle.
          </p>
        </div>
      </div>

      <section className={styles.servicePage}>
        {/* Section 1 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/360cam1.jpeg"
              alt="360 cam booth rotating platform"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Dynamic Video Moments</h2>
            <p>
              Our 360 Cam Booth features a rotating platform and high-definition camera rig that captures guests in full motion. The result? Share-worthy videos that feel like red carpet highlights.
            </p>
            <p>
              Perfect for weddings, brand activations, and parties where you want to wow your crowd and give them something unforgettable.
            </p>
            <Link href="/booking" className={styles.cta}>
              Book the 360 Booth
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Custom Overlays & Instant Sharing</h2>
            <p>
              Add your logo, event theme, or animated effects to each video. Guests can instantly share their clips via QR code, email, or social media — boosting your reach and their excitement.
            </p>
            <p>
              Whether you're going glam or playful, we tailor the experience to match your vibe.
            </p>
            <Link href="/booking" className={styles.cta}>
              Customize Your Booth
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/images/360cam2.jpeg"
              alt="Guests sharing 360 booth videos"
              className={styles.image}
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/360cam3.jpeg"
              alt="360 booth setup at event"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
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
          </div>
        </div>
      </section>
    </>
  );
}