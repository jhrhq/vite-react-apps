import { ShoppingCart } from "lucide-react";

export default function Product({ product, handleAddProduct }) {
  const { img, name, seller, price, stock } = product;

  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      <div className="flex flex-col gap-6 p-6 md:flex-row">
        <div className="flex justify-center md:w-56">
          <img
            src={img}
            alt={name}
            className="h-44 object-contain"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <h2 className="text-xl font-semibold text-slate-900">
            {name}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            by {seller}
          </p>

          <p className="mt-4 text-2xl font-bold text-emerald-600">
            ${price}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Only {stock} left in stock
          </p>

          <div className="mt-6">
            <button
              onClick={() => handleAddProduct(product)}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-medium text-white transition hover:bg-amber-600"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}