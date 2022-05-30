import { useEffect, useState } from "react";

const useReview = (jsonData) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(jsonData)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return [reviews, setReviews];
};

export default useReview;
