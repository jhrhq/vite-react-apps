import CustomHotToast from "@quizzes/components/CutomToast/CustomToast";
import { store } from "@quizzes/store/index.js";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import RehydrateGate from "./RehydrateGate";


export default function Quizzes() {
   return (
     <Provider store={store}>
      <RehydrateGate >
        <App />
        <CustomHotToast />
      </RehydrateGate>
    </Provider>
   )
}


