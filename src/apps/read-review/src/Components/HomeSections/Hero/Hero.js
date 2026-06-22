import {} from "bootstrap";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <Row className="py-3 mb-2">
      <Col md={6} className="mb-3 mb-md-0">
        <div>
          <div>
            <h2 className="text-uppercase bg-warning text-white d-inline-block p-2">
              Read the Review
            </h2>
          </div>
          <div>
            <h2 className="text-uppercase bg-dark text-white d-inline-block p-2">
              Find Your One{" "}
            </h2>
          </div>
        </div>
        <div className="py-3 pe-3">
          <p className="lead mt-4">
            Start with our picks for the best monitors. These are the ones we
            recommend based on our testing and in-depth monitor reviews.
          </p>
        </div>
        <Button variant="outline-primary"> Read More Details</Button>
      </Col>
      <Col md={6}>
        <img
          src="images/hero_monitor.jpg"
          alt="hero_monitor"
          className="img-fluid"
        />
      </Col>
    </Row>
  );
};

export default Hero;
