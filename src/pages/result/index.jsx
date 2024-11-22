import { useGetQuizAttemptsQuery } from "@/api/quizzes";
import logoWhite from "@/assets/logo-white.svg";
import Loader from "@/components/Loader";
import { Gauge } from "@/components/ProgressCircle";
import ResultQuestionCard from "@/pages/result/ResultQuestionCard";
import { Link, useParams } from "react-router-dom";

const Result = () => {
  const { quizId } = useParams();
  const { data, isLoading } = useGetQuizAttemptsQuery(quizId);
  if (isLoading) return <Loader />;
  const correctAnswer = data?.attempts[0]?.correct_answers;
  const submittedAnswer = data?.attempts[0]?.submitted_answers;

  const totalMark = submittedAnswer?.reduce(
    (total, quiz) => {
      for (const item of correctAnswer) {
        if (quiz.question_id == item.question_id) {
          if (quiz.answer == item.answer) {
            total.correct += 1;
          } else {
            total.wrong += 1;
          }
        }
      }
      return total;
    },
    { correct: 0, wrong: 0 }
  );

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="flex min-h-screen overflow-hidden">
        <img src={logoWhite} className="max-h-11 fixed left-6 top-6 z-50" />
        {/* <!-- Left side --> */}
        <div className="max-h-screen overflow-hidden hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center p-12 relative">
          <div>
            <div className="text-white">
              <div>
                <h2 className="text-4xl font-bold mb-2">{data?.quiz.title}</h2>
                <p>{data?.quiz.description}</p>
              </div>

              <div className="my-6 flex items-center  ">
                <div className="w-1/2">
                  <div className="flex gap-6 my-6">
                    <div>
                      <p className="font-semibold text-2xl my-0">
                        {correctAnswer?.length ?? 0}
                      </p>
                      <p className="text-gray-300">Questions</p>
                    </div>

                    <div>
                      <p className="font-semibold text-2xl my-0">
                        {totalMark?.correct}
                      </p>
                      <p className="text-gray-300">Correct</p>
                    </div>

                    <div>
                      <p className="font-semibold text-2xl my-0">
                        {totalMark?.wrong}
                      </p>
                      <p className="text-gray-300">Wrong</p>
                    </div>
                  </div>

                  <Link
                    to={`/leaderboard/${quizId}`}
                    className=" bg-secondary py-3 rounded-md hover:bg-secondary/90 transition-colors text-lg font-medium underline text-white"
                  >
                    View Leaderboard
                  </Link>
                </div>

                <div className="w-1/2 bg-primary/80 rounded-md border border-white/20 flex items-center p-4">
                  <div className="flex-1">
                    <p className="text-2xl font-bold">
                      {totalMark.correct * 5}/{correctAnswer?.length * 5}
                    </p>
                    <p>Your Mark</p>
                  </div>
                  <div>
                    <Gauge
                      value={totalMark.correct * 5}
                      fullValue={correctAnswer?.length * 5}
                      circleColor="text-blue-500"
                      size="medium"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right side --> */}
        <div className="max-h-screen md:w-1/2 flex items-center justify-center h-full p-8">
          <div className="h-[calc(100vh-50px)] overflow-y-scroll ">
            <div className="px-4">
              {/* <!-- Question 3 --> */}

              {submittedAnswer?.map((quiz) => (
                <ResultQuestionCard key={quiz.question_id} {...quiz} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
