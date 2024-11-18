import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuizCard from "@/components/QuizCard";
import UserCard from "@/components/UserCard";
import useAuth from "@/hooks/useAuth";

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className=" min-h-screen mx-auto py-3 container">
      <Header />
      {isLoggedIn && <UserCard />}
      <main className="bg-white p-6 rounded-md h-full">
        <section>
          <h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuizCard isCompleted={true} />
            <QuizCard isCompleted={false} />
            <QuizCard isCompleted={true} />
            <QuizCard isCompleted={false} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
