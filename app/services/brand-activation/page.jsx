"use client";

import Link from "next/link";
import styles from "./BrandActivation.module.css";

export default function BrandActivation() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Brand Activation</h1>
          <p className={styles.subtitle}>
            Transform your event into a branded experience your audience won’t
            forget.
          </p>
        </div>
      </div>
      <section className={styles.servicePage}>
        {/* Section 1 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/brandAct1.jpeg"
              alt="Immersive brand photo booth"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Immersive Brand Moments</h2>
            <p>
              Our photo booths are more than just a snapshot—they’re a branded
              experience. With tailored overlays, custom props, and interactive
              features, we help you create moments that reflect your brand’s
              personality and purpose.
            </p>
            <p>
              Ideal for product launches, influencer activations, and pop-up
              events, these booths are designed to spark conversation and drive
              engagement.
            </p>
            <Link href="/booking" className={styles.cta}>
              Reserve Your Booth
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Custom-Tailored Experiences</h2>
            <p>
              From green screen magic to AI-generated portraits and branded
              print stations, our booths adapt to your campaign goals. Every
              detail—from the interface to the final photo—is crafted to reflect
              your brand’s visual identity.
            </p>
            <p>
              Whether you're aiming for viral social content or deeper brand
              recall, we’ll help you deliver a seamless, high-impact experience.
            </p>
            <Link href="/booking" className={styles.cta}>
              Let's Collaborate
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/services/brand-activation-2.jpg"
              alt="Custom photo booth setup"
              className={styles.image}
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/services/brand-activation-3.jpg"
              alt="Engaging photo booth experience"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Memorable Engagement</h2>
            <p>
              Our booths don’t just capture photos—they capture attention. With
              instant sharing, branded keepsakes, and immersive design, guests
              walk away with something tangible and memorable.
            </p>
            <p>
              Perfect for trade shows, grand openings, and in-store activations,
              these experiences turn foot traffic into brand advocates.
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
