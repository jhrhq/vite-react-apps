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
    <div>
      <Header />

       <section id="eventStarts">
        <Featured />
      </section>

      <section id="venueinfo">
        <VenueInfo />
      </section>

      <section id="highlights">
        <Highlights />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="location">
        <Location />
      </section>

      <Footer /> 
    </div>
  );
}

export default App;