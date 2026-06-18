import { ChakraProvider } from "@chakra-ui/react";
import App from "@game-hub/components/App.js";
import { ColorModeProvider } from "@game-hub/components/ui/color-mode";
import system from "@game-hub/theme";

const GameHub = () => {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="dark">
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  );
};
export default GameHub;
