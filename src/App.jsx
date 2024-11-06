import Layout from "@/components/Layout";
import ProductBoard from "@/components/Products";
import ProductProvider from "@/providers/ProductProvider";

function App() {
  return (
    <>
      <ProductProvider>
        <Layout>
          <ProductBoard />
        </Layout>
      </ProductProvider>
    </>
  );
}

export default App;
