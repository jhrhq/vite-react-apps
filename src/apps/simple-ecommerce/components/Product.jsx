import { ShoppingCart } from "lucide-react";

const Product = ({ laptop, handleAddToCart }) => {
  const { name, cpu, images, company, price } = laptop;

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
      {/* Image Container */}
      <div className="relative h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={images}
          alt={name}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-1">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            {company}
          </span>
        </div>
        
        <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1" title={name}>
          {name}
        </h4>
        
        <p className="text-sm text-gray-500 mb-4 flex items-center gap-1.5">
          <span className="font-medium text-gray-700">CPU:</span> {cpu}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-end justify-between mb-4">
            <p className="text-2xl font-bold text-gray-900">
              ${price}
            </p>
          </div>
          
          <button
            onClick={() => handleAddToCart(laptop)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;