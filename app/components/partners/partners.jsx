import React from 'react';
import styles from './partners.module.css';
import Carousel from '../carousel/carousel';

const images = [
  { alt: 'c1', src: '/images/c1.jpeg' },
  { alt: 'c2', src: '/images/c2.jpeg' },
  { alt: 'c3', src: '/images/c3.jpeg' },
  { alt: 'c4', src: '/images/c4.jpeg' },
  { alt: 'c5', src: '/images/c5.jpeg' },
  { alt: 'c6', src: '/images/c6.jpeg' },
  { alt: 'c7', src: '/images/c7.jpeg' },
  { alt: 'c8', src: '/images/c8.jpeg' },
  { alt: 'c9', src: '/images/c9.jpeg' },
  { alt: 'c10', src: '/images/c10.jpeg' },
  { alt: 'c11', src: '/images/c11.jpg' },
  { alt: 'c12', src: '/images/c12.jpg' },
  { alt: 'c13', src: '/images/c13.jpg' },
  { alt: 'c14', src: '/images/c14.jpeg' },
  { alt: 'c15', src: '/images/c15.jpeg' },
];

export default function CompanyGallery() {
  return (
    <section className={styles.partnersSection}>
      <h2>OUR WORK IN ACTION</h2>
      <p className={styles.description}>
        From immersive photo booths to branded retail activations, our team brings bold ideas to life.
        Here's a glimpse into some of the experiences we've created with our client partners.
      </p>

      <Carousel images={images} />
    </section>
  );
}