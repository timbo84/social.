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
    question: "My venue requires proof of insurance. Do you provide that?",
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
    <section
  style={{
    maxWidth: "900px",
    margin: "6rem auto 4rem auto",
    padding: "2rem 1rem",
    fontFamily: "customFont, sans-serif"
  }}
>
  <h1
    style={{
      textAlign: "center",
      fontSize: "2.2rem",
      fontWeight: "700",
      marginBottom: "2rem",
      color: "black"
    }}
  >
    Frequently Asked Questions
  </h1>

  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
    {faqs.map((faq, index) => (
      <div
        key={index}
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow:
            activeIndex === index ? "0 4px 12px rgba(0, 0, 0, 0.08)" : "none",
          transition: "box-shadow 0.3s ease"
        }}
      >
        <button
          onClick={() => toggleFAQ(index)}
          style={{
            width: "100%",
            textAlign: "left",
            padding: "1rem 1.25rem",
            fontSize: "1.1rem",
            fontWeight: "600",
            background: activeIndex === index ? "#eee" : "#f9f9f9",
            border: "none",
            outline: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "background 0.3s ease",
            color: "black",
            fontFamily: "customFont, sans-serif"
          }}
        >
          {faq.question}
          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "black",
              fontFamily: "customFont, sans-serif"
            }}
          >
            {activeIndex === index ? "−" : "+"}
          </span>
        </button>

        <div
          style={{
            maxHeight: activeIndex === index ? "500px" : "0",
            overflow: "hidden",
            transition: "max-height 0.35s ease, padding 0.35s ease",
            padding: activeIndex === index ? "1rem 1.25rem" : "0 1.25rem",
            background: "white"
          }}
        >
          <p
            style={{
              margin: "1rem 0",
              lineHeight: "1.6",
              fontSize: "1rem",
              color: "black",
              fontFamily: "customFont, sans-serif"
            }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}
