import { ShoppingCart, Sparkles, Trash2 } from "lucide-react";
import CartList from "./CartList";
// Removed Cart.css

const Cart = ({ cart, handleEmptyCart, randomProduct, setRandomProduct }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  let productName = [];

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    productName.push(product.name);
  }

  const grandTotal = total + shipping;

  let selectProductName = [];
  const handleRandomProduct = () => {
    const randomNumber = Math.trunc(Math.random() * productName.length);
    selectProductName.push(productName[randomNumber]);
    setRandomProduct(selectProductName);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <ShoppingCart className="text-indigo-600" size={20} />
        </div>
        Your Cart
      </h2>

      {/* Cart Items List */}
      <div className="max-h-64 overflow-y-auto mb-6 pr-2 space-y-2">
        {cart.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <ShoppingCart size={40} className="mx-auto mb-2 opacity-50" />
            <p>Your cart is empty</p>
          </div>
        ) : (
          cart.map((product) => <CartList product={product} key={product.id} />)
        )}
      </div>

      {/* Summary */}
      <div className="space-y-3 text-gray-700 mb-6">
        <div className="flex justify-between text-sm">
          <span>Selected Items:</span>
          <span className="font-semibold text-gray-900">{quantity}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Total Price:</span>
          <span className="font-semibold text-gray-900">${total}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Shipping:</span>
          <span className="font-semibold text-gray-900">${shipping}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-gray-200">
          <span>Grand Total:</span>
          <span className="text-indigo-600">${grandTotal}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button
          onClick={handleRandomProduct}
          className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 border border-indigo-200"
        >
          <Sparkles size={18} />
          Select Any Randomly
        </button>

        {randomProduct && randomProduct.length > 0 && (
          <div className="bg-green-50 border border-green-200 text-green-800 text-sm text-center p-3 rounded-xl font-medium">
            You selected: {Array.isArray(randomProduct) ? randomProduct.join(", ") : randomProduct}
          </div>
        )}

        <button
          onClick={handleEmptyCart}
          className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 border border-red-200"
        >
          <Trash2 size={18} />
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;