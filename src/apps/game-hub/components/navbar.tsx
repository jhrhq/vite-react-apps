import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "@game-hub/components/color-mode-switch";
import SearchInput from "@game-hub/components/search-input";
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
