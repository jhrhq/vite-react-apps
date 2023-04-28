import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import IssueItem from "./issue-item";

export default function IssuesList({ labels, status }) {
  const issuesQuery = useQuery({
    queryKey: ["issues", { labels, status }],
    queryFn: () => {
      const statusString = status ? `&status=${status}` : "";
      const labelsString = labels.map((label) => `labels[]=${label}`).join("&");
      return fetch(`/api/issues?${labelsString}${statusString}`).then((res) =>
        res.json()
      );
    },
    staleTime: 1000 * 60,
  });

  const [searchValue, setSearchValue] = useState("");
  const searchQuery = useQuery({
    queryKey: ["issues", "search", searchValue],
    queryFn: () =>
      fetch(`/api/search/issues?q=${searchValue}`).then((res) => res.json()),
    enabled: !!searchValue,
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchValue(e.target.elements.search.value);
        }}
      >
        <label htmlFor="search">Search Issue</label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          onChange={(event) => {
            if (event.target.value.length === 0) {
              setSearchValue("");
            }
          }}
        />
      </form>

      <h2>Issues List</h2>
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : searchQuery.fetchStatus === "idle" &&
        searchQuery.isLoading === true ? (
        <ul className="issues-list">
          {issuesQuery?.data?.map((issue) => (
            <IssueItem
              key={issue.id}
              title={issue.title}
              assignee={issue.assignee}
              number={issue.number}
              commentCount={issue.comments.length}
              createdBy={issue.createdBy}
              createdDate={issue.createdDate}
              labels={issue.labels}
              status={issue.status}
            />
          ))}
        </ul>
      ) : (
        <>
          <h2>Search Results</h2>

          {searchQuery.isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>{searchQuery.data.count} Results</p>
              <ul className="issues-list">
                {searchQuery.data.items.map((issue) => (
                  <IssueItem
                    key={issue.id}
                    title={issue.title}
                    assignee={issue.assignee}
                    number={issue.number}
                    commentCount={issue.comments.length}
                    createdBy={issue.createdBy}
                    createdDate={issue.createdDate}
                    labels={issue.labels}
                    status={issue.status}
                  />
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
}
