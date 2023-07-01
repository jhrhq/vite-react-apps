import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./color-mode-switch";
import SearchInput from "./search-input";
interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      {/* <Image src={}></Image> */}
      <Text> Logo</Text>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
