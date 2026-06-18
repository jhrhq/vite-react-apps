import DataTableFooterSkeleton from "@home-inventory/features/inventory/components/data-table-footer-skeleton";
import { InventoryHeader } from "@home-inventory/features/inventory/components/inventory-header";
import { InventoryHeaderSkeleton } from "@home-inventory/features/inventory/components/inventory-header-skeleton";
import InventorySecondaryHeader from "@home-inventory/features/inventory/components/inventory-secondary-header";
import { ProductFiltersSkeleton } from "@home-inventory/features/inventory/components/inventory-secondary-header-skeleton";
import { InventoryDataTable } from "@home-inventory/features/inventory/components/inventory-table/inventory-data-table";
import { InventoryProductTableSkeleton } from "@home-inventory/features/inventory/components/inventory-table/inventory-table-skeleton";
import DataTableFooter from "@home-inventory/features/inventory/components/inventory-table/table-footer";
import { useInventoryProducts } from "@home-inventory/features/inventory/hooks/use-inventory-products";
import { ErrorPage } from "@home-inventory/features/pages/Error";

export default function Dashboard() {
  const { data, isLoading, isFetching, isError, refetch, error } =
    useInventoryProducts();

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
  if (isError || !data) {
    return <ErrorPage message={error?.message} reset={refetch} />;
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
