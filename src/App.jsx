import About from "./components/about/About";
import AvailableProperties from "./components/availableProperties/AvailableProperties";
import Content from "./components/Content";
import CallToAction from "./components/Cta/CallToAction";
import FrequentlyAsked from "./components/Faq/FrequentlyAsked";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

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
      <Content />
      <Footer />
    </>
  );
}
