import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductBoard from "@/components/Products";
import CartProvider from "@/providers/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Hero />
        <ProductBoard />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
