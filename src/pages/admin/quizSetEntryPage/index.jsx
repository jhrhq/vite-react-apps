import { useGetAdminQuizzesQuery } from "@/api/adminQuizzes";
import Loader from "@/components/Loader";
import BreadCrumb from "@/pages/admin/quizSetEntryPage/BreadCrumb";
import CreateQuestion from "@/pages/admin/quizSetEntryPage/CreateQuestion";
import { useParams } from "react-router-dom";

const QuizEntryPage = () => {
  const { quizId } = useParams();
  const { data, isLoading } = useGetAdminQuizzesQuery(quizId, {
    // pollingInterval: 3000,
  });

  if (isLoading) return <Loader />;
  const currentQuiz = data?.find((quiz) => quiz.id == quizId);
  console.log(currentQuiz);

  return (
    <div className="bg-[#F5F3FF] min-h-screen flex">
      <main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <BreadCrumb />

          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-12">
            {/* <!-- Left Column --> */}
            <div className="">
              <h2 className="text-3xl font-bold mb-4">{currentQuiz?.title}</h2>
              <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-4">
                Total number of questions : {currentQuiz?.Questions.length}
              </div>
              <p className="text-gray-600 mb-4">{currentQuiz?.description}</p>

              <CreateQuestion />
            </div>

            {/* <!-- Right Column --> */}
            <div className="px-4">
              {/* <!-- Question One --> */}
              {/* <QuizEntryQuestion /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizEntryPage;
