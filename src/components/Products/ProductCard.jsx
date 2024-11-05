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
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={product?.image}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700">{product?.title}</h3>
          <p className="mt-2 text-sm text-gray-500">
            {truncateText(product?.description, 100)}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900 mt-4">
          ${product?.price}
        </p>
      </div>
      {/*<!-- Button ->*/}
      <Button className="w-full " onClick={() => handleAddToCart(product)}>
        <div className="flex px-3 py-2 justify-center">
          <HiOutlineShoppingBag
            stroke="currentColor"
            className="mr-2.5 size-5 flex-none stroke-slate-400"
          />
          {!isAddedToCart ? "Add To Cart" : "Remove From Cart"}
        </div>
      </Button>
    </div>
  );
}
