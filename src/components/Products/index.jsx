import ProductActions from "@/components/Products/ProductActions";
import ProductCard from "@/components/Products/ProductCard";
import ProductSkeleton from "@/components/Products/ProductSkeleton";
import SectionHeading from "@/components/SectionHeading";
import { useProduct } from "@/providers/ProductProvider";

const ProductBody = ({ children }) => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 h-fit">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductBoard() {
  const { filterWithSearchData, loading, error } = useProduct();

  if (loading) {
    return (
      <ProductBody>
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
      </ProductBody>
    );
  }

  if (error) return <ProductBody>Error: {error}</ProductBody>;

  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <SectionHeading />
        <ProductActions />
        <ProductBody>
          {filterWithSearchData.length > 0 &&
            filterWithSearchData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductBody>
      </div>
    </div>
  );
}
