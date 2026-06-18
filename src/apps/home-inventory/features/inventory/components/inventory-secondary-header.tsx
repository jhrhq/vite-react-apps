import { Button } from "@home-inventory/components/ui/button";
import { FaArrowDownWideShort, FaPlus } from "react-icons/fa6";

function InventorySecondaryHeader() {
  return (
    <div className="flex justify-between items-cetner px-8 py-4 border-b border-v2">
      <InventoryDataTableFilterActions />
      <div className="flex gap-3 items-center">
        <span className="text-v6">248 items</span>
        <Button variant="outline" size="sm">
          <FaArrowDownWideShort />
          Sort: Updated
        </Button>
      </div>
    </div>
  );
}

export default InventorySecondaryHeader;

function InventoryDataTableFilterActions() {
  return (
    <div className="flex gap-2 items-center">
      <span>Filters:</span>
      <Button variant="default-lighter" size="sm">
        All Locations <FaPlus className="rotate-45" />
      </Button>
      <Button variant="default-lighter" size="sm">
        In Stock <FaPlus className="rotate-45" />
      </Button>
      <Button variant="outline" size="sm">
        <FaPlus />
        Add Filter
      </Button>
    </div>
  );
}
