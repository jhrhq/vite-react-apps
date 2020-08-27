import React from 'react';
import fakeCourse from '../../fakeCourse'
import { useState } from 'react';
import Shoping from '../Shoping/Shoping';
import Cart from '../Cart/Cart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const Course = () => {
    const allCourse = fakeCourse.slice(0,10);
    const [courses, setCourses] = useState(allCourse);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (courseClick) => {
        console.log('product added', courseClick);
        const newCart = [...cart, courseClick];
        setCart(newCart);
    };
  
    return (
        <div >
        <Container>
            <Row>
            <Col sm={8}>
                <div>
                {
                    courses.map(crse =>

                        <Shoping className= "d-flex" handleAddCourse= {handleAddCourse}
                        product={crse} key={crse.key}></Shoping>
                    
                 
                    )}
                </div>
            </Col>
            <Col sm={4}>
                <div>
                <Cart cart = {cart}></Cart>
                </div>
            </Col>
        </Row>
        </Container>

        </div>
       
         
    );
};

export default Course;