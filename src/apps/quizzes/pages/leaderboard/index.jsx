import { useGetQuizAttemptsQuery } from "@quizzes/api/quizzes";
import { default as avatar, default as avater } from "@quizzes/assets/avater.webp";
import Loader from "@quizzes/components/Loader";
import useAuth from "@quizzes/hooks/useAuth";
import useCreateLeaderBoard from "@quizzes/hooks/useCreateLeaderBoard";
import cn from "@quizzes/utility/cn-utility";
import { useParams } from "react-router-dom";

const Leaderboard = () => {
  const { user } = useAuth();
  const { quizId } = useParams();
  const { data, isLoading } = useGetQuizAttemptsQuery(quizId);
  const result = useCreateLeaderBoard(data);
  const currentAttempts = result.find((item) => item.user.id == user.id);

  if (isLoading) return <Loader />;

  return (
    <main className="min-h-[calc(100vh-50px)] flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Left Column --> */}
          <div className="bg-primary rounded-lg p-6 text-white">
            <div className="flex flex-col items-center mb-6">
              <img
                src={avater}
                alt="Profile Pic"
                className="w-20 h-20 rounded-full border-4 border-white mb-4 object-cover"
              />
              <h2 className="text-2xl font-bold">{user.full_name}</h2>
              <p className="text-xl">{currentAttempts.rank} Position</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-sm opacity-75">Mark</p>
                <p className="text-2xl font-bold">{data.quiz.total_marks}</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-75">Correct</p>
                <p className="text-2xl font-bold">{currentAttempts.correct}</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-75">Wrong</p>
                <p className="text-2xl font-bold">{currentAttempts.wrong}</p>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div>
            <h1 className="text-2xl font-bold">Leaderboard</h1>
            <p className="mb-6">{data?.quiz?.title}</p>
            <ul className="space-y-4">
              {result?.map((item) => (
                <li
                  key={item?.user?.id}
                  className={cn(
                    "flex items-center justify-between p-1",
                    item.currentUserRanked ? "border bg-primary/5" : ""
                  )}
                >
                  <div className="flex items-center">
                    <img
                      src={avatar}
                      alt={item.user.full_name}
                      className="object-cover w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{item.user.full_name}</h3>
                      <p className="text-sm text-gray-500">{item.rank}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">{item.mark}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Leaderboard;
