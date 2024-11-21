import userAvatar from "@/assets/avater.webp";
import useAuth from "@/hooks/useAuth";
import { useSelector } from "react-redux";

const QuizDetailsCard = ({ title, description }) => {
  const { user } = useAuth();

  const { questions, answers } = useSelector((state) => state.questions);
  const participation = Object.entries(answers).length ?? 0;
  const remaining = questions.length - Object.entries(answers).length;

  return (
    <div className="lg:col-span-1 bg-white rounded-md p-6 h-full flex flex-col">
      <div>
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-col">
          <div className="w-fit bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
            Total number of questions : {questions.length}
          </div>

          <div className="w-fit bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
            Participation : {participation}
          </div>

          <div className="w-fit bg-gray-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
            Remaining : {remaining}
          </div>
        </div>
      </div>

      <div className="mt-auto flex items-center">
        <img
          src={userAvatar}
          alt={user?.full_name}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <span className="text-black font-semibold">{user?.full_name}</span>
      </div>
    </div>
  );
};

export default QuizDetailsCard;
