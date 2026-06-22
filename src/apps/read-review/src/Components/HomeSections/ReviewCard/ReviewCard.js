import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
const ReviewCard = () => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Michel Stu</Card.Title>
          <Card.Text>
            Added
            <FontAwesomeIcon className="text-warning" icon={faStar} />
            <FontAwesomeIcon className="text-warning" icon={faStar} />
            review from his user experience
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ReviewCard;
