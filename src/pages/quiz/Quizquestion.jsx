import { useSubmitQuizMutation } from "@/api/quizzes";
import Button from "@/components/ui/button";
import { useDispatch, useSelector } from "@/store";
import {
  nextQuestion,
  previousQuestion,
  setAnswer,
  setShuffleOptions,
} from "@/store/questionSlice";
import { useParams } from "react-router-dom";

const QuizQuestion = () => {
  const dispatch = useDispatch();
  const { quizId } = useParams();

  const { questions, currentIndex, answers } = useSelector(
    (state) => state.questions
  );
  const [mutate, { isLoading }] = useSubmitQuizMutation();

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentQuestion?.id];

  const handleSelectAnswer = (option) => {
    dispatch(setAnswer({ questionId: currentQuestion.id, option }));
  };

  const handleNext = () => {
    dispatch(setShuffleOptions(questions));
    dispatch(nextQuestion()); // Go to the next question
  };

  const handleBack = () => {
    dispatch(setShuffleOptions(questions));
    dispatch(previousQuestion()); // Go to the next question
  };

  const handleSubmit = () => {
    mutate({ answers, quizId });
  };

  return (
    <div className="lg:col-span-2 bg-white">
      <div className="bg-white p-6 !pb-2 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">
            {currentQuestion?.question}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {currentQuestion?.options.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg"
            >
              <input
                type="checkbox"
                onChange={() => handleSelectAnswer(option)}
                name={option}
                className="form-radio text-buzzr-purple"
                checked={selectedAnswer === option}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-between items-center gap-4">
          {currentIndex != 0 && (
            <Button
              // href="./result.html"
              onClick={handleBack}
              className="w-1/2 text-center ml-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8"
            >
              Back
            </Button>
          )}

          {Object.entries(answers).length == questions.length &&
          currentIndex == questions.length - 1 ? (
            <Button
              // href="./result.html"
              onClick={handleSubmit}
              className="w-1/2 text-center ml-auto block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8 disabled: disabled:cursor-not-allowed disabled:opacity-75"
            >
              Submit
            </Button>
          ) : (
            <Button
              // href="./result.html"
              onClick={handleNext}
              disabled={currentIndex == questions.length - 1}
              className="w-1/2 text-center ml-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8 disabled: disabled:cursor-not-allowed disabled:opacity-75"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
