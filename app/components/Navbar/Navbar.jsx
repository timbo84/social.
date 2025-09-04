"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./Navbar.module.css"
import Image from "next/image"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/socialLogo.png" alt="Logo" width={150} height={80} />
          </Link>

          <div className={styles.desktopNav}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="#gallery" className={styles.link}>Gallery</Link>
            <Link href="#services" className={styles.link}>Services</Link>
            <Link href="/booking" className={styles.link}>Booking</Link>
            <Link href="#contact" className={styles.link}>Contact</Link>
          </div>

          <Link href="/booking" className={styles.cta}>
            Book Now
          </Link>

          <button className={styles.mobileToggle} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="#gallery" className={styles.link}>Gallery</Link>
            <Link href="#services" className={styles.link}>Services</Link>
            <Link href="/booking" className={styles.link}>Booking</Link>
            <Link href="#contact" className={styles.link}>Contact</Link>
            <Link href="/booking" className={styles.mobileCTA}>
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}