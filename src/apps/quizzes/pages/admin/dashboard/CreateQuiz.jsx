import PlusSvg from "@quizzes/svg/PlusSvg";
import { Link } from "react-router-dom";

const CreateQuiz = () => {
  return (
    <Link to="/quiz-set-page" className="group">
      <div className="bg-white p-6 rounded-lg shadow-xs border border-gray-200 ">
        <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
          <PlusSvg />
        </div>
        <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-all">
          Create a new quiz
        </h3>
        <p className="text-gray-600 text-sm group-hover:scale-105 transition-all">
          Build from the ground up
        </p>
      </div>
    </Link>
  );
};

export default CreateQuiz;
