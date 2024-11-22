import Button from "@/components/ui/button";
import { useDispatch } from "@/store";
import { setAdminCurrentQuestion } from "@/store/adminQuestionSlice";

const QuizEntryQuestion = ({ id, options, question, correctAnswer }) => {
  const dispatch = useDispatch();

  const handleEditQuestion = () => {
    dispatch(setAdminCurrentQuestion(id));
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-sm mb-4">
      <div className="bg-white p-6 !pb-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{question}</h3>
        </div>
        <div className="space-y-2">
          {options?.map((option) => (
            <label key={option} className="flex items-center space-x-3">
              <input
                type="radio"
                name="answer1"
                className="form-radio text-buzzr-purple"
                defaultChecked={option === correctAnswer}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 bg-primary/10 px-6 py-2">
        <Button className="text-red-600 hover:text-red-800 font-medium py-0 mb-0  bg-transparent">
          Delete
        </Button>
        <Button
          onClick={handleEditQuestion}
          className="text-primary hover:text-primary/80 font-medium py-0 mb-0  bg-transparent"
        >
          Edit Question
        </Button>
      </div>
    </div>
  );
};

export default QuizEntryQuestion;
