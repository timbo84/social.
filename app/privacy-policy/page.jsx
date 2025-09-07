"use client";

import styles from "./Legal.module.css";

export default function PrivacyPolicy() {
  return (
    <section className={styles.legalPage}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: September 7, 2025</p>

      <div className={styles.section}>
        <h2>1. Information We Collect</h2>
        <p>
          We collect basic contact information when you submit a booking or inquiry, including your name, email, phone number, and event details.
        </p>
      </div>

      <div className={styles.section}>
        <h2>2. How We Use Your Data</h2>
        <p>
          Your information is used solely to manage bookings, respond to inquiries, and deliver services. We do not sell or share your data with third parties.
        </p>
      </div>

      <div className={styles.section}>
        <h2>3. Cookies & Analytics</h2>
        <p>
          Our site may use cookies or analytics tools to improve user experience. You can disable cookies in your browser settings.
        </p>
      </div>

      <div className={styles.section}>
        <h2>4. Your Rights</h2>
        <p>
          You may request access to or deletion of your personal data by contacting us directly.
        </p>
      </div>
    </section>
  );
}