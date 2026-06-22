import ErrorComponent from "@product-list/components/Products/ErrorComponent";
import ProductActions from "@product-list/components/Products/ProductActions";
import ProductCard from "@product-list/components/Products/ProductCard";
import ProductLoading from "@product-list/components/Products/ProductLoading";
import SectionHeading from "@product-list/components/SectionHeading";
import { useProduct } from "@product-list/providers/ProductProvider";

const ProductBody = ({ children }) => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {children}
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
        <ProductLoading />
      </ProductBody>
    );
  }

  if (error)
    return (
      <ProductBody>
        <ErrorComponent error={error} />
      </ProductBody>
    );

  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <SectionHeading />
        <ProductActions />
        <ProductBody>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  h-fit">
            {filterWithSearchData.length > 0 &&
              filterWithSearchData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </ProductBody>
      </div>
    </div>
  );
}
