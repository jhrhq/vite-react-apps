import { useLocalStorage } from "@/hooks";
import { createContext, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("useCartState must be used within the CartProvider");
  }

  return cartContext;
};
