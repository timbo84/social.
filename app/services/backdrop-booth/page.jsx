"use client";

import Link from "next/link";
import styles from "./backdropBooth.module.css";

const backdropSections = [
  {
    id: "basic",
    heading: "Basic",
    items: [
      { number: "#1", name: "Basic 1", src: "/images/backdrops/basic-1.jpg" },
      { number: "#2", name: "Basic 2", src: "/images/backdrops/basic-2.jpg" },
      { number: "#3", name: "Basic 3", src: "/images/backdrops/basic-3.jpg" },
      { number: "#4", name: "Basic 4", src: "/images/backdrops/basic-4.jpg" },
      { number: "#5", name: "Basic 5", src: "/images/backdrops/basic-5.jpg" },
      { number: "#6", name: "Basic 6", src: "/images/backdrops/basic-6.jpg" },
      { number: "#7", name: "Basic 7", src: "/images/backdrops/basic-7.jpg" },
      { number: "#8", name: "Basic 8", src: "/images/backdrops/basic-8.jpg" },
    ],
  },
  {
    id: "floral",
    heading: "Floral",
    items: [
      { number: "#1", name: "Floral 1", src: "/images/backdrops/floral-1.png" },
      { number: "#2", name: "Floral 2", src: "/images/backdrops/floral-2zoom1.png" },
      { number: "#3", name: "Floral 3", src: "/images/backdrops/floral-3.png" },
      { number: "#4", name: "Floral 4", src: "/images/backdrops/floral-4.png" },
      { number: "#5", name: "Floral 5", src: "/images/backdrops/floral-5.png" },
      { number: "#6", name: "Floral 6", src: "/images/backdrops/floral-6.png" },
      { number: "#7", name: "Floral 7", src: "/images/backdrops/floral-7new.png" },
      { number: "#8", name: "Floral 8", src: "/images/backdrops/floral-8.png" },
    ],
  },
  {
    id: "16ft",
    heading: "16 Foot Backdrops",
    items: [
      { number: "#1", name: "16 Foot 1", src: "/images/backdrops/16ft-1.jpg" },
      { number: "#2", name: "16 Foot 2", src: "/images/backdrops/16ft-2.jpg" },
    ],
  },
];

export default function BackdropBooth() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Backdrop Rentals</h1>
          <p className={styles.subtitle}>
            Every event needs a photo op and every photo op needs a backdrop.
          </p>
        </div>
      </div>

      <section className={styles.servicePage}>
        {backdropSections.map((section) => (
          <div key={section.id} className={styles.backdropSection}>
            <h2 className={styles.backdropHeading}>{section.heading}:</h2>
            <div className={styles.backdropGrid}>
              {section.items.map((item) => (
                <div key={`${section.id}-${item.number}`} className={styles.backdropCard}>
                  <div className={styles.backdropCardImageWrap}>
                    <img
                      src={item.src}
                      alt={`${section.heading} ${item.name}`}
                      className={styles.backdropCardImage}
                    />
                  </div>
                  <p className={styles.backdropCardTitle}>
                    <span className={styles.backdropCardNumber}>{item.number}</span>
                    <span className={styles.backdropCardName}>{item.name}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.questionsSection}>
          <h3 className={styles.questionsHeading}>Questions?</h3>
          <Link href="/contact" className={styles.cta}>
            Contact us!
          </Link>
        </div>
      </section>
    </>
  );
}
