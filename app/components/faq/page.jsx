"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What kind of events do you do?",
    answer:
      "Weddings, birthdays, corporate events, graduation parties, conventions, festivals, conferences, HOCO, baby showers, bridal showers, family reunions, quinceaneras, retirement parties, trade shows, bar mitzvahs, holiday parties. No event is too big or small!",
  },
  {
    question: "What form of payment do you accept?",
    answer: "We accept Credit Cards, Cash, Venmo, and Paypal.",
  },
  {
    question: "Is there a deposit required to secure my rental date?",
    answer:
      "Yes, we require a non-refundable deposit to secure your rental date. The deposit amount varies depending on the package you choose.",
  },
  {
    question: "Are there any additional fees I should be aware of?",
    answer:
      "No surprises here. We will go over in detail before final payment. We do charge for traveling 15 miles outside of Omaha.",
  },
  {
    question: "Can I cancel or reschedule my rental?",
    answer:
      "Yes, you may cancel or reschedule your rental if outside of 30 days until your event. If you reschedule your rental, we will apply the deposit to the new date but please note, your deposit is not refundable.",
  },
  {
    question: "Do you offer any discounts or promos?",
    answer:
      "We occasionally offer discounts and promotions. Follow us on social media to stay updated.",
  },
  {
    question: "My Venue requires proof of insurance. Do you provide that?",
    answer:
      "Yes, we are fully insured and can provide evidence of coverage upon request.",
  },
  {
    question: "How long does it take to set up the photo booth?",
    answer:
      "We typically require about 30 minutes to an hour to set up the photo booth, depending on the location and event space.",
  },
  {
    question: "How much space do we need for the photo booth?",
    answer:
      "Our photo booth is designed to fit in small spaces, but we typically require a 10 ft x 10ft area. We would love to be close to a power outlet (we can communicate with you about your specific space) and ground to be level.",
  },
  {
    question: "How much space do we need for the 360 booth?",
    answer:
      "We require approximately a 15 ft x 15 ft area for the 360 booth to allow for safe operation and the best guest experience.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h1 className={styles.heading}>Frequently Asked Questions</h1>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={`${styles.question} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={styles.icon}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.show : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
