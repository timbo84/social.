"use client";
import styles from "./Gallery.module.css";
import { useState, useEffect } from "react";

const mediaItems = [
  { type: "image", src: "/images/c1.jpeg" }, 
    { type: "image", src: "/images/corporate2.jpeg" }, 
    { type: "image", src: "/images/corporate4.jpeg" }, 
    { type: "image", src: "/images/flowerArch.jpg" }, 
    { type: "image", src: "/images/flower2.jpg" }, 
    { type: "image", src: "/images/c8.jpeg" }, 
    { type: "image", src: "/images/c12.jpg" }, 
    { type: "image", src: "/images/hero.jpeg" }, 
    { type: "image", src: "/images/gallery1.jpg" }, 
    { type: "image", src: "/images/gallery2.JPEG" }, 
    { type: "image", src: "/images/gallery3.jpeg" }, 
    { type: "image", src: "/images/gallery4.jpg" }, 
    { type: "image", src: "/images/gallery5.png" }, 
    { type: "image", src: "/images/gallery6.jpeg" }, 
    { type: "image", src: "/images/gallery7.jpeg" }, 
    { type: "image", src: "/images/gallery8.jpg" }, 
    { type: "image", src: "/images/gallery9.jpg" }, 
    { type: "image", src: "/images/gallery10.jpg" },
    { type: "image", src: "/images/gallery11.jpeg" }, 
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
              loading="lazy"
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