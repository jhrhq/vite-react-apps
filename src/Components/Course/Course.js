import React from 'react';
import fakeCourse from '../../fakeCourse'
import { useState } from 'react';
import Shoping from '../Shoping/Shoping';
import Cart from '../Cart/Cart';


const Course = () => {
    const allCourse = fakeCourse.slice(0,10);
    const [courses, setCourses] = useState(allCourse);
    const [cart, setCart] = useState([]);
    const handleAddCourse = (courseClick) => {
        const newCart = [...cart, courseClick];
        setCart(newCart);
    }
  
    return (
        <div>
          <div>
          {
              courses.map(crse => <Shoping className = "d-flex m-3 p-4"  handleAddCourse= {handleAddCourse}
                product={crse} key={crse.key}></Shoping>)
          }
          </div>
           <div>
          <Cart cart = {cart}></Cart>
        </div>

        </div>
         
    );
};

export default Course;