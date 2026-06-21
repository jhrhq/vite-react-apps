import useAuth from "@quizzes/hooks/useAuth";

const useCreateLeaderBoard = (data) => {
  const { user } = useAuth();
  if (!data) return [];

  const result = data?.attempts
    .map((attempt) => {
      const totalMark = attempt?.submitted_answers?.reduce(
        (total, quiz) => {
          for (const item of attempt.correct_answers) {
            if (quiz.question_id == item.question_id) {
              if (quiz.answer == item.answer) {
                total.correct += 1;
              } else {
                total.wrong += 1;
              }

              total.mark = total.correct * 5;
            }
          }
          return total;
        },
        { correct: 0, wrong: 0, mark: 0 }
      );

      return { user: attempt.user, ...totalMark };
    })
    .sort((a, b) => b.mark - a.mark)
    .map((item, index) => {
      let rank;
      switch (index) {
        case 0:
          rank = "1st";
          break;
        case 1:
          rank = "2nd";
          break;
        case 2:
          rank = "3rd";
          break;
        default:
          rank = `${index + 1}th`;
          break;
      }
      return { ...item, rank };
    })
    .map((item, index) =>
      index <= 5 && item.user.id == user.id
        ? { ...item, currentUserRanked: true }
        : { ...item, currentUserRanked: false }
    );

  return result;
};

export default useCreateLeaderBoard;
