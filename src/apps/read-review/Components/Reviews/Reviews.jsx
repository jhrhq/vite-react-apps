import customerReview from "../../assets/customerReview.json?url";
import useReview from "../hooks/useReview";
import ReviewLists from "../ReviewLists/ReviewLists";

const Reviews = () => {
  const [reviews] = useReview(customerReview);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <ReviewLists key={review.user_id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;