import { useGetAdminQuizzesQuery } from "@quizzes/api/adminQuizzes";
import Loader from "@quizzes/components/Loader";
import AdminQuizCard from "@quizzes/pages/admin/dashboard/AdminQuizCard";
import CreateQuiz from "@quizzes/pages/admin/dashboard/CreateQuiz";

const Dashboard = () => {
  const { data, isLoading } = useGetAdminQuizzesQuery({
    pollingInterval: 3000,
  });

  if (isLoading) return <Loader />;

  return (
    <main className="grow p-10">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold">Hey There 👋!</h2>
        <h1 className="text-4xl font-bold">Welcome Back To Your Quiz Hub!</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CreateQuiz />

        {data.length > 0 &&
          data.map((quiz) => <AdminQuizCard key={quiz.id} {...quiz} />)}
      </div>
    </main>
  );
};

export default Dashboard;
