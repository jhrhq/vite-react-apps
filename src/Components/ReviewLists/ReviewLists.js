import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ReviewLists = ({ review }) => {
  const { user_image, rating, review_text, user_name, user_id } = review;
  const navigate = useNavigate();
  const handleDetailsReview = () => {
    navigate("/reviews/" + user_id);
  };
  return (
    <Col>
      <Card>
        <Row className="g-0">
          <Col md={4}>
            <Card.Img
              src={user_image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{user_name}</Card.Title>
              <Card.Text>{review_text}</Card.Text>
              <Card.Text>
                <small className="text-muted">User Rated the Product</small>
                {/* printing the start icon depending on the user ratings */}
                {[...Array(rating)].map((_, index) => (
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning"
                    key={index}
                  />
                ))}
                <small className="text-muted">Star</small>
              </Card.Text>
              <Button variant="outline-info" onClick={handleDetailsReview}>
                More Details
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ReviewLists;
