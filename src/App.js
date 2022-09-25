import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/navbar";
import PopularTags from "./components/populartags/popular-tags";
function App() {
  return (
    <div className="max-width mx-auto">
      <Navbar />
      <Header />
      <PopularTags />
    </div>
  );
}

export default App;
