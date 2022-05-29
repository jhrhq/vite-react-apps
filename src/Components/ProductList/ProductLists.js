import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ProductLists = ({ review }) => {
  const { user_image, rating, review_text, user_name } = review;
  return (
    <Col>
      <Card>
        <Row className="g-0">
          <Col md={4}>
            <Card.Img
              src={user_image}
              class="img-fluid rounded-start"
              alt="..."
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{user_name}</Card.Title>
              <Card.Text>{review_text}</Card.Text>
              <Card.Text>
                <small class="text-muted">
                  User Rated the Product {rating}
                </small>
                {/* printing the start icon depending on the user ratings */}
                {[...Array(rating)].map((_, index) => (
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning"
                    key={index}
                  />
                ))}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ProductLists;
