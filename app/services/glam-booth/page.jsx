"use client";

import Link from "next/link";
import styles from "./GlamBooth.module.css";

export default function GlamBooth() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Glam Booth</h1>
          <p className={styles.subtitle}>The booth that brings the wow!</p>
        </div>
      </div>

      <section className={styles.servicePage}>
        {/* Section 1 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/glam5.jpeg"
              alt="Glam booth setup with black-and-white filter"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Magazine worthy, yes please!</h2>
            <p>
              Our glam booth is all about Luxury. With high-end lighting, skin
              smoothing filters, and glow features, every photo looks like it
              belongs in a magazine spread.
            </p>
            <p>
              Perfect for weddings, galas, and upscale parties, it’s a sleek way
              to elevate your event and give guests a moment to shine.
            </p>
            <Link href="/booking" className={styles.cta}>
              Book the Glam Booth
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Flawless Lighting & Filters</h2>
            <p>
              We use studio-grade lighting and subtle retouching to create
              smooth, glowing portraits that flatter every guest. The result?
              Confidence-boosting photos that people love to share.
            </p>
            <p>
              Whether it’s a solo shot or a group pose, the glam booth delivers
              consistent, high-quality results every time.
            </p>
            <Link href="/booking" className={styles.cta}>
              See the Glow
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/images/glam3.jpeg"
              alt="Guests posing in glam booth"
              className={styles.image}
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/glam6.jpg"
              alt="Glam booth print station"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Instant Prints & Social Sharing</h2>
            <p>
              Guests receive instant prints that look professionally edited,
              plus digital copies they can share on the spot. It’s a perfect
              blend of luxury and convenience.
            </p>

            <Link href="/booking" className={styles.cta}>
              Book the Glam Booth
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
