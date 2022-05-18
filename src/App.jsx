import Element from "react-scroll/modules/components/Element";
import "./App.css";
import Featured from "./featured/Featured";
import Footer from "./header_footer/Footer";
import Header from "./header_footer/Header";
import Highlights from "./highlights/Highlihts";
import Location from "./location/Location";
import Pricing from "./pricing/Pricing";
import "./resources/styles.css";
import VenueInfo from "./venue_info/VenueInfo";
function App() {
  return (
    <div className="App">
        <Header /> 
      <Element name="eventStarts">
        <Featured />
      </Element>
      <Element name="venueinfo">
        <VenueInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
        <Footer />
    </div>
  );
}

export default App;
