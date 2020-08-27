import React from 'react';
import {Card} from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const Shoping = (props) => {
    const {name, price, instructor, duration, students, img} = props.product;

        return (
           <div>
              
               <Card style={{ width: '18rem' }} className = "box m-4">
              <Card.Img variant="top" style= {{height: "18rem", width:"100%",objectFit: "cover"}} src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Study With - {instructor}</Card.Subtitle>
                <Card.Title>
                  ${price}
                </Card.Title>
                <Card.Text>{duration} Hours</Card.Text>
                <Card.Text>{students} Students</Card.Text>
                <Button onClick={() => props.handleAddCourse(props.product)} variant="success">Enroll Now</Button>
              </Card.Body>
            </Card>
       
               
            
           </div>
                ); 
            };


export default Shoping;



 