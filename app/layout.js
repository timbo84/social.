import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import FAQ from "./components/faq/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Social Event Rentals",
  description:
    "Social Event Rentals provides premium party equipment and event design services to elevate any celebration. With years of experience and a passion for unforgettable experiences, we deliver high-quality rentals and creative setups for weddings, corporate events, and private gatherings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <FAQ />
        <Footer />
      </body>
    </html>
  );
}
