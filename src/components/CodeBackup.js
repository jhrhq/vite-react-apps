import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  console.log("WrappedSingleListItem");
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

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(false);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items.map((item, index) => (
        <SingleListItem
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

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;

/* 

2.What problems / warnings are there with code?
  a. PropTypes.array used instead of PropTypes.arrayOf
  b.PropTypes.shapeOf used instead of PropTypes.shape
  c.key prop was missing
  d. isSelected was passed as a function, should be a boolean
  e. selectedIndex, setSelectedIndex used reversed that's why the error was selectedIndex is not a function and not value passed inside useState
  f. WrappedListComponent handleClick function was wrapped with an anonymous function with a parameter instead of just passing the function.
  g. onClickHandler function must be used wrapped with anonymous function inside WrappedSingleListItem component.

*/
