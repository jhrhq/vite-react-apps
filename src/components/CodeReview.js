import PropTypes from "prop-types";
import React, { useState } from "react";

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  console.log("WrappedSingleListItem");
  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      // chage onClickHandler(index) call to callback function
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

// const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  // useSate() changed to useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };
  // const handleClick = useMemo(() => (index) => setSelectedIndex(index), []);

  return (
    <ul style={{ textAlign: "left" }}>
      {items?.map((item, index) => (
        <WrappedSingleListItem
          // use the key props which was missing
          key={index}
          onClickHandler={handleClick}
          text={item.text}
          index={index}
          //  isSelected={selectedIndex} to preset property
          isSelected={selectedIndex === index ? true : false}
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  // PropTypes.array to arrayOf
  items: PropTypes.arrayOf(
    // ropTypes.shapeOf to ropTypes.shape
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = WrappedListComponent;

export default List;

/* 

Based on the code below answer the following queries:

Explain what the simple List component does.
What problems / warnings are there with code?
Please fix, optimize, and/or modify the component as much as you think is necessary.

*/
