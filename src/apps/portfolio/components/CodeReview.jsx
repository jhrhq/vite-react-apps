import { useState } from "react";

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



export default List;


