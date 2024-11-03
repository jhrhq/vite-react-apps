import Label from "@/components/ui/Label";
import Radio from "@/components/ui/Radio";
import { useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";

export default function Filter() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
            id="filter-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={handleOpen}
          >
            Filter
            <HiMiniChevronDown className="-mr-1 size-5 text-gray-400" />
          </button>
        </div>
        {/*<!-- Filter options ->*/}
        {open && (
          <div
            className="absolute z-10 mt-2 left-5 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-button"
            tabIndex="-1"
            id="filter-dropdown"
          >
            <div className="py-1" role="none">
              <Label for="filter-option-1">
                <Radio type="radio" id="filter-option-1" name="filter" />
                <span className="ml-2">Category 1</span>
              </Label>
              <Label
                for="filter-option-2"
                className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
              >
                <Radio type="radio" id="filter-option-2" name="filter" />
                <span className="ml-2">Category 2</span>
              </Label>
              <Label
                for="filter-option-3"
                className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
              >
                <Radio id="filter-option-3" name="filter" />
                <span className="ml-2">Category 3</span>
              </Label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
