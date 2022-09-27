import "./App.css";
import Blog from "./components/blog/blog-section";
import ClientSection from "./components/client-section/client-section";
import FormSection from "./components/form-section/form-secton";
import Header from "./components/Header/header";
import HowItWorks from "./components/how-it-works/how-it-works";
import Navbar from "./components/navbar";
import PopularTags from "./components/populartags/popular-tags";
import ServiceProvider from "./components/servie-provider/service-proivder";
import SupportSection from "./components/support-section/support-section";
function App() {
  return (
    <div className="container px-32 font-work bg-[#f5f5f5]">
      <Navbar />
      <Header />
      <PopularTags />
      <ServiceProvider />
      <HowItWorks />
      <SupportSection />
      <Blog />
      <ClientSection />
      <FormSection />
    </div>
  );
}

export default App;
