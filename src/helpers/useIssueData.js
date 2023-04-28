function useIssueData(issueNumber) {
  return useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () =>
      fetch(`/api/issues/${issueNumber}`).then((res) => res.json()),
  });
}

export default useIssueData;
