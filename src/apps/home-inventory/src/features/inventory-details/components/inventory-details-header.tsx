import { FaChevronRight, FaPaperclip, FaPen, FaTrash } from "react-icons/fa6";
import type { InventoryProductDetail } from "@/@types/details";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

type InventoryDetailProps = {
  data: InventoryProductDetail;
};
export function InventoryDetailsHeader({ data }: InventoryDetailProps) {
  return (
    <header className="flex w-full z-50 h-16 sticky top-0 bg-background shrink-0 items-center gap-2 border-b ">
      <div className="flex items-center gap-2 px-3 w-full">
        <SidebarTrigger />
        <div>
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
        <div className="flex justify-between flex-1">
          <InventoryDetailsBreadCrumb data={data} />
          <InventoryDetailsAction />
        </div>
      </div>
    </header>
  );
}

export function InventoryDetailsBreadCrumb({ data }: InventoryDetailProps) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-v5 text-sm">Inventory</p>{" "}
      <FaChevronRight className="text-v3" />
      <p className="font-medium text-sm text-v9">{data.name}</p>
    </div>
  );
}

export function InventoryDetailsAction() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" className="text-v7 h-11 font-medium">
        <FaPen /> Edit
      </Button>
      <Button variant="outline" className="font-medium h-11">
        <FaPaperclip />
        Add Attachment
      </Button>
      <Button variant="destructive-outline" className="font-medium h-11">
        <FaTrash /> Delete
      </Button>
    </div>
  );
}
