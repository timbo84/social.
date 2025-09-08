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
            The arch that stops the scroll-perfect for photos of the most
            elegant events
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
            <h2>The statement piece</h2>
            <p>
              Our flower arch is designed to be the visual highlight of your
              event. With the arch being 8 feet tall, Every guest will pause, every photo will pop. This is your
              event's statement piece.
            </p>

            <Link href="/contact" className={styles.cta}>
              Questions About our Arch
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        {/* <div className={`${styles.content} ${styles.reverse}`}>
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
        </div> */}

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
              A flower arch isn't just decor - it's a photo magnet. Guests
              naturally gravitate towards it.
            </p>
            <p>
              Whether framing a ceremony, photo backdrop, or enterance, it
              brings a bit of romance to weddings, engagement parties, and
              styled shoots. It's made to photograph beautifully. The "lets
              create magic button" is perfect.
            </p>
            <Link href="/booking" className={styles.cta}>
              Let’s Create Magic
            </Link>
          </div>
        </div>
        <div className={styles.priceTag}>
          Pricing starts at <strong>$500</strong>
        </div>
      </section>
    </>
  );
}
