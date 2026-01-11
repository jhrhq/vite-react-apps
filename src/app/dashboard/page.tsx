import { FaDownload, FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import DashboardSecondaryHeader from "@/components/dashboard-secondary-header";
import { InventoryDataTable } from "@/components/inventory-table/inventory-data-table";
import DataTableFooter from "@/components/inventory-table/table-footer";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

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

function InventoryHeader() {
  return (
    <header className="flex w-full z-50 h-16 sticky top-0 bg-background shrink-0 items-center gap-2 border-b border-v2">
      <div className="flex items-center gap-2 px-3 w-full">
        <SidebarTrigger />
        <div>
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
        <div className="flex justify-between flex-1">
          <div className="flex items-center gap-4">
            <p className="font-bold text-2xl text-v9">Inventory</p>
            <InventoryHeaderForm />
          </div>
          <InventoryHeaderAction />
        </div>
      </div>
    </header>
  );
}

function InventoryHeaderForm() {
  return (
    <form>
      <Field className="gap-2">
        <InputGroup className="h-12.5">
          <InputGroupAddon>
            <FaMagnifyingGlass className="size-3.5 text-v4" />
          </InputGroupAddon>
          <InputGroupInput
            id="username"
            type="username"
            placeholder="Search items..."
          />
        </InputGroup>
      </Field>
    </form>
  );
}

function InventoryHeaderAction() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" className="text-v7 h-11 font-medium">
        <FaDownload /> Export
      </Button>
      <Button className="font-medium h-11">
        <FaPlus /> Add Item
      </Button>
    </div>
  );
}
