export const getStorageValue = () => {
  // getting stored value
  const loggedInUser = localStorage.getItem("user");

  return loggedInUser ? JSON.parse(loggedInUser) : null;
};
