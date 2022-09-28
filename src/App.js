import "./App.css";
import CodePractice from "./CodePractice";
import Blog from "./components/blog/blog-section";
import ClientSection from "./components/client-section/client-section";
import Footer from "./components/footer/footer";
import FormSection from "./components/form-section/form-secton";
import Header from "./components/Header/header";
import HowItWorks from "./components/how-it-works/how-it-works";
import Navbar from "./components/navbar";
import Overflow from "./components/Overflow";
import Complex from "./components/populartags/complex";
import PopularTags from "./components/populartags/popular-tags";
import ServiceProvider from "./components/servie-provider/service-proivder";
import SupportSection from "./components/support-section/support-section";
function App() {
  return (
    <>
      <div className="container px-32 font-work bg-[#f5f5f5]">
        <Overflow />
        <CodePractice />
        <Navbar />
        <Header />

        <PopularTags />
        <Complex />
        <ServiceProvider />
        <HowItWorks />
        <SupportSection />
        <Blog />
        <ClientSection />
        <FormSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
