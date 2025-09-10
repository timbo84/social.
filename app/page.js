import HeroSection from "./components/hero/hero";
import CTASection from "./components/cta/cta";
import Partners from "./components/partners/partners";
import Testimonials from "./components/testimonials/testimonials";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CTASection />
      <Partners />
      <Services />
      <Testimonials />
    </>
  );
}
