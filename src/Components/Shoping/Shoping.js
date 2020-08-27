import React from 'react';

const Shoping = (props) => {
    const {name, price, instructor, duration, students, img} = props.product;
    return (
        <div className ="bg-dar d-flex justify-content-between m-3 p-4 ">
            <div className="card" style ={{width:' 18rem'}}> 
                <h3 className = "card-title">{name}</h3>
               <div className="card-body">
               <p className = "card-text">by: {instructor}</p> 
                <p className = "card-text">  {price}</p>
                <p className = "card-text">  {duration} </p> 
                <p className = "card-text">  {students} Students  </p> 
                <p className = "card-text"> <a href={img}>See images</a>   </p> 
               </div>
                <button className = "button btn btn-success" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</button></div>
        </div>
        
       
    );
}

export default Shoping;