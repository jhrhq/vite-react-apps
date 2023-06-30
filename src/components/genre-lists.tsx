import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hook/use-genres";
import getCroppedImageUrl from "../services/image-urls";

const GenreLists = () => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => console.log(genre)}
              fontSize={"lg"}
              variant={"link"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreLists;
