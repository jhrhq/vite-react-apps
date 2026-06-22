import React from 'react';
import './App.css';
import Course from './Components/Course/Course';




function App() {
  return (
    <div className="container-fluid">
      <h1 className = "text-center">Online Courses</h1>
      <header className="">
        <Course></Course>
      </header>
    </div>
 
  );
}

export default App;
