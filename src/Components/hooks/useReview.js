import { useEffect, useState } from "react";

const useReview = (jsonData) => {
  const [reviews, setReviews] = useState([]);
  // the parameter used INTENTIONALLY for loading json data from different places.
  // specially for using this custom hook. Hope you understand.
  useEffect(() => {
    fetch(jsonData)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [jsonData]);
  return [reviews, setReviews];
};

export default useReview;
