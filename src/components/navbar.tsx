import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./color-mode-switch";
import SearchInput from "./search-input";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
      {/* <Image src={}></Image> */}
      <Text> Logo</Text>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
