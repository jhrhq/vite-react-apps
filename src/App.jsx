import Layout from "@/components/Layout";
import ProductBoard from "@/components/Products";
import CartProvider from "@/providers/CartProvider";
import ProductProvider from "@/providers/ProductProvider";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Layout>
            <ProductBoard />
          </Layout>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
