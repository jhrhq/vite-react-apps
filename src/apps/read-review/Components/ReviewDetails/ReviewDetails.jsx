import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useReview from "../hooks/useReview";

const ReviewDetails = () => {
  const { user_id } = useParams();
  const [reviews] = useReview(
    `https://jsonplaceholder.typicode.com/posts/${user_id}`
  );

  return (
    <Card className="text-center my-5">
      <Card.Body>
        <Card.Title>{reviews.title?.slice(0, 10)}</Card.Title>
        <Card.Text>{reviews.body}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Based on user params</Card.Footer>
    </Card>
  );
};

export default ReviewDetails;
