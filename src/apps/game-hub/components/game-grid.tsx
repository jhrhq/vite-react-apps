import { SimpleGrid, Text } from "@chakra-ui/react";
import { type GameQuery } from "@game-hub/components/App";
import GameCard from "@game-hub/components/game-card";
import GameCardContainer from "@game-hub/components/game-card-container";
import GameCardSkeleton from "@game-hub/components/game-card-skeleton";
import useGames from "@game-hub/hook/use-games";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
      gap="6"
      width="100%"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {games?.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
