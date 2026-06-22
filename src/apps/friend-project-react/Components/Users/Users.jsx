import React, { useState } from 'react';

const Users = (props) => {
  
    const {name, email, location, picture, phone} = props.ppl;
    const [mobile, setMobile] = useState(''); 
    const showPhone = () => setMobile(phone);
    const addMember = props.addMember;
   
    return (
        <div style= {{display: 'flex', border:' 1px solid orangered', margin: '10px', padding: '10px', width:'500px'}}>
            <div style= {{display: 'flex', border:' 1px solid aliceblue', margin: '10px', marginRight:'10px', padding: '5px', paddigRight:'5px'}}>
                <img src={picture.large} alt=""/>
            </div>
            <div>
                <h2>Name : {name.first } {name.last }</h2>
                <h4>{location.city} , {location.country } </h4>
                <h4>E-mail : {email} </h4>
                <h4>{mobile}</h4>
                <button style={{margin:'5px'}} onClick={showPhone}>Phone Number</button>
                <button onClick={() => addMember(name.first)}>Add Me</button>
            </div>
            <br></br>
        </div>
    );
};

export default Users;