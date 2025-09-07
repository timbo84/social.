"use client";

import styles from "../privacy-policy/Legal.module.css";

export default function TermsOfService() {
  return (
    <section className={styles.legalPage}>
      <h1 className={styles.title}>Terms of Service</h1>
      <p className={styles.updated}>Last updated: September 7, 2025</p>

      <div className={styles.section}>
        <h2>1. Overview</h2>
        <p>
          By booking services through our website, you agree to the following terms and conditions. These terms apply to all users, clients, and visitors.
        </p>
      </div>

      <div className={styles.section}>
        <h2>2. Booking & Cancellation</h2>
        <p>
          To reserve your event date, please confirm availability with our team. Cancellations made within 7 days of the event may not be eligible for a refund.
        </p>
      </div>

      <div className={styles.section}>
        <h2>3. Service Guarantee</h2>
        <p>
          We strive to deliver high-quality photo booth experiences. In the rare event of technical issues, we will make reasonable efforts to resolve or compensate accordingly.
        </p>
      </div>

      <div className={styles.section}>
        <h2>4. Liability</h2>
        <p>
          We are not responsible for damages or disruptions caused by venue limitations, power outages, or third-party interference.
        </p>
      </div>

      <div className={styles.section}>
        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use of our services implies acceptance of any changes.
        </p>
      </div>
    </section>
  );
}