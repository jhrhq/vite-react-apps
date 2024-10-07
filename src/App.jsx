import About from "./components/about/About";
import AvailableProperties from "./components/availableProperties/AvailableProperties";
import Contact from "./components/contact/Contact";
import CallToAction from "./components/cta/CallToAction";
import FrequentlyAsked from "./components/faq/FrequentlyAsked";
import Features from "./components/features/Features";
import Footer from "./components/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/team/Team";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AvailableProperties />
      <About />
      <CallToAction />
      <FrequentlyAsked />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
