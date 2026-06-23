import { useParams } from "react-router-dom";
import useReview from "../hooks/useReview";

const ReviewDetails = () => {
  const { user_id } = useParams();

  const [reviews] = useReview(
    `https://jsonplaceholder.typicode.com/posts/${user_id}`
  );

  return (
    <div className="my-5 rounded-lg border bg-white text-center shadow-sm">
      <div className="p-6">
        <h2 className="mb-4 text-xl font-semibold">
          {reviews.title?.slice(0, 10)}
        </h2>

        <p className="text-gray-700">{reviews.body}</p>
      </div>

      <div className="border-t px-6 py-3 text-sm text-gray-500">
        Based on user params
      </div>
    </div>
  );
};

export default ReviewDetails;