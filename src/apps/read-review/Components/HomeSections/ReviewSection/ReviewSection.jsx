import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewSection = () => {
  return (
    <div className="py-3">
      <div className="my-3">
        <h2 className="text-center capitalize p-2">
          Read some{" "}
          <span className="inline-block bg-sky-500 text-white uppercase p-2 mx-2">
            review
          </span>
          from our Precious users
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>

      <div className="mt-5 mb-3 text-center">
        <Link
          to="/read-review/reviews"
          className="inline-flex items-center gap-1 rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          <span>More Reviews</span>
          <Star className="h-4 w-4 fill-orange-300 text-orange-300" />
        </Link>
      </div>
    </div>
  );
};

export default ReviewSection;