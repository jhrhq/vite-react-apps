import DataTableFooterSkeleton from "@/features/inventory/components/data-table-footer-skeleton";
import { InventoryHeader } from "@/features/inventory/components/inventory-header";
import { InventoryHeaderSkeleton } from "@/features/inventory/components/inventory-header-skeleton";
import InventorySecondaryHeader from "@/features/inventory/components/inventory-secondary-header";
import { ProductFiltersSkeleton } from "@/features/inventory/components/inventory-secondary-header-skeleton";
import { InventoryDataTable } from "@/features/inventory/components/inventory-table/inventory-data-table";
import { InventoryProductTableSkeleton } from "@/features/inventory/components/inventory-table/inventory-table-skeleton";
import DataTableFooter from "@/features/inventory/components/inventory-table/table-footer";
import { useInventoryProducts } from "@/features/inventory/hooks/use-inventory-products";

export default function Dashboard() {
  const { data, isLoading, isFetching } = useInventoryProducts();

  if (isLoading || isFetching) {
    return (
      <>
        <InventoryHeaderSkeleton />
        <ProductFiltersSkeleton />
        <div className="flex flex-1 flex-col gap-4 p-4 overflow-y-auto bg-[#F8FAFC]">
          <InventoryProductTableSkeleton />
        </div>
        <DataTableFooterSkeleton />
      </>
    );
  }
  return (
    <>
      <InventoryHeader />
      <InventorySecondaryHeader />
      <div className="flex flex-1 flex-col gap-4 p-4 overflow-y-auto bg-[#F8FAFC]">
        {data && <InventoryDataTable data={data.data} />}
      </div>
      <DataTableFooter />
    </>
  );
}
