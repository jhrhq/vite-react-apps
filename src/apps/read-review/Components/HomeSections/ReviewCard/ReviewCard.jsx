import { Star } from "lucide-react";

const ReviewCard = () => {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h5 className="mb-2 text-lg font-semibold">Michel Stu</h5>

      <p className="flex items-center gap-1 text-gray-700">
        Added
        <Star className="h-4 w-4 fill-orange-300 text-orange-300" />
        <Star className="h-4 w-4 fill-orange-300 text-orange-300" />
        review from his user experience
      </p>
    </div>
  );
};

export default ReviewCard;