import React from "react";
import { Container, Row } from "react-bootstrap";
import useReview from "../hooks/useReview";
import ProductLists from "../ProductList/ProductLists";

const Reviews = () => {
  const [reviews] = useReview();

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {reviews.map((review) => (
          <ProductLists key={review.user_id} review={review} />
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
