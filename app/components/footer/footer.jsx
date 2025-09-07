// components/Footer.js
import Link from "next/link";
import styles from "./footer.module.css"; // Optional: use CSS Modules
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>Social Event Rentals</h2>
          <p>Elevating celebrations with premium rentals and design.</p>
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
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.social}>
          <a
            href="https://instagram.com/yourhandle"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://facebook.com/yourpage"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className={styles.icon} />
          </a>
          <a href="mailto: veronica@socialeventrentalsne.com" aria-label="Email">
            <FaEnvelope className={styles.icon} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} Social Event Rentals. All rights
          reserved. Designed and developed by{" "}
          <span className={styles.creator}>Timothy Roberts</span>.
        </p>
      </div>
    </footer>
  );
}
