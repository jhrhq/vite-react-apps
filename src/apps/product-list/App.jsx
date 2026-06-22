import Layout from "@product-list/components/Layout";
import ProductBoard from "@product-list/components/Products";
import ProductProvider from "@product-list/providers/ProductProvider";

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
