import { useGetQuizQuery } from "@/api/quiz";
import { nextQuestion, selectQuestion } from "@/store/questionSlice";
import { useDispatch, useSelector } from "react-redux";

const QuizQuestion = ({ question, options }) => {
  const dispatch = useDispatch();
  const { data: questions, isLoading, isError } = useGetQuizQuery();
  const selectedQuestionId = useSelector(
    (state) => state.question.selectedQuestionId
  );
  const currentIndex = useSelector((state) => state.question.currentIndex);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading questions</div>;

  const currentQuestion = questions[currentIndex];

  const handleSelect = (questionId) => {
    dispatch(selectQuestion(questionId)); // Select the current question
  };

  const handleNext = () => {
    dispatch(nextQuestion()); // Go to the next question
  };

  return (
    <div className="lg:col-span-2 bg-white">
      <div className="bg-white p-6 !pb-2 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">{question}</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg"
            >
              <input
                type="checkbox"
                onChange={() => console.log(option)}
                name={option}
                className="form-radio text-buzzr-purple"
                checked
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <a
          href="./result.html"
          className="w-1/2 text-center ml-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8"
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default QuizQuestion;
