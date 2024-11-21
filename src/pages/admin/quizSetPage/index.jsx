import CreateQuizForm from "@/pages/admin/quizSetPage/CreateQuizForm";
import BackArrow from "@/svg/BackArrow";
import { Link } from "react-router-dom";

const QuizSetPage = () => {
  return (
    <main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* <!-- Left Column --> */}
        <div>
          <Link
            to={"/dashboard"}
            className="inline-flex items-center text-sm text-gray-600 mb-6 hover:text-buzzr-purple"
          >
            <BackArrow />
            Back to home
          </Link>

          <h2 className="text-3xl font-bold mb-6">
            Give your quiz title and description
          </h2>
          <CreateQuizForm />
        </div>
      </div>
    </main>
  );
};

export default QuizSetPage;
