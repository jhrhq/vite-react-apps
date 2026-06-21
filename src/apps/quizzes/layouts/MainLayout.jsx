import Footer from "@quizzes/components/Footer";
import Header from "@quizzes/components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container mx-auto py-3">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
