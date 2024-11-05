import { useProduct } from "@/providers/ProductProvider";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Cart() {
  const { cart } = useProduct();
  return (
    <div className="flow-root">
      <a href="#" className="group -m-2 flex items-center p-2">
        <HiOutlineShoppingBag
          className="size-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          fill="none"
        />

        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cart.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
}
