import React, { useEffect, useState } from 'react';
import Users from './Components/Users/Users';
import './App.css';


function App() {
  const [people, setPeople] = useState([]);
  
  const [friends, setFriends] = useState([]);
 
  
 
        
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
    .then (res => res.json())
    // .then(data => console.log(data.results))
    .then(data => setPeople(data.results))
  },[]);

  const addMember = (name) =>{
    setFriends([...friends, name]);
  };
  return (
    <div>
      <h1>Hello World</h1>

      <ul>
      {
         friends.map(f => <p>{f}</p>)
      }
      </ul>
   
       {
         people.map(ppl  => <Users ppl = {ppl} addMember={addMember}></Users>)
       }
    
      
     
    </div>
  );
}

export default App;
