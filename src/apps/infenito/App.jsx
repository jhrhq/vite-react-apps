import Blog from "./components/blog/blog-section";
import ClientSection from "./components/client-section/client-section";
import CreativeFormSection from "./components/creative-form";
import Footer from "./components/footer/footer";
import CreativeHeader from "./components/Header/creative-header";
import HowItWorks from "./components/how-it-works/how-it-works";
import Navbar from "./components/navbar";
import Complex from "./components/populartags/complex";
import PopularTags from "./components/populartags/popular-tags";
import ServiceProvider from "./components/servie-provider/service-proivder";
import SupportSection from "./components/support-section/support-section";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Navbar />
        <CreativeHeader />
        <PopularTags />
        <Complex />
        <ServiceProvider />
        <HowItWorks />
        <SupportSection />
        <Blog />
        <ClientSection />
        <CreativeFormSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
