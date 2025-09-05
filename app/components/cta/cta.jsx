import styles from './cta.module.css';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Photo Booths make it a real party</h1>
          <p className={styles.description}>
           Contact us to customize your experience.
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