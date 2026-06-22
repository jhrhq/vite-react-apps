import Footer from "@product-list/components/Footer";
import Header from "@product-list/components/header";
import Hero from "@product-list/components/Hero";

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
