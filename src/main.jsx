import App from "@/App";
import CustomHotToast from "@/components/CutomToast/CustomToast";
import { store } from "@/store/index.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import RehydrateGate from "./RehydrateGate";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RehydrateGate >
        <App />
        <CustomHotToast />
      </RehydrateGate>
    </Provider>
  </StrictMode>
);
