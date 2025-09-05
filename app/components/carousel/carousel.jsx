"use client";
import { useState, useEffect } from "react";
import styles from "./carousel.module.css";

const Carousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const doubled = [...images, ...images];

  const closeModal = () => setSelectedIndex(null);

  // ✅ Lock background scroll
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  // ✅ Swipe gestures
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      nextImage();
    }
    if (touchEndX - touchStartX > 50) {
      prevImage();
    }
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Carousel */}
      <div className={`${styles.carousel} ${selectedIndex !== null ? styles.paused : ""}`}>
        <div className={styles.track}>
          {doubled.map((img, index) => (
            <div
              key={index}
              className={styles.slide}
              onClick={() => setSelectedIndex(index % images.length)}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button className={styles.close} onClick={closeModal}>
              &times;
            </button>

            <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} />
            {/* <p>{images[selectedIndex].alt}</p> */}

            {/* 👇 Chevron navigation */}
            <button className={`${styles.chevron} ${styles.left}`} onClick={prevImage}>
              &#10094;
            </button>
            <button className={`${styles.chevron} ${styles.right}`} onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
