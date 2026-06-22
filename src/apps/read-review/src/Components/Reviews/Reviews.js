import React from "react";
import { Container, Row } from "react-bootstrap";
import useReview from "../hooks/useReview";
import ReviewLists from "../ReviewLists/ReviewLists";

const Reviews = () => {
  const [reviews] = useReview("customerReview.json");

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {reviews.map((review) => (
          <ReviewLists key={review.user_id} review={review} />
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
