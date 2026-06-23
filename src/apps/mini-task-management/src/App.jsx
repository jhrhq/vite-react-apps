import './App.css';
import AddTask from './Components/AddTask';
import AllTask from './Components/AllTask';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <AddTask></AddTask>
        <AllTask></AllTask>
    </div>
  );
}

export default App;
