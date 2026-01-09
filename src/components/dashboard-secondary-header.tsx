import { FaArrowDownWideShort, FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

function DashboardSecondaryHeader() {
  return (
    <div className="flex justify-between items-cetner px-8 py-4">
      <div className="flex gap-2 items-center">
        <span>Filters:</span>
        <Button variant="outline">
          All Locations <FaPlus className="rotate-45" />
        </Button>
        <Button variant="outline">
          In Stock <FaPlus className="rotate-45" />
        </Button>
        <Button variant="outline">
          <FaPlus className="rotate-45" />
          Add Filter
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <p>248 items</p>
        <Button variant="outline">
          <FaArrowDownWideShort />
          Sort: Updated
        </Button>
      </div>
    </div>
  );
}

export default DashboardSecondaryHeader;
