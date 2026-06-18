import { useDebounce } from "@/hooks";
import { actionTypes, useProduct } from "@/providers/ProductProvider";
import { HiOutlineSearch } from "react-icons/hi";

export default function Search() {
  const { dispatch } = useProduct();

  const doSearch = useDebounce((term) => {
    dispatch({
      type: actionTypes.SET_SEARCH_QUERY,
      payload: term,
    });
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }

  return (
    <>
      {/*<!-- Search ->*/}
      <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:ring-2! ring-inset focus-within:ring-teal-500! rounded-md">
        <HiOutlineSearch
          className="mr-2 h-5 w-5 stroke-slate-400"
          fill="none"
        />

        <input
          onChange={handleChange}
          className="block w-full appearance-none bg-transparent text-base rounded-md focus:ring-0 text-gray-700 placeholder:text-gray-400 focus:border-gray-300 placeholder:text-sm border-gray-300 sm:text-sm sm:leading-6"
          placeholder="Find anything..."
          aria-label="Search components"
          id="headlessui-combobox-input-:r5n:"
          role="combobox"
          type="text"
          aria-expanded="false"
          aria-autocomplete="list"
          // value=""
          // style="caret-color: rgb(107, 114, 128)"
        />
      </div>
    </>
  );
}
