import React from 'react';
import styles from './testimonials.module.css';

const testimonialsData = [
  {
    quote:
      "...our traditional photo booth was classy, fun, stylish and a great addition to our wedding. I would give it a 10/5 if I could! If you are debating whether to get a photo booth, I highly recommend it. You won’t regret it.",
    backgroundClass: 'testimonial1',
  },
  {
    quote:
      "The photo booth was the highlight of our party! Guests couldn’t stop raving about it. Stylish, easy to use, and the photos were amazing.",
    backgroundClass: 'testimonial2',
  },
  {
    quote:
      "We booked Social Event Rentals for our corporate gala and the experience was flawless. Professional setup, great energy, and beautiful results.",
    backgroundClass: 'testimonial3',
  },
];


export default function Testimonials () {
  return (
    <>
    <h1 className={styles.heading}>What Our Clients Are Saying</h1>
      {testimonialsData.map((item, index) => (
        <section key={index} className={`${styles.testimonial} ${styles[item.backgroundClass]}`}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <p className={styles.quote}>{item.quote}</p>
              {/* <button className={styles.button}>MORE RAVES</button> */}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

