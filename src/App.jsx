
import './App.css'
import Featured from './featured/Featured'
import Header from './header_footer/Header'
import Highlights from './highlights/Highlihts'
import Location from './location/Location'
import Pricing from './pricing/Pricing'
import './resources/styles.css'
import VenueInfo from './venue_info/VenueInfo'
function App() {
  return (
    <div className="App">
      <Header ></Header>
      <Featured />
      <VenueInfo />
      <Highlights />
      <Pricing />
      <Location />
    </div>
  )
}

export default App
