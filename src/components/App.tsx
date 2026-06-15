import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { Platform } from "../hook/use-games";
import { Genre } from "../hook/use-genres";
import "./App.css";
import GameGrid from "./game-grid";
import GameHeading from "./game-heading";
import GenreLists from "./genre-lists";
import Navbar from "./navbar";
import PlatformSelector from "./platform-selector";
import SortSelector from "./sort-selector";

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
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <GridItem area="aside" hideBelow="md">
        <GenreLists
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>

      <GridItem area="main" >
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
