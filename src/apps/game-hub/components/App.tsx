import { Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "@game-hub/components/game-grid";
import GameHeading from "@game-hub/components/game-heading";
import GenreLists from "@game-hub/components/genre-lists";
import Navbar from "@game-hub/components/navbar";
import PlatformSelector from "@game-hub/components/platform-selector";
import SortSelector from "@game-hub/components/sort-selector";
import type { Platform } from "@game-hub/hook/use-games";
import type { Genre } from "@game-hub/hook/use-genres";
import { useState } from "react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Container fluid>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gap="2"
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <GridItem area="aside" hideBelow="lg">
          <GenreLists
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>

        <GridItem area="main">
          <GameHeading gameQuery={gameQuery} />
          <Flex paddingLeft={2} marginBottom={5} gap={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
