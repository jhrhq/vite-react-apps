import { Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home";
import Layout from "./HOC/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
