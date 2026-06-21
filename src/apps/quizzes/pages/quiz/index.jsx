import { useGetQuestionsQuery } from "@quizzes/api/quizzes";
import Loader from "@quizzes/components/Loader";
import QuizDetailsCard from "@quizzes/pages/quiz/QuizDetailsCard";
import QuizQuestion from "@quizzes/pages/quiz/Quizquestion";
import { useDispatch } from "@quizzes/store";
import { setQuestions } from "@quizzes/store/questionSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { quizId } = useParams();
  const dispatch = useDispatch();

  const { isLoading, data } = useGetQuestionsQuery(quizId);

  // Update the Redux state with questions once they are fetched
  useEffect(() => {
    if (data) {
      dispatch(setQuestions(data?.questions)); // Save questions in the store
    }
  }, [data, dispatch]);

  if (isLoading) return <Loader />;

  return (
    <div className="bg-[#F5F3FF] min-h-screen">
      <main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
          {/* <!-- Left Column --> */}
          <QuizDetailsCard
            title={data?.title}
            description={data?.description}
          />

          {/* <!-- Right Column --> */}

          <QuizQuestion />
        </div>
      </main>
    </div>
  );
};

export default Quiz;
