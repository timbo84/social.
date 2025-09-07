"use client";

import Link from "next/link";
import styles from "./FlowerArch.module.css";

export default function FlowerArch() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Flower Arch</h1>
          <p className={styles.subtitle}>
            Elevate your event with a handcrafted floral centerpiece that adds
            elegance, charm, and unforgettable beauty.
          </p>
        </div>
      </div>

      <section className={styles.servicePage}>
        {/* Section 1 - Video Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <video
              className={styles.image}
              src="/videos/flower-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Timeless Elegance</h2>
            <p>
              Our flower arches are designed to be the visual highlight of your
              event. Whether framing a ceremony, photo backdrop, or entrance,
              they bring a sense of romance and sophistication.
            </p>
            <p>
              Each arch is crafted with care, using fresh or faux florals to
              match your theme and color palette.
            </p>
            <Link href="/booking" className={styles.cta}>
              Design Your Arch
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Custom Floral Styling</h2>
            <p>
              From lush greenery to bold blooms, we tailor each arch to reflect
              your vision. Whether you want soft pastels, vibrant colors, or
              minimalist whites, we’ll bring your floral dreams to life.
            </p>
            <p>
              Ideal for weddings, engagement parties, and styled shoots, our
              arches are built to impress and photograph beautifully.
            </p>
            <Link href="/booking" className={styles.cta}>
              Start Your Vision
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/images/flower1.jpg"
              alt="Custom floral arch with pastel flowers"
              className={styles.image}
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/flower2.jpg"
              alt="Guests posing under flower arch"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Picture-Perfect Moments</h2>
            <p>
              A flower arch isn’t just décor—it’s a photo magnet. Guests
              naturally gravitate toward it, creating stunning memories and
              shareable content that lasts long after the event ends.
            </p>
            <p>
              Let your celebration bloom with a centerpiece that’s both graceful
              and unforgettable.
            </p>
            <Link href="/booking" className={styles.cta}>
              Let’s Create Magic
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
