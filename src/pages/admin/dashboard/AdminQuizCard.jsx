import HexagonSvg from "@/svg/HexagonSvg";
import { Link } from "react-router-dom";

const AdminQuizCard = ({ id, title, description }) => {
  return (
    <Link
      to={`/quiz-set-entry-page/${id}`}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 group cursor-pointer"
    >
      <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
        <HexagonSvg />
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-all">
        {title}
      </h3>
      <p className="text-gray-600 text-sm group-hover:scale-105 transition-all">
        {description}
      </p>
    </Link>
  );
};

export default AdminQuizCard;
