import About from "./components/About";
import AvailableProperties from "./components/availableProperties/AvailableProperties";
import CallToAction from "./components/CallToAction";
import Content from "./components/Content";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import FrequentlyAsked from "./components/FrequentlyAsked";
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
