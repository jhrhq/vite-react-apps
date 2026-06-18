import Cart from "@/components/Products/Cart";
import Filter from "@/components/Products/Filter";
import Search from "@/components/Products/Search";
import Sort from "@/components/Products/Sort";

export default function ProductActions() {
  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <Sort />
        <Filter />
        <div className="flex gap-2 items-center">
          <Search />
          <Cart />
        </div>
      </div>
    </div>
  );
}
