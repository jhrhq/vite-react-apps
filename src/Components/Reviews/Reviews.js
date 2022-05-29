import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductLists from "../ProductList/ProductLists";

const Reviews = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        <ProductLists />
        <ProductLists />
        <ProductLists />
      </Row>
    </Container>
  );
};

export default Reviews;
