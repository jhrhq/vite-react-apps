import { useSelector } from "@quizzes/store";
import cn from "@quizzes/utility/cn-utility";

const ResultQuestionCard = ({ question_id, answer }) => {
  const { questions } = useSelector((state) => state.questions);

  const currentQuestion = questions.find(
    (question) => question.id == question_id
  );
  const answerStatus = currentQuestion?.correctAnswer == answer;

  return (
    <div className="rounded-lg overflow-hidden shadow-xs mb-4">
      <div className="bg-white p-6 pb-2!">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{currentQuestion?.question}</h3>
        </div>
        <div className="space-y-2">
          {currentQuestion?.options.map((option) => (
            <label key={option} className={cn("flex items-center space-x-3")}>
              <input
                type="radio"
                name="answer3"
                className="form-radio text-buzzr-purple"
                defaultChecked={currentQuestion?.correctAnswer == option}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "flex space-x-4  px-6 py-2",
          answerStatus ? "bg-green-50" : "bg-red-50"
        )}
      >
        <p className="flex flex-col ">
          Your Answer:{" "}
          <span
            className={cn(
              " font-medium",
              answerStatus ? "text-green-600" : "text-red-600"
            )}
          >
            {answer}
          </span>
        </p>
        <p className="flex flex-col ">
          Correct Answer:{" "}
          <span className=" font-medium text-green-600">
            {currentQuestion?.correctAnswer}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResultQuestionCard;
