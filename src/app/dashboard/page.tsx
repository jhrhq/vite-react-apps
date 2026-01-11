import DashboardSecondaryHeader from "@/components/dashboard-secondary-header";
import { InventoryDataTable } from "@/components/inventory-table/inventory-data-table";
import DataTableFooter from "@/components/inventory-table/table-footer";
import { InventoryHeader } from "@/components/invetory/inventory";

export default function Page() {
  return (
    <>
      <InventoryHeader />
      <DashboardSecondaryHeader />
      <div className="flex flex-1 flex-col gap-4 p-4 overflow-y-auto bg-[#F8FAFC]">
        <InventoryDataTable />
      </div>
      <DataTableFooter />
    </>
  );
}
