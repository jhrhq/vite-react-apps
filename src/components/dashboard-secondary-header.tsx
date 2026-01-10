import { FaArrowDownWideShort, FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

function DashboardSecondaryHeader() {
  return (
    <div className="flex justify-between items-cetner px-8 py-4 border-b border-v2">
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

export default DashboardSecondaryHeader;
