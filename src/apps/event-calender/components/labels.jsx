import React, { useContext } from "react";
import GlobalContext from "../context/Global-context";

const Label = () => {
  const { labels, updateLabel } = useContext(GlobalContext);
  
  if(labels.length === 0) return null;

  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 blockj inline-flex">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className={`ml-2 text-gray-700 capitalize ${lbl} text-white px-1`}>{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  );
};

export default Label;
