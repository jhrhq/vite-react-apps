import { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

export default function Shop() {
  const [products] = useState(fakeData.slice(0, 10));
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <section className="space-y-6">
          {products.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddProduct={handleAddProduct}
            />
          ))}
        </section>

        <aside>
          <div className="sticky top-28">
            <Cart cart={cart} />
          </div>
        </aside>
      </div>
    </main>
  );
}