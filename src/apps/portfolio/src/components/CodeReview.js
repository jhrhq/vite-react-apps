import PropTypes from "prop-types";
import React, { useState } from "react";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// List Component
const List = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(false);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items.map((item, index) => (
        <WrappedSingleListItem
          key={index}
          onClickHandler={handleClick}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index ? true : false}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

List.defaultProps = {
  items: null,
};

export default List;

/* 
1.Explain what the simple List component does.
List components prints simply a some HTML uli->li element in the ui based on the given array.

2.What problems / warnings are there with code?
   a. PropTypes.array used instead of PropTypes.arrayOf
  b.PropTypes.shapeOf used instead of PropTypes.shape
  c.key prop was missing
  d. isSelected was passed as a function, should be a boolean
  e. selectedIndex, setSelectedIndex used reversed that's why the error was selectedIndex is not a function and not value passed inside useState
  f. WrappedListComponent handleClick function was wrapped with an anonymous function with a parameter instead of just passing the function.
  g. onClickHandler function must be used wrapped with anonymous function inside WrappedSingleListItem component.

  3.Please fix, optimize, and/or modify the component as much as you think is necessary.

*/
