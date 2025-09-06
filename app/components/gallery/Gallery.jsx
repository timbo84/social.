"use client";
import styles from "./Gallery.module.css";
import { useState, useEffect } from "react";

const mediaItems = [
  { type: "image", src: "/images/c1.jpeg" },
    { type: "image", src: "/images/c2.jpeg" }, 
    { type: "image", src: "/images/c3.jpeg" },
    { type: "image", src: "/images/c4.jpeg" },
    { type: "image", src: "/images/c5.jpeg" },
    { type: "image", src: "/images/c6.jpeg" },
    { type: "image", src: "/images/c7.jpeg" },
    { type: "image", src: "/images/c8.jpeg" },
    { type: "image", src: "/images/c9.jpeg" },
    { type: "image", src: "/images/c10.jpeg" },
    { type: "image", src: "/images/c11.jpg" },
    { type: "image", src: "/images/c12.jpg" },
    { type: "image", src: "/images/c13.jpg" },
    { type: "image", src: "/images/c14.jpeg" },
    { type: "image", src: "/images/c15.jpeg" },
    { type: "video", src: "/videos/video1.mp4" },
    { type: "video", src: "/videos/video2.mp4" },
    { type: "video", src: "/videos/hero.mp4" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = () => setActiveIndex(null);

  // 🔒 Lock/unlock body scroll when modal is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.masonry}>
        {mediaItems.map((item, i) =>
          item.type === "image" ? (
            <img
              key={i}
              src={item.src}
              alt={`gallery-${i}`}
              className={styles.item}
              onClick={() => setActiveIndex(i)}
            />
          ) : (
            <video
              key={i}
              src={item.src}
              className={styles.item}
              onClick={() => setActiveIndex(i)}
              muted
              playsInline
            />
          )
        )}
      </div>

      {activeIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          {mediaItems[activeIndex].type === "image" ? (
            <img
              src={mediaItems[activeIndex].src}
              alt={`lightbox-${activeIndex}`}
              className={styles.lightboxContent}
            />
          ) : (
            <video
              src={mediaItems[activeIndex].src}
              controls
              autoPlay
              className={styles.lightboxContent}
            />
          )}
          <button className={styles.closeBtn} onClick={closeLightbox}>
            ✕
          </button>
        </div>
      )}
    </section>
  );
}