import { useFetch } from "@product-list/hooks";
import { productSort } from "@product-list/utilities/product-sort-utility";
import { searchFilter } from "@product-list/utilities/produt-search-utility";
import { createContext, useContext, useReducer } from "react";

// Action types
export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  SET_SORT_OPTION: "SET_SORT_OPTION",
  SET_FILTER_CATEGORY: "SET_FILTER_CATEGORY",
};

// Initial state
const initialState = {
  cart: [],
  searchQuery: "",
  sortOption: "asc",
  filterCategory: "all",
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case actionTypes.SET_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload,
      };
    case actionTypes.SET_FILTER_CATEGORY:
      return {
        ...state,
        filterCategory: action.payload,
      };
    default:
      return state;
  }
};

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = useFetch(
    state.filterCategory != "all"
      ? `/products/category/${state.filterCategory}`
      : `/products`
  );

  const sortData = productSort(data, state.sortOption);
  const filterWithSearchData = searchFilter(sortData, state.searchQuery);

  return (
    <ProductContext.Provider
      value={{ filterWithSearchData, loading, error, ...state, dispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => {
  const productContext = useContext(ProductContext);
  if (!productContext) {
    throw new Error(
      "useProductContext must be used within the ProductProvider"
    );
  }

  return productContext;
};
