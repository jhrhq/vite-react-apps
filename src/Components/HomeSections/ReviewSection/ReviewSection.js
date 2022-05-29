import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "bootstrap";
import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import useReview from "../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewSection = () => {
  //   const [reviews] = useReview();
  return (
    <Row className="py-3">
      <div className="my-3">
        <h2 className="text-capitalize  text-center p-2">
          Read some
          <span className="text-uppercase bg-info text-white text-center d-inline-block p-2 m-2 ">
            review
          </span>
          from our Precious users
        </h2>
      </div>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />

      <div className="mt-5 mb-3 text-center">
        <Link className="btn btn-secondary" to="/reviews">
          <span className="me-1">More Reviews</span>
          <FontAwesomeIcon className="text-warning" icon={faStar} />
        </Link>
      </div>
    </Row>
  );
};

export default ReviewSection;
