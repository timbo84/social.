"use client";

import Link from "next/link";
import styles from "./backdropBooth.module.css";

const backdropItems = [
  { title: "White Rose Backdrop", src: "/images/backdrop1.jpeg" },
  { title: "Multi Colored Floral backdrop", src: "/images/backdrop2.jpeg" },
  { title: "Light Pink Rose Backdrop", src: "/images/backdrop3.jpeg" },
  { title: "Hot Pink Backdrop", src: "/images/backdrop4.jpeg" },
  { title: "Greenery Backdrop", src: "/images/backdrop5.png" },
  // { title: "Midnight Blue", src: "/images/backdrop6.jpg" },
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
       

        {/* Backdrop Grid */}
        <div className={styles.backdropSection}>
          <h2 className={styles.backdropHeading}>Our Backdrops</h2>
          <div className={styles.backdropGrid}>
            {backdropItems.map((item) => (
              <div key={item.title} className={styles.backdropCard}>
                <p className={styles.backdropCardTitle}>{item.title}</p>
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.backdropCardImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
