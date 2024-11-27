import Navbar from "../components/Navbar";
import Header from "../components/home/Header";
import AboutUs from "../components/home/AboutSection";
import WhatWeBuild from "../components/home/WhatWeBuild";
import NumberStatsSection from "../components/home/NumberStatsSection";
import ChairmansMessage from "../components/home/ChairmansMessage";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Header />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="what-we-build">
        <WhatWeBuild />
      </section>
      <section id="stats">
        <NumberStatsSection />
      </section>
      <ChairmansMessage />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
