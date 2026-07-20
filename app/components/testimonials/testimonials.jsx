import React from 'react';
import styles from './testimonials.module.css';

const testimonialsData = [
  {
    quote:
      "We rented the Photo Booth for our wedding and Jesse was so fun. Our guests all loved it! -Ally",
    backgroundClass: 'testimonial1',
  },
  {
    quote:
      "The backdrop was perfect for my granddaughters graduation party. -Heather",
    backgroundClass: 'testimonial2',
  },
  {
    quote:
      "Highly recommend! All the set up and tear down was taken care of and they even set up the light we brought for the rose wall. Everybody complimented it all night. -Andrea",
    backgroundClass: 'testimonial3',
  },
];


export default function Testimonials () {
  return (
    <>
    <h1 className={styles.heading}>Don't just take our word for it</h1>
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

