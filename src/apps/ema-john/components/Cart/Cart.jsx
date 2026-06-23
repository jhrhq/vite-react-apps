export default function Cart({ cart }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  let shipping = 0;

  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const grandTotal = total + shipping;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-xl font-bold text-slate-900">
        Order Summary
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-600">
            Items Ordered
          </span>

          <span className="font-semibold">
            {cart.length}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">
            Total Price
          </span>

          <span className="font-semibold">
            ${total.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">
            Shipping
          </span>

          <span className="font-semibold">
            ${shipping.toFixed(2)}
          </span>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>

            <span className="text-emerald-600">
              ${grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}