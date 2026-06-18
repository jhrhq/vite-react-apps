import { useParams } from "react-router-dom";
import { Comment } from "./Comment";
import { IssueHeader } from "./IssueHeader";

export default function IssueDetails() {
  const { number } = useParams();

  const issuesQuery = useIssueData(number);
  const commentQuery = useIssueComments(number);

  return (
    <div className="issue-details">
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <IssueHeader {...issuesQuery.data} />
          <main>
            <section>
              {commentQuery.isLoading ? (
                <p>Loading...</p>
              ) : (
                commentQuery.data?.map((comment) => (
                  <Comment key={comment.id} {...comment} />
                ))
              )}
            </section>
          </main>
        </>
      )}
    </div>
  );
}
