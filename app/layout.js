import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.socialeventrentalsne.com"),
  title: "Social Event Rentals",
  description:
    "Social Event Rentals provides premium party equipment and event design services to elevate any celebration. With years of experience and a passion for unforgettable experiences, we deliver high-quality rentals and creative setups for weddings, corporate events, and private gatherings.",
  keywords: [
    "photo booth rental",
    "backdrop rental",
    "flower arch rental",
    "event rentals",
    "party rentals",
    "wedding photo booth",
    "corporate event rentals",
    "glam booth",
    "Social Event Rentals",
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "31xhbhFhNaHSdRPBDjl9SZl9Va-ZSiSfK9VD_BLIQ6g",
  },
  openGraph: {
    title: "Social Event Rentals",
    description:
      "Social Event Rentals provides premium party equipment and event design services to elevate any celebration.",
    url: "https://www.socialeventrentalsne.com",
    siteName: "Social Event Rentals",
    images: [
      {
        url: "/images/c8.jpeg",
        width: 1200,
        height: 630,
        alt: "Social Event Rentals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Event Rentals",
    description:
      "Social Event Rentals provides premium party equipment and event design services to elevate any celebration.",
    images: ["/images/c8.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
