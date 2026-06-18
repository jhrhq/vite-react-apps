import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App.js"
import { ColorModeProvider } from "@/components/ui/color-mode" // Generated snippet import
import "./index.css"
import system from "./theme" // Your exported createSystem(defaultConfig, config)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="dark">
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
)