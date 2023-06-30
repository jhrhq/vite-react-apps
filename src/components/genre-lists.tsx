import useGenres from "../hook/use-genres";

const GenreLists = () => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
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
