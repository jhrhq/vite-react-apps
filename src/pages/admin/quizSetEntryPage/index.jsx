import {
  useGetAdminQuizzesQuery,
  useUpdateQuizMutation,
} from "@/api/adminQuizzes";
import Loader from "@/components/Loader";
import Button from "@/components/ui/button";
import QuizEntryQuestion from "@/pages/admin/quizSetEntryPage/ QuizEntryQuestion";
import BreadCrumb from "@/pages/admin/quizSetEntryPage/BreadCrumb";
import CreateQuestion from "@/pages/admin/quizSetEntryPage/CreateQuestion";
import { useDispatch } from "@/store";
import { setAdminQuestions } from "@/store/adminQuestionSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const QuizEntryPage = () => {
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAdminQuizzesQuery(quizId, {
    // pollingInterval: 3000,
  });
  const [publishQuiz, { isLoading: publishLoading }] = useUpdateQuizMutation();

  const currentQuiz = data?.find((quiz) => quiz.id == quizId);

  const handlePublishQuiz = () => {
    publishQuiz({
      quizId,
      title: data.title,
      description: data.description,
      status: currentQuiz?.status == "draft" ? "published" : "draft",
    })
      .unwrap()
      .then(() =>
        toast.success(
          `Quiz  ${currentQuiz?.status == "draft" ? "published" : "drafted"}`
        )
      )
      .catch((err) =>
        toast.error(err?.response.data.message || "Something went wrong")
      );
  };

  useEffect(() => {
    if (data) {
      dispatch(setAdminQuestions(currentQuiz)); // Save questions in the store
    }
  }, [currentQuiz, data, dispatch]);

  if (isLoading) return <Loader />;

  return (
    <div className="bg-[#F5F3FF] min-h-screen flex">
      <main className="md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <BreadCrumb />

          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-12">
            {/* <!-- Left Column --> */}
            <div>
              <div className="flex justify-between gap-2 items-center">
                <h2 className="text-3xl font-bold mb-4">
                  {currentQuiz?.title}
                </h2>
                <Button
                  disabled={
                    currentQuiz?.Questions.length == 0 || publishLoading
                  }
                  className=" mb-0 px-2 py-1 rounded"
                  onClick={handlePublishQuiz}
                >
                  {currentQuiz?.status == "draft" ? "Publish" : "Draft"}
                </Button>
              </div>
              <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-4">
                Total number of questions : {currentQuiz?.Questions.length}
              </div>
              <p className="text-gray-600 mb-4">{currentQuiz?.description}</p>

              <CreateQuestion />
            </div>

            {/* <!-- Right Column --> */}
            <div className="px-4">
              {/* <!-- Question One --> */}

              {currentQuiz.Questions.map((quiz) => (
                <QuizEntryQuestion key={quiz.id} {...quiz} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizEntryPage;
