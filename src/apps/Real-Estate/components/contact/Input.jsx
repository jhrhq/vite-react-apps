import React from "react";

const Input = ({ label, type, name, placeholder }) => {
  return (
    <div className="mb-[22px]">
      <label
        htmlFor={name}
        className="mb-4 block text-sm text-body-color dark:text-dark-6"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
      />
    </div>
  );
};

export default Input;
