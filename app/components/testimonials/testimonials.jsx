import React from 'react';
import styles from './testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <p className={styles.quote}>
            "...our traditional photo booth was classy, fun, stylish and a great addition to our wedding.
            I would give it a 10/5 if I could! If you are debating whether to get a photo booth,
            I highly recommend it. You won’t regret it."
          </p>
          <button className={styles.button}>MORE RAVES</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;