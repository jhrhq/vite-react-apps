import ProductActions from "@/components/Products/ProductActions";
import ProductCard from "@/components/Products/ProductCard";
import ProductSkeleton from "@/components/Products/ProductSkeleton";
import SectionHeading from "@/components/SectionHeading";
import { useFetch } from "@/hooks";
import { URL } from "@/hooks/useFetch";

export default function ProductBoard() {
  const { data, isLoading, error } = useFetch(`${URL}/products`);

  if (isLoading) {
    return (
      <>
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
      </>
    );
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <SectionHeading />
        <ProductActions />

        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 h-fit">
                {data.length > 0 &&
                  data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
