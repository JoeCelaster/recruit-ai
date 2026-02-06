import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CompanyLogos from "./components/CompanyLogos";
import MetricsBars from "./components/MetricsBars";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MetricsBars/>
      <CompanyLogos />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  );
}
