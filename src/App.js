import Aboutme from "./components/Aboutme";
import List from "./components/CodeReview";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Projects from "./components/Projects";
import Tools from "./components/Tools";

function App() {
  return (
    <div>
      <List items={[{ text: "jo" }, { text: "ho" }, { text: "mo" }]} />
      <Header />
      <Aboutme />
      <Projects />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
