import Button from "@/components/ui/button";
import { actionTypes, useProduct } from "@/providers/ProductProvider";
import truncateText from "@/utilities/truncate-text-utility";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function ProductCard({ product }) {
  const { cart, dispatch } = useProduct();

  const isAddedToCart = cart.find((item) => item.id == product?.id);

  const handleAddToCart = (product) => {
    if (isAddedToCart) {
      dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: product,
      });
    } else {
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: product,
      });
    }
  };
  return (
   <div className="relative flex flex-col justify-between h-full rounded-md overflow-hidden pb-4">
  <div className="flex-1">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none lg:h-80">
      <img
        src={product?.image}
        alt={product?.title || "Product image"}
        className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
      />
    </div>
    <div className="mt-4 px-3">
      <h3 className="text-sm text-gray-700">{product?.title}</h3>
      <p className="mt-2 text-sm text-gray-500">
        {truncateText(product?.description, 100)}
      </p>
    </div>
  </div>
  
  <div className="mt-4">
    <p className="text-sm font-medium text-gray-900 px-3 mb-4">
      ${product?.price}
    </p>
    <div className="mx-3">
      <Button className="w-full" onClick={() => handleAddToCart(product)}>
        <div className="flex px-3 py-2 justify-center items-center">
          <HiOutlineShoppingBag
            stroke="currentColor"
            className="mr-2.5 size-5 flex-none stroke-slate-400"
          />
          {!isAddedToCart ? "Add To Cart" : "Remove From Cart"}
        </div>
      </Button>
    </div>
  </div>
</div>
  );
}
