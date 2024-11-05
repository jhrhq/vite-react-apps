import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductBoard from "@/components/Products";
import CartProvider from "@/providers/CartProvider";
import ProductProvider from "@/providers/ProductProvider";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Header />
          <Hero />
          <ProductBoard />
          <Footer />
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
