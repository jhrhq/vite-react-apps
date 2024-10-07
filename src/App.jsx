import About from "./components/About";
import Available from "./components/Available";
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
      <Available />
      <About />
      <CallToAction />
      <FrequentlyAsked />
      <Team />
      <Content />
      <Footer />
    </>
  );
}
