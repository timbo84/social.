"use client";

import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    title: "Event Photo Booth",
    description:
      "Capture memories with customizable backdrops for any occasion. Perfect for weddings, birthdays, and special events where your guests can strike a pose.",
    link: "/services/event-photo-booth",
    image: "/images/brand1.jpeg",
  },
  {
    title: "The 360 Experience",
    description:
      "Give your guests the spotlight with our immersive 360 cam booth. Capture dynamic, slow-motion videos from every angle.",
    link: "/services/360-cam-booth",
    image: "/images/360cam6.png", // Update this path to match your actual image
  },

  // {
  //   title: "Business Branding",
  //   description:
  //     "Boost engagement with a photo booth experience customized for your brand. Perfect for launches, pop-ups, and promotional events.",
  //   link: "/services/business-branding",
  //   image: "/images/brand5.jpeg"
  // },
  {
    title: "Corporate Photo Booth",
    description:
      "Professional yet fun. Engage your employees or impress your clients with a sleek booth experience at your next corporate event.",
    link: "/services/corporate-photo-booth",
    image: "/images/corporate1.jpg",
  },
  {
    title: "Glam Booth",
    description:
      "Hollywood vibes with our glam booth. Black-and-white photos, flawless lighting, and instant prints that make every guest feel like a star.",
    link: "/services/glam-booth",
    image: "/images/glam1.jpeg",
  },
  {
    title: "Flower Arch",
    description:
      "Add elegance and beauty with our handcrafted flower arches. Ideal for weddings, photo ops, or any event needing a statement centerpiece.",
    link: "/services/flower-arch",
    image: "/images/flower1.jpg",
  },
  {
    title: "Snack Cart",
    description:
      "Delight your guests with a variety of snacks and treats served in style. Our snack cart adds a fun and interactive touch to your celebration.",
    link: "/services/snack-cart",
    image: "/images/snackMain2.jpg",
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.cardGrid}>
        {services.map((service, i) => (
          <Link href={service.link} key={i} className={styles.cardLink}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <img
                src={service.image}
                alt={service.title}
                className={styles.cardImage}
              />
              <p className={styles.cardDesc}>{service.description}</p>
              <span className={styles.cardButton}>Explore More</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
