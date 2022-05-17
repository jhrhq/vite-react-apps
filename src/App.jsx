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
      <Element name="eventStarts">
        <Header />
      </Element>
      <Element name="venueinfo">
        <Featured />
      </Element>
      <Element name="highlights">
        <VenueInfo />
      </Element>
      <Element name="pricing">
        <Highlights />
      </Element>
      <Element name="">
        <Pricing />
      </Element>
      <Element name="">
        <Location />
      </Element>
      <Element name="">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
