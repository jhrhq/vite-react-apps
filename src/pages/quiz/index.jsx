import { useGetQuizQuery } from "@/api/quiz";
import Loader from "@/components/Loader";
import QuizDetailsCard from "@/pages/quiz/QuizDetailsCard";
import QuizQuestion from "@/pages/quiz/Quizquestion";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { quizId } = useParams();
  const { isLoading, data } = useGetQuizQuery(
    quizId
    //   {
    //   pollingInterval: 3000,
    //   skipPollingIfUnfocused: true,
    // }
  );

  console.log(data);
  if (isLoading) return <Loader />;

  return (
    <div className="bg-[#F5F3FF] min-h-screen">
      <main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
          {/* <!-- Left Column --> */}
          <QuizDetailsCard
            title={data?.title}
            description={data?.description}
            totalQuestions={data?.stats?.total_questions}
            participation={data?.total_attempts}
            thumbnail={data?.thumbnail}
          />

          {/* <!-- Right Column --> */}
          {data.questions.length > 0 &&
            data.questions.map((question) => (
              <QuizQuestion key={question.id} {...question} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Quiz;
