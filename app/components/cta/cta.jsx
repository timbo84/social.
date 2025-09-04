import styles from './cta.module.css';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Photo Booth Rentals That Make Every Moment Shine</h1>
          <p className={styles.description}>
            Perfect for corporate parties, weddings, birthdays, and more. Customize your experience with open-air or enclosed booths.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primary}>GET IN TOUCH</button>
            <button className={styles.secondary}>BOOK NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}