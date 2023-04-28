function useIssueComments(issueNumber) {
  return useQuery({
    queryKey: ["issues", issueNumber, "comments"],
    queryFn: () =>
      fetch(`/api/issues/${issueNumber}/comments`).then((res) => res.json()),
  });
}

export default useIssueComments;
