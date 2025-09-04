import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/hero/hero";
import CTASection from "./components/cta/cta";
import Partners from "./components/partners/partners";
import Testimonials from "./components/testimonials/testimonials";

export default function Home() {
  return (<>
  <HeroSection />
   <CTASection />
   <Partners />
   <Testimonials />
    </>
  );
}
