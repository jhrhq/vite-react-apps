import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReviewLists = ({ review }) => {
  const { user_image, rating, review_text, user_name, user_id } = review;

  const navigate = useNavigate();

  const handleDetailsReview = () => {
    navigate("/reviews/" + user_id);
  };

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4">
          <img
            src={user_image}
            alt={user_name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="md:col-span-8">
          <div className="p-4">
            <h5 className="mb-2 text-lg font-semibold">{user_name}</h5>

            <p className="mb-3 text-gray-700">{review_text}</p>

            <div className="mb-4 flex flex-wrap items-center gap-1 text-sm text-gray-500">
              <span>User Rated the Product</span>

              {[...Array(rating)].map((_, index) => (
                <Star
                  key={index}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}

              <span>Star</span>
            </div>

            <button
              onClick={handleDetailsReview}
              className="rounded border border-sky-500 px-4 py-2 text-sky-500 transition hover:bg-sky-500 hover:text-white"
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewLists;