"use client";

import Link from "next/link";
import styles from "./BusinessBranding.module.css";

export default function BusinessBranding() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Business Branding</h1>
          <p className={styles.subtitle}>
            Make your brand unforgettable with photo booth experiences designed to reflect your identity, engage your audience, and elevate your presence.
          </p>
        </div>
      </div>

      <section className={styles.servicePage}>
        {/* Section 1 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/branding2.jpeg"
              alt="Branded photo booth experience"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Brand-Forward Experiences</h2>
            <p>
              Our photo booths are built to showcase your brand in action. From custom overlays and branded props to interactive features that reflect your message, we help you create moments that resonate.
            </p>
            <p>
              Whether you're hosting a launch, networking event, or pop-up activation, our setups are designed to spark engagement and reinforce your identity.
            </p>
            <Link href="/booking" className={styles.cta}>
              Reserve Your Booth
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Tailored Visual Identity</h2>
            <p>
              Every detail—from backdrop and lighting to print design and digital sharing—is customized to align with your brand’s look and feel. We make sure your booth feels like a seamless extension of your campaign.
            </p>
            <p>
              Whether you're going bold, minimal, or playful, we’ll help you translate your brand into a visual experience that connects.
            </p>
            <Link href="/booking" className={styles.cta}>
              Let's Collaborate
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/images/branding1.jpeg"
              alt="Custom branded photo booth"
              className={styles.image}
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/branding3.jpeg"
              alt="Guests engaging with branded booth"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Memorable Brand Impressions</h2>
            <p>
              Our booths don’t just capture photos—they capture attention. With branded keepsakes, instant sharing, and immersive design, your audience leaves with a lasting impression of your business.
            </p>
            <p>
              Ideal for trade shows, retail activations, and corporate events, this service turns engagement into brand loyalty.
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