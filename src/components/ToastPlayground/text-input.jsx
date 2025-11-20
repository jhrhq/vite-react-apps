import React from "react";

function TextInput({ label, id, ...dalegated }) {
  const generatedId = React.useId();
  const inputId = `${generatedId}-${id}`;

  return (
    <label htmlFor={inputId}>
      <input id={inputId} {...dalegated} />
      {label}
    </label>
  );
}

export default TextInput;
