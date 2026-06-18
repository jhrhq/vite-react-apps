import ProductSkeleton from "@/components/Products/ProductSkeleton";

export default function ProductLoading() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 h-fit">
      {Array(6)
        .fill(null)
        .map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
    </div>
  );
}
