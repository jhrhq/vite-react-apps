import { useGetQuizzesQuery } from "@/api/quizzes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import QuizCard from "@/components/QuizCard";
import UserCard from "@/components/UserCard";
import useAuth from "@/hooks/useAuth";

const Home = () => {
  const { isLoggedIn } = useAuth();
  const { isLoading, data: quizzes } = useGetQuizzesQuery();

  if (isLoading) return <Loader />;

  return (
    <div className=" min-h-screen mx-auto py-3 container">
      <Header />
      {isLoggedIn && <UserCard />}
      <main className="bg-white p-6 rounded-md h-full">
        <section>
          <h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quizzes.data.map((quiz) => (
              <QuizCard
                key={quiz.id}
                quizId={quiz.id}
                title={quiz.title}
                total_attempts={quiz.total_attempts}
                total_questions={quiz.total_questions}
                description={quiz.description}
                thumbnail={quiz.thumbnail}
                status={quiz.status}
                isAttempted={quiz.is_attempted}
                isCompleted={false}
              />
            ))}
            {/* <QuizCard isCompleted={false} />
            <QuizCard isCompleted={true} />
            <QuizCard isCompleted={false} /> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
