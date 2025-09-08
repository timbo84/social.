"use client";

import Link from "next/link";
import styles from "./SnackCart.module.css";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

export default function SnackCart() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Snack Cart</h1>
          <p className={styles.subtitle}>
            Add flavor and fun to your event with a snack cart.
          </p>
          <div className={styles.social}>
            <p className={styles.subtitle}>Follow us on</p>
            <a
              href="https://www.instagram.com/social.snack.bar?igsh=MXFwNXN2emtwZ3c5&utm_source=qr"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <section className={styles.servicePage}>
        {/* Section 1 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/snack4.jpg"
              alt="Decorated snack cart setup"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Sweet & Savory Selections</h2>
            <p>
              Our snack cart is a crowd favorite, offering a curated mix of
              treats that guests can grab and enjoy on the go. From popcorn and
              candy to gourmet bites, we’ve got something for every craving.
            </p>
            <p>
              Perfect for weddings, birthdays, and corporate mixers, it’s a
              tasty way to keep the energy high and the smiles wide.
            </p>
            <Link href="/booking" className={styles.cta}>
              Reserve Your Cart
            </Link>
          </div>
        </div>

        {/* Section 2 - Text Left */}
        <div className={`${styles.content} ${styles.reverse}`}>
          <div className={styles.textBlock}>
            <h2>Styled to Match Your Theme</h2>
            <p>
              It's not just about snacks- it's about bringing a unique element
              to your event and we think it should match your theme.
            </p>
            <p>
              We will work with you to make the cart cohesive and fun with
              options to add signage, display elements, color, and even lighting
              to compliment your event's aesthetic.
            </p>
            <Link href="/booking" className={styles.cta}>
              Customize Your Look
            </Link>
          </div>
          <div className={styles.mediaBlock}>
            <img
              src="/images/snack2nd.png"
              alt="Themed snack cart with decorations"
              className={styles.image}
            />
          </div>
        </div>

        {/* Section 3 - Image Left */}
        <div className={styles.content}>
          <div className={styles.mediaBlock}>
            <img
              src="/images/snack11.jpg"
              alt="Guests enjoying snack cart treats"
              className={styles.image}
            />
          </div>
          <div className={styles.textBlock}>
            <h2>Interactive & Fun</h2>
            <p>
              Guests love the freedom to pick their favorites, and the cart
              becomes a natural gathering spot. It’s a great way to break the
              ice and keep the vibe light and festive.
            </p>
            <p>
              Whether it's a midday pick-me-up or a late-night treat station,
              the sky is the limit so bring your ideas.
            </p>
            <Link href="/booking" className={styles.cta}>
              Let’s Get Snacking
            </Link>
          </div>
        </div>
        <div className={styles.priceTag}>
          Pricing starts at <strong>$700</strong> and varies depending on product
          & size of party.
        </div>
      </section>
    </>
  );
}
