import Button from "@/components/ui/button";
import truncateText from "@/utilities/truncate-text-utility";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function ProductCard({ product }) {
  const { id, title, description, category, image, price } = product;
  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={image}
          alt="Front of men&#039;s Basic Tee in black."
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700">{title}</h3>
          <p className="mt-2 text-sm text-gray-500">
            {truncateText(description, 100)}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900 mt-4">${price}</p>
      </div>
      {/*<!-- Button ->*/}
      <Button className="w-full ">
        <div className="flex px-3 py-2 justify-center">
          <HiOutlineShoppingBag
            stroke="currentColor"
            className="mr-2.5 size-5 flex-none stroke-slate-400"
          />
          Add To Cart
        </div>
      </Button>
    </div>
  );
}
