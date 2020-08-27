import React from 'react';
import './App.css';
import Course from './Components/Course/Course';



function App() {
  return (
    <div className="container-fluid">
      <h1>Online Course</h1>
      <header className="">
        <Course className="d-flex m-3 p-4"></Course>
      </header>
    </div>
  );
}

export default App;
