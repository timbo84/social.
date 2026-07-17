import React from 'react';
import styles from './partners.module.css';
import Carousel from '../carousel/carousel';

const images = [
  
  { alt: 'c2', src: '/images/c2.jpeg' },
  { alt: 'c8', src: '/images/c8.jpeg' },
  { alt: 'c10', src: '/images/c10.jpeg' },
  { alt: 'twoGirls', src: '/images/twoGirls.jpg' },
  { alt: 'c12', src: '/images/c12.jpg' },
  { alt: 'c13', src: '/images/c13.jpg' },
  { alt: 'fourGirls', src: '/images/fourGirls.jpg' },
  { alt: 'c15', src: '/images/c15.jpeg' },
  { alt: 'c16', src: '/images/c16.jpeg' },
  { alt: 'c18', src: '/images/c18.jpeg' },
  { alt: 'c17', src: '/images/c17.jpeg' },
  { alt: 'c19', src: '/images/c19.jpeg' },
  { alt: 'c20', src: '/images/c20.jpeg' },
];

export default function CompanyGallery() {
  return (
    <section className={styles.partnersSection}>
      <h2>Let's Party!</h2>
      <Carousel images={images} />
    </section>
  );
}