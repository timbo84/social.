// components/Footer.js
import Link from "next/link";
import styles from "./footer.module.css";
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Social Event Rentals</h2>
          <p>Elevating celebrations with premium rentals.</p>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/terms-of-service">Terms Of Service</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Social + Contact */}
        <div className={styles.social}>
          <a
            href="https://www.instagram.com/social.event.rentals?igsh=NGJvdDhwMzA4djdh&utm_source=qr"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://www.facebook.com/share/1BLWbgK7uA/?mibextid=wwXIfr"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className={styles.icon} />
          </a>
          <a href="mailto:veronica@socialeventrentalsne.com" aria-label="Email">
            <FaEnvelope className={styles.icon} />
          </a>
          <a href="tel:+14026575175" aria-label="Phone">
            <FaPhoneAlt className={styles.icon} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} Social Event Rentals. All rights
          reserved. Designed and developed by{" "}
          <a href="mailto:timber110406@gmail.com" className={styles.creator}>
            Timothy Roberts
          </a>{" "}
          |{" "}
          <a
            href="https://jytsoftware.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.creator}
          >
            Portfolio
          </a>
        </p>
      </div>
    </footer>
  );
}
