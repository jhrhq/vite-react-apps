import Footer from "@/components/Footer";
import Header from "@/components/header";
import Hero from "@/components/Hero";

export default function Layout({ children }) {
  return (
    <>
      {" "}
      <Header />
      <Hero />
      {children}
      <Footer />
    </>
  );
}
