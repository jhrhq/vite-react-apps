import { Route, Routes } from "react-router-dom";

import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/notFound/NotFound";
import ReviewDetails from "./Components/ReviewDetails/ReviewDetails";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container mx-auto px-4 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="reviews/:user_id" element={<ReviewDetails />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;