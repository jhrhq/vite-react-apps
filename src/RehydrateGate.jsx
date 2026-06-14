import { useSelector } from "./store";

const RehydrateGate = ({ children }) => {
  const isRehydrated = useSelector((state) => state.reduxRemember.isRehydrated);
  return isRehydrated
    ? children
    : <div>Rehydrating, please wait...</div>;
};

export default RehydrateGate;