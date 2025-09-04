// components/Footer.js
import Link from "next/link";
import styles from "./footer.module.css"; // Optional: use CSS Modules

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Social. Event Rentals</h2>
          <p>Elevating celebrations with premium rentals and design.</p>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* <div className={styles.social}>
          <a href="https://instagram.com" aria-label="Instagram">📸</a>
          <a href="https://facebook.com" aria-label="Facebook">📘</a>
          <a href="mailto:info@socialevents.com" aria-label="Email">✉️</a>
        </div> */}
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Social. Event Rentals. All rights reserved.
            Designed and developed by <span className={styles.creator}>Timothy Roberts</span>.
        </p>
      </div>
    </footer>
  );
}