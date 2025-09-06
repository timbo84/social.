"use client";

import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    title: "Photo Booth w/ Backdrops",
    description:
      "Capture memories with customizable backdrops for any occasion. Perfect for weddings, birthdays, and special events where your guests can strike a pose.",
    link: "/services/photo-booth",
    image: "/images/booth1.jpeg"
  },
  {
    title: "Snack Cart",
    description:
      "Delight your guests with a variety of snacks and treats served in style. Our snack cart adds a fun and interactive touch to your celebration.",
    link: "/services/snack-cart",
    image: "/images/snack1.png"
  },
  {
    title: "Flower Arch",
    description:
      "Add elegance and beauty with our handcrafted flower arches. Ideal for weddings, photo ops, or any event needing a statement centerpiece.",
    link: "/services/flower-arch",
    image: "/images/flower1.jpg"
  },
  {
    title: "Brand Activation",
    description:
      "Boost engagement with a photo booth experience customized for your brand. Perfect for launches, pop-ups, and promotional events.",
    link: "/services/brand-activation",
    image: "/images/brand1.jpeg"
  },
  {
    title: "Corporate Photo Booth",
    description:
      "Professional yet fun. Engage your employees or impress your clients with a sleek booth experience at your next corporate event.",
    link: "/services/corporate-photo-booth",
    image: "/images/corporate1.jpg"
  },
  {
    title: "Glam Booth",
    description:
      "Hollywood vibes with our glam booth. Black-and-white photos, flawless lighting, and instant prints that make every guest feel like a star.",
    link: "/services/glam-booth",
    image: "/images/glam1.jpeg"
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.cardGrid}>
        {services.map((service, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <img
              src= {service.image}
              alt={service.title}
              className={styles.cardImage}
            />
            <p className={styles.cardDesc}>{service.description}</p>
            <Link href={service.link} className={styles.cardButton}>
              Explore More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
