import { createContext, useReducer } from "react";

const initialState = { cartData: [] };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter((c) => c.id != action.payload.id),
      };
    default:
      return state;
  }
};

export const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}
