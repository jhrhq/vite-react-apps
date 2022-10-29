import "./App.css";
import { Brand, CTA, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      {/* https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?node-id=0%3A15 */}
      {/* https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/containers/header/Header.jsx */}
      {/* https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/containers/header/header.css */}
    </div>
  );
}

export default App;
