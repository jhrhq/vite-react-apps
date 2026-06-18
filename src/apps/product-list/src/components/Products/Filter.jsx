import Label from "@/components/ui/Label";
import Radio from "@/components/ui/Radio";
import { useFetch, useOutsideClick } from "@/hooks";
import { actionTypes, useProduct } from "@/providers/ProductProvider";
import { useRef, useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";

export default function Filter() {
  const { data, loading, error } = useFetch("/products/categories");
  const { filterCategory, dispatch } = useProduct();

  const [open, setOpen] = useState(false);
  const filterRef = useRef(null);

  const handleToggleDropDown = () => {
    setOpen(!open);
  };

  const handleRadioChange = (e) => {
    dispatch({
      type: actionTypes.SET_FILTER_CATEGORY,
      payload: e.target.value,
    });
  };

  useOutsideClick(filterRef, () => setOpen(false));
  return (
    <div className="w-full" ref={filterRef}>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 hover:cursor-pointer"
            id="filter-button"
            aria-expanded="false"
            aria-haspopup="true"
            disabled={loading || error}
            onClick={handleToggleDropDown}
          >
            Filter
            <HiMiniChevronDown className="-mr-1 size-5 text-gray-400" />
          </button>
        </div>
        {/*<!-- Filter options ->*/}
        {open && (
          <div
            className="  absolute z-10 mt-2 left-5 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hover:cursor-pointer focus:outline-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="filter-button"
            tabIndex="-1"
            id="filter-dropdown"
          >
            <div className="py-1" role="none">
              <Label key={"all"} htmlFor={"all"}>
                <Radio
                  type="radio"
                  id={"all"}
                  name={"all"}
                  value={"all"}
                  checked={filterCategory == "all"}
                  onValueChange={handleRadioChange}
                />
                <span className="ml-2"> {"all"}</span>
              </Label>
              {data.map((cat) => (
                <Label key={cat} htmlFor={cat}>
                  <Radio
                    type="radio"
                    id={cat}
                    name={cat}
                    value={cat}
                    checked={filterCategory == cat}
                    onValueChange={handleRadioChange}
                  />
                  <span className="ml-2"> {cat}</span>
                </Label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
