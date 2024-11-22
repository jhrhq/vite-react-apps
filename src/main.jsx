import App from "@/App";
import CustomHotToast from "@/components/CutomToast/CustomToast";
import { persister, store } from "@/store/index.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <App />
        <CustomHotToast />
      </PersistGate>
    </Provider>
  </StrictMode>
);
