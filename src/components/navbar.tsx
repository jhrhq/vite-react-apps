import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./color-mode-switch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      {/* <Image src={}></Image> */}
      <Text> Logo</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
