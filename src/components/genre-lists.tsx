import useGenres from "../hook/use-genres";

const GenreLists = () => {
  const { genres, isLoading, error } = useGenres();
  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreLists;
