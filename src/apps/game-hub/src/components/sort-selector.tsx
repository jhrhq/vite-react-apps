import { Button, Menu,  MenuItem, MenuPositioner, Portal, } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },

    { value: "name", label: "Name" },

    { value: "-released", label: "Release Date" },

    { value: "-metacritic", label: "Popularity" },

    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
  <Menu.Root>
  <Menu.Trigger asChild>
    <Button variant="outline">
      Order By: {currentSortOrder?.label || "Relevance"}
      <BsChevronDown />
    </Button>
  </Menu.Trigger>
  <Portal>
<MenuPositioner>
  <Menu.Content>
    {sortOrders.map((order) => (
      <Menu.Item 
      key={order.value} 
      value={order.value} 
      onClick={() => onSelectSortOrder(order.value)}
      >
        {order.label}
      </Menu.Item>
    ))}
  </Menu.Content>
  </MenuPositioner>
    </Portal>
</Menu.Root>
  );
};

export default SortSelector;
