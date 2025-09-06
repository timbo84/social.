"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <p>Social Event Rentals</p>
          </Link>

          <div className={styles.desktopNav}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/gallery" className={styles.link}>Gallery</Link>
            <Link href="#services" className={styles.link}>Services</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>

          <Link href="/booking" className={styles.cta}>
            Book Now
          </Link>

          {/* Hamburger */}
          <button
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.open : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className={styles.mobileMenu} ref={menuRef}>
            <Link href="/" className={styles.link} onClick={closeMenu}>Home</Link>
            <Link href="/gallery" className={styles.link} onClick={closeMenu}>Gallery</Link>
            <Link href="#services" className={styles.link} onClick={closeMenu}>Services</Link>
            <Link href="/contact" className={styles.link} onClick={closeMenu}>Contact</Link>
            <Link href="/booking" className={styles.mobileCTA} onClick={closeMenu}>
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
